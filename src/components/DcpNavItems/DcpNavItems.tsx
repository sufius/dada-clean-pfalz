import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScrollspyNav from "react-scrollspy-nav";
import "./dcpNavItems.css";

export default function DcpNavItems() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ScrollspyNav
      scrollTargetIds={["section_1", "section_2", "section_3", "section_4", "section_5", "section_6"]}
      activeNavClass="Mui-selected"
    >
      <BottomNavigation
        sx={{ backgroundColor: "transparent", height: "auto" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          sx={{ color: "inherit !important" }}
          href="#section_1"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          sx={{ color: "inherit !important" }}
          href="#section_2"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          sx={{ color: "inherit !important" }}
          href="#section_3"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder1"
          sx={{ color: "inherit !important" }}
          href="#section_4"
          icon={<FolderIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder2"
          sx={{ color: "inherit !important" }}
          href="#section_5"
          icon={<FolderIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder3"
          sx={{ color: "inherit !important" }}
          href="#section_6"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </ScrollspyNav>
  );
}
