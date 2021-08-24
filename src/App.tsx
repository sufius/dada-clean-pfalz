import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import DcpAppBar from "./components/DcpAppBar";
import grey from "@material-ui/core/colors/grey";

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
    },
  })
);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <DcpAppBar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v5-beta example with TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
