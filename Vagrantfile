# -*- mode: ruby -*-
# vi: set ft=ruby :

#############################
# Variables and configuration
#############################

Vagrant.configure("2") do |config|

    module OS
      def OS.windows?
          (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
      end

      def OS.mac?
          (/darwin/ =~ RUBY_PLATFORM) != nil
      end

      def OS.unix?
          !OS.windows?
      end

      def OS.linux?
          OS.unix? and not OS.mac?
      end
    end

    if OS.linux?
      $default_network_interface = `ip route | awk '/^default/ {printf "%s", $5; exit 0}'`
      config.vm.network "public_network", bridge: "#$default_network_interface"
    end

    config.vm.define "my-server" do |server|
      server.vm.synced_folder ".", "/vagrant", disabled: true
      if Vagrant::Util::Platform.windows?
        # https://github.com/adrienkohlbecker/vagrant-fsnotify
        # vagrant plugin install vagrant-fsnotify
        server.vm.synced_folder ".", "/var/www/my-project", fsnotify: true, mount_options: ["dmode=770,fmode=770"]
      else
        # Increase disk speed with nfs: true (Linux only)
        server.vm.synced_folder ".", "/var/www/my-project", nfs: true, mount_options: ["dmode=770,fmode=770"]
      end

      ####### Resources #######
      server.vm.provider "virtualbox" do |vb|
         vb.gui = false
         vb.name = "my-project"
         vb.memory = 3000
         vb.cpus = 4
      end

      # ####### Provision #######
      server.vm.provision "shell", run: "always", privileged: false, inline: <<-SHELL
         sudo apt update
         # https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#confirming-your-installation
         sudo apt install yamllint ansible-lint -y
         cd `/var/www/my-project`
         ansible-lint ansible/api.yml
         ansible-playbook ansible/api.yml
      SHELL

      VAGRANT_DISABLE_RESOLV_REPLACE=1
      server.vm.box = "generic/ubuntu2004"
      server.vm.network "private_network", ip: "10.0.0.10"
      server.vm.network "forwarded_port", guest: 5432, host: 5432, host_ip: "127.0.0.1"
      server.vm.network "forwarded_port", guest: 22,   host: 22, host_ip: "127.0.0.1", id: "ssh"
      server.vm.network "forwarded_port", guest: 80, host: 80, host_ip: "127.0.0.1"
      server.vm.network "forwarded_port", guest: 443, host: 443, host_ip: "127.0.0.1"
      server.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
      for i in 8000..8100
          server.vm.network "forwarded_port", guest: i, host: i, host_ip: "127.0.0.1"
      end
    end

    if Vagrant::Util::Platform.windows?
      # start fsnotify on host after the guest starts or reloads/provisions
      config.trigger.after :up, :reload, :provision do |trigger|
        trigger.info = "********* start fsnotify in background *********"
        trigger.run = {inline: "bash -c 'vagrant fsnotify > fsnotify.log 2>&1 &'"}
      end

      # remove fsnotify.log file
      config.trigger.after :destroy do |trigger|
        trigger.info = "********* removing fsnotify.log *********"
        trigger.run = {inline: "rm  fsnotify.log"}
      end
    end
end
