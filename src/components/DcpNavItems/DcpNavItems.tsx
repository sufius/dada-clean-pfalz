import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./dcpNavItems.css";
import { useHistory } from "react-router-dom";

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

export default function DcpNavItems({ props }: any) {
  const history = useHistory();
  const sections = [
    "#section_1",
    "#section_2",
    "#section_3",
    "#section_4",
    "#section_5",
    "#section_6",
    "#section_7"
  ];
  const [value, setValue] = React.useState(
    sections.indexOf(history.location.hash) !== -1
      ? sections.indexOf(history.location.hash)
      : 0
  );

  console.log(sections[0]);
  console.log(value);
  console.log(sections.indexOf(history.location.hash));
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
      <Tab label="Item 1" component={Link} to={{ hash: sections[0] }} />
      <Tab label="Item 2" component={Link} to={{ hash: sections[1] }} />
      <Tab label="Item 3" component={Link} to={{ hash: sections[2] }} />
      <Tab label="Item 4" component={Link} to={{ hash: sections[3] }} />
      <Tab label="Item 5" component={Link} to={{ hash: sections[4] }} />
      <Tab label="Item 6" component={Link} to={{ hash: sections[5] }} />
      <Tab label="Item 7" component={Link} to={{ hash: sections[6] }} />
    </Tabs>
  );
}
