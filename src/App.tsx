import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import grey from "@material-ui/core/colors/grey";
import { BaseScrollOptions, useHashScroll } from "react-hash-scroll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DcpAppBar from "./components/DcpAppBar";
import Home from "./pages/Home";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#4dd5f5",
        main: "#21CBF3",
        dark: "#178eaa",
        contrastText: "#fff"
      },
      secondary: {
        light: "#4dabf5",
        main: "#2196F3",
        dark: "#1769aa",
        contrastText: "#fff"
      }
    },
    shape: {
      borderRadius: 0
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html, body {
            background-color: ${grey[100]};
          }
        `
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)"
          }
        }
      }
    }
  })
);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Dada-Clean-Pfalz
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path={"/"}>
          <DcpAppBar>
            <Home />
            <Copyright />
          </DcpAppBar>
        </Route>
      </Router>
    </ThemeProvider>
  );
}
