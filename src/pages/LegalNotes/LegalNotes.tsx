import React from "react";
import { styled } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Obfuscate from "react-obfuscate";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";

function LegalNotes() {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <img
              style={{
                verticalAlign: "bottom",
                maxHeight: matchSmall ? 33 : 43
              }}
              src="/logo_white.png"
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
            <Typography variant="body1">Lindenstraße 6</Typography>
            <Typography paragraph variant="body1">
              76829 Landau (Pfalz)
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
              <Obfuscate email="houaridada@outlook.fr" element="span" />
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

export default LegalNotes;