import * as React from "react";
import { MutableRefObject, useEffect } from "react";
import { Theme, ThemeProvider, createTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./dcpNavItems.css";
import { useScroll } from "react-scroll-hooks";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

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

const LinkBehavior = React.forwardRef<
  any,
  Omit<any, 'to'> & { href: any['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  console.log('test');
  // Map href (Material-UI) -> to (react-router)
  return <Link test="bla" ref={ref} to={href} {...other}
    activeClass="active"
    spy={true}
    smooth={true}
    duration={500} />;
});

const themeSetter = (outerTheme: Theme) =>
  createTheme(outerTheme, {
    components: {
      MuiLink: {
        defaultProps: {
          // @ts-ignore
          component: LinkBehavior,
        },
      },
      MuiTab: {
        defaultProps: {
          // @ts-ignore
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

export default function DcpNavItems({ props }: any) {
  // const containerRef = React.useRef<any>(null);
  // const elementRef = React.useRef<any>(null);
  // const scrollSpeed = 50;
  // const { scrollToElement, scrollToY } = useScroll({ scrollSpeed, containerRef });
  const sections = [
    "#section_1",
    "#section_2",
    "#section_3",
    "#section_4",
    "#section_5",
    "#section_6"
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <ThemeProvider theme={themeSetter}>
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
      <Tab label="Item One" value={0} />
      <Tab label="Item One" value={1} />
      <Tab label="Item One" value={2} />
      <Tab label="Item One" value={3} />
      <Tab label="Item One" value={4} />
      <Tab label="Item One" value={5} />
    </Tabs>
      </ThemeProvider>
  );
}
