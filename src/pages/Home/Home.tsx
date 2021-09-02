import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { scroller, Element } from "react-scroll";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import DcpCarousel from "../../components/DcpCarousel";
import Hero from "../../components/Hero";

const drawerWidth = 240;

const Home: FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [value, setValue] = React.useState("section_1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    scroller.scrollTo(newValue, {
      duration: 1000,
      delay: 100,
      smooth: true,
      containerId: "body",
      offset: -100 // Scrolls to element + 50 pixels down the page
    });
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%"
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Responsive drawer
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
            textColor="inherit"
          >
            <Tab label="Start" value={"section_1"} />
            <Tab label="Über uns" value={"section_2"} />
            <Tab label="Dienstleistungen" value={"section_3"} />
            <Tab label="Bewertungen" value={"section_4"} />
            <Tab label="Kontakt" value={"section_5"} />
          </Tabs>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Element name="section_1" component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Hero />
        <Container maxWidth="lg" id="layoutContent">
          <Element name="section_2">
            <Box sx={{ mt: 2 }}>
              <Typography paragraph>
                Mit DADA-CLEAN-PFALZ sind wir als Familienunternehmen schon seit
                10 Jahren erfolgreich in der Reinigungsbranche tätig. Wir
                entwickeln auf Sie zugeschnittene Lösungen rund um das Thema
                Reinigung und Pflege von Innen- und Außenanlagen. Unser Ziel ist
                es unserem hohen Qualitätsanspruch gerecht zu werden, diesen zu
                wahren, um somit eine vertrauensvolle Zusammenarbeit zu
                schaffen, sodass Sie sich auf Ihr Kerngeschäft konzentrieren
                können.
              </Typography>
            </Box>
          </Element>
          <Element name="section_3">
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                REINIGUNG VON BÜROS, GEBÄUDEN UND WOHNHÄUSERN
              </Typography>
              <Typography paragraph>
                Die professionelle Reinigung von Büroräumen umfasst die
                vollständige Reinigung aller Arten von Verunreinigungen mit
                einem Staubsauger sowie die manuelle und maschinelle Reinigung
                von Fenstern und Fensterbänken, Türen und Türgriffen, Böden,
                Geländer, Schildern und dekorativen Komponenten des Innenraums.
                Bei der Büroreinigung achten wir nicht nur auf alle Oberflächen
                und Einrichtungselemente, sondern auch auf die Büroausstattung.
                Auch Schränke, Regale, Heizkörperblenden, Lüftungsgitter und
                Oberflächen von Stühlen und Sesseln werden in den
                Reinigungsprozess miteinbezogen.
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                REINIGUNG VON GESCHÄFTSRÄUMEN
              </Typography>
              <Typography paragraph>
                Wir bieten auch eine breite Palette von Vorschlägen für die
                kostengünstige und tägliche Reinigung von Geschäftsräumen an.
                Wir verwenden nur sichere Reinigungsmittel und moderne
                Waschgeräte zu einem erschwinglichen Preis und bieten ein
                Rabattsystem für Stammkunden sowie einen fortlaufenden
                Leistungsnachweis, um somit eine Garantie für die Sauberkeit
                aller Räumlichkeiten ohne hohe Kosten zu gewährleisten! Auch die
                Reinigung schwer zugänglicher Stellen, Trockenreinigung von
                Möbeln, Spiegeln, Fenstern, Rohren, Lüftungs- und Isolierkästen,
                Kristallisation von Fußböden, Waschen von Wänden gehören zu
                unseren Aufgaben in diesem Tätigkeitsfeld.
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                HOCHDRUCK-, BAU- UND GRUNDREINIGUNG
              </Typography>
              <Typography paragraph>
                So, die Renovierung ist endlich vorbei... Aber wie geht es nun
                weiter? In der Regel ist zunächst eine gründliche Reinigung
                aller Räume nötig, das heißt die Beseitigung von
                Bauschuttresten, Staub, Spuren von Spachtelresten auf Glas und
                Bodenbelägen. Wir führen nicht nur die Reinigung durch, sondern
                desinfizieren auch die Sanitärarmaturen - also die Orte der
                größten Schmutzansammlung. Bei Bedarf führen wir auch
                Hochhausarbeiten durch und waschen den äußeren Teil von Fenstern
                und Fassaden. Es gibt also jede Menge Arbeit, die nur darauf
                wartet pünktlich und sorgfältig bewältigt zu werden.
              </Typography>
              <Typography variant="h4" component="h1" gutterBottom>
                SOLARANLAGENREINIGUNG UND GARTENPFLEGE
              </Typography>
              <Typography paragraph>
                Alle Pflanzen, von Blumen bis hin zu Bäumen, erfordern eine
                ständige Pflege in Form von Bewässerung, Beschneidung und
                Behandlung von speziellen Pestiziden. Das pflanzen und pflegen
                von Pflanzen ist ein sehr mühsamer Prozess, der entsprechende
                Kenntnisse, Mühe und Zeit erfordert. Wir helfen Ihnen gerne
                dabei und kümmern uns um eine Lockerung des Bodens und seine
                Düngung, das gießen der Pflanzen, das schützen der Pflanzen vor
                Schädlingen und Krankheiten, dem beschneiden von Zweigen und
                natürlich auch dem rasenmähen.
              </Typography>
            </Box>
          </Element>
          <Element name="section_4">
            <Box sx={{ mb: 2 }}>
              <DcpCarousel />
            </Box>
          </Element>
          <Element name="section_5">
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Gratis ANGEBOT EINHOLEN
              </Typography>
              <Typography paragraph>
                Kontaktieren Sie uns jetzt. Wir rufen Sie umgehend zurück
                beantworten Ihnen alle Fragen und erstellen ein auf Sie
                zugeschnittenes Angebot.
              </Typography>
            </Box>
          </Element>
        </Container>
      </Element>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Dada-Clean-Pfalz
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </>
  );
};

export default Home;
