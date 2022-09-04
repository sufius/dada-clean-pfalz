import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Obfuscate from "react-obfuscate";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

export default function LegalNotes() {
  const theme = useTheme();
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <img
              style={{
                verticalAlign: "bottom",
                maxHeight: matchSmall ? 40 : 47
              }}
              src={matchSmall ? "/logo_white_small.png" : "/logo_white.png"}
              alt="brand for DADA-CLEAN-PFALZ"
            />
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <CallIcon sx={{ mr: 0.2 }} />
          <Obfuscate
            style={{
              color: "inherit",
              textDecoration: "inherit",
              fontSize: matchSmall ? 12 : "inherit"
            }}
            tel="+49 (0) 6341 700 14 30"
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs" sx={{ mb: matchSmall ? 15 : 13 }}>
        <Card>
          <CardHeader
            title="Impressum"
            subheader={
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  border: 0,
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  marginTop: 0,
                  marginBottom: 1
                }}
              />
            }
            sx={{
              pb: 0
            }}
            align="justify"
          />
          <CardContent>
            <Typography variant="caption">
              <strong>Geschäftsführer von DADA-CLEAN-PFALZ</strong>
            </Typography>
            <Typography paragraph variant="body1">
              Herr Houari Dada
            </Typography>

            <Typography variant="caption">
              <strong>Anschrift</strong>
            </Typography>
            <Typography variant="body1">Marktstraße 55</Typography>
            <Typography paragraph variant="body1">
              67487 Maikammer
            </Typography>

            <Typography variant="caption">
              <strong>Handwerkskammer Betriebsnummer</strong>
            </Typography>
            <Typography paragraph variant="body1">
              7026102
            </Typography>

            <Typography variant="caption">
              <strong>Telefonnummer</strong>
            </Typography>
            <Typography paragraph variant="body1">
              <Obfuscate tel="+49 (0) 6341 700 14 30" element="span" />
            </Typography>

            <Typography variant="caption">
              <strong>E-Mail</strong>
            </Typography>
            <Typography variant="body1">
              <Obfuscate email="dada.clean.pfalz@gmail.com" element="span" />
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          boxShadow: "0px -5px 5px rgba(0, 131, 148, 0.3)"
        }}
      >
        <Toolbar sx={{ justifyContent: "center", mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              component={Link}
              sx={{ mt: 3, mb: 0, mr: 1 }}
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Startseite
            </Typography>
            {" - "}
            <Typography
              variant="caption"
              component={Link}
              sx={{ ml: 1, mt: 3, mb: 0 }}
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/datenschutz"
            >
              Datenschutz
            </Typography>
            <Typography variant="caption" component="div" sx={{ mt: 1, mb: 2 }}>
              {"Copyright © "}
              {new Date().getFullYear()}{" "}
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                DADA-CLEAN-PFALZ
              </Link>
              . Alle Rechte vorbehalten.
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
