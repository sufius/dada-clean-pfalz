import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./dcpNavItems.css";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function DcpNavItems() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs"
      textColor="inherit"
    >
      <Tab label="Item 1" component={RouterLink} to={{ hash: `#section_1` }} />
      <Tab label="Item 2" component={RouterLink} to={{ hash: `#section_2` }} />
      <Tab label="Item 3" component={RouterLink} to={{ hash: `#section_3` }} />
      <Tab label="Item 4" component={RouterLink} to={{ hash: `#section_4` }} />
      <Tab label="Item 5" component={RouterLink} to={{ hash: `#section_5` }} />
      <Tab label="Item 6" component={RouterLink} to={{ hash: `#section_6` }} />
      <Tab label="Item 7" component={RouterLink} to={{ hash: `#section_7` }} />
    </Tabs>
  );
}
