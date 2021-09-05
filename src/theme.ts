import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#33c9dc",
        main: "#00bcd4",
        dark: "#008394",
        contrastText: "#fff"
      },
      secondary: {
        light: "#f6685e",
        main: "#f44336",
        dark: "#aa2e25",
        contrastText: "#fff"
      }
    },
    shape: {
      borderRadius: 0
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html, body {
            background-color: ${grey[100]};
          }
        `
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #008394 30%, #33c9dc 90%)",
            boxShadow: "0 3px 5px 2px rgba(0, 131, 148, .3)"
          }
        }
      }
    }
  })
);

export default theme;
