import React, { FC, useState } from "react";
import { makeStyles, styled } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { scroller, Element } from "react-scroll";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/core/Alert";
import Obfuscate from "react-obfuscate";
import CallIcon from "@material-ui/icons/Call";
import DcpCarousel from "../../components/DcpCarousel";
import Hero from "../../components/Hero";
import DcpPhoneInput from "../../components/DcpPhoneInput";

const drawerWidth = 240;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-end",
  flexDirection: "column",
  paddingTop: "16px",
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    justifyContent: "center"
  }
}));

type Inputs = {
  name: string;
  email: string;
  mobile: string;
  emailText: string;
};

const defaultValues = {
  name: "",
  email: "",
  mobile: "+49",
  emailText: ""
};

const Home: FC = () => {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
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

  const [submitted, setSubmitted] = React.useState(false);
  const methods = useForm<Inputs>({
    defaultValues,
    mode: "all",
    reValidateMode: "onBlur"
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = data => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("/request/quotation", requestOptions).then(data => {
      setSubmitted(true);
    });
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Start",
          "Über uns",
          "Dienstleistungen",
          "Bewertungen",
          "Kontakt"
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={event => {
              handleChange(event, `section_${index + 1}`);
            }}
          >
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
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
              onClick={event => {
                handleChange(event, "section_1");
              }}
            >
              DADA-CLEAN-PFALZ
            </Link>
          </Typography>
          {!matchMedium ? (
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
          ) : null}

          <CallIcon sx={{ ml: 3, mr: 1 }} />
          <Obfuscate
            style={{
              color: "inherit",
              textDecoration: "inherit",
              minWidth: "169px"
            }}
            tel="+49 (0) 6341 700 14 30"
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, mr: 2, display: { md: "none" } }}
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Element name="section_1" component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Hero onChange={handleChange} />
        <Container maxWidth="lg" id="layoutContent">
          <Element name="section_2">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: "light", mb: 0, mt: !matchMedium ? 6 : 4 }}
            >
              ÜBER UNS
            </Typography>
            <Grid container spacing={2} sx={{ mt: !matchMedium ? 1 : 0 }}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    borderRadius: "4px",
                    display: { md: "block", xs: "none" }
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/profile_picture.jpg"
                    alt="image about us"
                    loading="lazy"
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography paragraph align="justify">
                  Mit DADA-CLEAN-PFALZ sind wir als Familienunternehmen schon
                  seit 10 Jahren erfolgreich in der Reinigungsbranche tätig. Wir
                  entwickeln für unsere Kunden maßgeschneiderte Lösungen rund um
                  das Thema Reinigung und Pflege von Innen- und Außenanlagen.
                  Unser Ziel ist es unserem Qualitätsanspruch gerecht zu werden
                  und diesen zu wahren, um somit eine Vertrauensbasis zu
                  schaffen, während sich der Kunde auf sein Kerngeschäft
                  konzentrieren kann.
                </Typography>
                <Card
                  sx={{
                    maxWidth: "100%",
                    borderRadius: "4px",
                    display: { md: "none", sm: "block" },
                    mb: 2
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/profile_picture.jpg"
                    alt="image about us"
                    loading="lazy"
                  />
                </Card>
                <Typography paragraph align="justify">
                  Unser einzigartiges Angebot ist die Reinigung von Innen- und
                  Außenanlagen zu wettbewerbsfähigen Preisen. Egal ob Reinigung
                  von Wohnungen, Büros, Hütten, Garagen, Solaranlagen, Fenstern,
                  Treppen, Teppichen, Gartenarbeiten, dem Reinigen nach
                  Renovierungs- und Sanierungsarbeiten, einem Frühjahrsputz,
                  aber auch das Erledigen von alltäglichen
                  Hausmeistertätigkeiten. Wir bieten unseren Kunden ein breites
                  Portfolio an Dienstleistungen rund um das Thema Reinigung und
                  Sauberkeit. Überzeugen sie sich selbst und fordern sie noch
                  heute ein Angebot an!
                </Typography>
              </Grid>
            </Grid>
          </Element>
          <Element name="section_3">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: "light", mb: 0, mt: !matchMedium ? 4 : 2 }}
            >
              DIENSTLEISTUNGEN
            </Typography>
            <Grid container spacing={2} sx={{ mt: 0 }}>
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  REINIGUNG VON BÜROS, <br /> GEBÄUDEN UND WOHNHÄUSERN
                </Typography>
                <Typography align="justify">
                  Die professionelle Reinigung von Büroräumen umfasst die
                  vollständige Reinigung aller Arten von Verunreinigungen mit
                  einem Staubsauger sowie die manuelle und maschinelle Reinigung
                  von Fenstern und Fensterbänken, Türen und Türgriffen, Böden,
                  Geländer, Schildern und dekorativen Komponenten des
                  Innenraums. Bei der Büroreinigung achten wir nicht nur auf
                  alle Oberflächen und Einrichtungselemente, sondern auch auf
                  die Büroausstattung. Auch Schränke, Regale, Heizkörperblenden,
                  Lüftungsgitter und Oberflächen von Stühlen und Sesseln werden
                  in den Reinigungsprozess miteinbezogen.
                </Typography>
              </Grid>
              <Grid item xs={false} md={2}></Grid>
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  REINIGUNG VON <br /> GESCHÄFTSRÄUMEN
                </Typography>
                <Typography align="justify">
                  Wir bieten auch eine breite Palette von Vorschlägen für die
                  kostengünstige und tägliche Reinigung von Geschäftsräumen an.
                  Wir verwenden nur sichere Reinigungsmittel und moderne
                  Waschgeräte zu einem erschwinglichen Preis und bieten ein
                  Rabattsystem für Stammkunden sowie einen fortlaufenden
                  Leistungsnachweis, um somit eine Garantie für die Sauberkeit
                  aller Räumlichkeiten ohne hohe Kosten zu gewährleisten! Auch
                  die Reinigung schwer zugänglicher Stellen, Trockenreinigung
                  von Möbeln, Spiegeln, Fenstern, Rohren, Lüftungs- und
                  Isolierkästen, Kristallisation von Fußböden, Waschen von
                  Wänden gehören zu unseren Aufgaben in diesem Tätigkeitsfeld.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  HOCHDRUCK-, BAU- <br /> UND GRUNDREINIGUNG
                </Typography>
                <Typography align="justify">
                  So, die Renovierung ist endlich vorbei... Aber wie geht es nun
                  weiter? In der Regel ist zunächst eine gründliche Reinigung
                  aller Räume nötig, das heißt die Beseitigung von
                  Bauschuttresten, Staub, Spuren von Spachtelresten auf Glas und
                  Bodenbelägen. Wir führen nicht nur die Reinigung durch,
                  sondern desinfizieren auch die Sanitärarmaturen - also die
                  Orte der größten Schmutzansammlung. Bei Bedarf führen wir auch
                  Hochhausarbeiten durch und waschen den äußeren Teil von
                  Fenstern und Fassaden. Es gibt also jede Menge Arbeit, die nur
                  darauf wartet pünktlich und sorgfältig bewältigt zu werden.
                </Typography>
              </Grid>
              <Grid item xs={false} md={2}></Grid>
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  GARTENPFLEGE UND <br /> SOLARANLAGENREINIGUNG
                </Typography>
                <Typography align="justify">
                  Alle Pflanzen, von Blumen bis hin zu Bäumen, erfordern eine
                  ständige Pflege in Form von Bewässerung, Beschneidung und
                  Behandlung von speziellen Pestiziden. Das pflanzen und pflegen
                  von Pflanzen ist ein sehr mühsamer Prozess, der entsprechende
                  Kenntnisse, Mühe und Zeit erfordert. Wir helfen Ihnen gerne
                  dabei und kümmern uns um eine Lockerung des Bodens und seine
                  Düngung, das gießen der Pflanzen, das schützen der Pflanzen
                  vor Schädlingen und Krankheiten, dem beschneiden von Zweigen
                  und natürlich auch dem rasenmähen.
                </Typography>
              </Grid>
            </Grid>
          </Element>
          <Element name="section_4">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: "light",
                mb: !matchMedium ? 3 : 2,
                mt: !matchMedium ? 4 : 3
              }}
            >
              BEWERTUNGEN
            </Typography>
            <Paper elevation={1} sx={{ mb: 2 }}>
              <DcpCarousel />
            </Paper>
          </Element>
          <Element name="section_5">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: "light",
                mb: !matchMedium ? 3 : 2,
                mt: !matchMedium ? 6 : 5
              }}
            >
              GRATIS ANGEBOT EINHOLEN
            </Typography>
            <FormProvider {...methods}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Card>
                  <CardHeader
                    title="Kontakt formular"
                    subheader="Kontaktieren Sie uns jetzt! Wir rufen Sie umgehend zurück und bemühen uns
                  all Ihre Fragen zu beantworten. Anschließend erstellen wir
                  Ihnen ein individuelles Angebot."
                    sx={{
                      pb: 0
                    }}
                    align="justify"
                  />
                  <CardContent>
                    {!submitted ? (
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="name"
                            inputRef={register({ required: true })}
                            error={Boolean(errors.name)}
                            helperText={
                              Boolean(errors.name) &&
                              "Sie müssen einen Namen eingeben"
                            }
                            id="name"
                            label="Name"
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="email"
                            inputRef={register({
                              required: true,
                              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            })}
                            error={Boolean(errors.email)}
                            helperText={
                              Boolean(errors.email) &&
                              "Sie müssen eine E-Mail eingeben"
                            }
                            id="email"
                            label="E-Mail"
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <DcpPhoneInput />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="emailText"
                            inputRef={register({ required: true })}
                            error={Boolean(errors.emailText)}
                            helperText={
                              Boolean(errors.emailText) &&
                              "Sie müssen einen E-Mail-Text eingeben"
                            }
                            id="email-text"
                            label="E-Mail-Text"
                            multiline
                            minRows={10}
                            maxRows={20}
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                      </Grid>
                    ) : (
                      <Alert severity="success">
                        Nachricht erfolgreich gesendet! Vielen Dank für Ihre
                        Anfrage. Wir werden uns umgehend bei Ihnen melden.
                      </Alert>
                    )}
                  </CardContent>
                  {!submitted ? (
                    <CardActions
                      sx={{
                        p: 2,
                        pt: 0
                      }}
                    >
                      <Button
                        disabled={!isValid}
                        type="submit"
                        variant="contained"
                        size="large"
                      >
                        Anfrage senden
                      </Button>
                    </CardActions>
                  ) : null}
                </Card>
              </Box>
            </FormProvider>
          </Element>
        </Container>
      </Element>
      <Box
        sx={{
          flexGrow: 1,
          mt: 4,
          boxShadow: "0px -5px 5px rgba(0, 131, 148, 0.3)"
        }}
      >
        <AppBar position="static">
          <StyledToolbar>
            <Grid container spacing={2} sx={{ pt: matchSmall ? 1 : 3, ml: 0 }}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={
                  !matchSmall
                    ? { borderRight: "1px solid rgba(255, 255, 255, 0.4)" }
                    : {}
                }
              >
                <Typography align="center" sx={{ pt: matchSmall ? 1 : 0 }}>
                  <Link
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                      fontWeight: "bold"
                    }}
                    to="/"
                    onClick={event => {
                      handleChange(event, "section_1");
                    }}
                  >
                    DADA-CLEAN-PFALZ
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  align="center"
                  sx={{ pb: 2, fontWeight: "light" }}
                >
                  GEBÄUDE-, GRUND- UND <br />
                  BAUREINIGUNG
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                >
                  Telefon:
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    pb: matchSmall ? 3 : 2,
                    fontWeight: "light",
                    borderBottom: matchSmall
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : ""
                  }}
                >
                  <Obfuscate
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    tel="+49 (0) 6341 700 14 30"
                  />
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={
                  !matchSmall
                    ? { borderRight: "1px solid rgba(255, 255, 255, 0.4)" }
                    : {}
                }
              >
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    pt: matchSmall ? 1 : 0
                  }}
                >
                  Inhaber:
                </Typography>
                <Typography align="center" sx={{ pb: 2, fontWeight: "light" }}>
                  Herr Houari Dada
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                >
                  Handwerkskammer <br />
                  Betriebsnummer:
                </Typography>
                <Typography
                  component="p"
                  align="center"
                  sx={{
                    pb: matchSmall ? 3 : 2,
                    fontWeight: "light",
                    borderBottom: matchSmall
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : ""
                  }}
                >
                  7026102
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    pt: matchSmall ? 1 : 0
                  }}
                >
                  Anschrift:
                </Typography>
                <Typography align="center" sx={{ fontWeight: "light" }}>
                  Lindenstraße 6
                </Typography>
                <Typography align="center" sx={{ pb: 2, fontWeight: "light" }}>
                  76829 Landau (Pfalz)
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                >
                  E-Mail:
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    pb: matchSmall ? 3 : 2,
                    fontWeight: "light",
                    borderBottom: matchSmall
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : ""
                  }}
                >
                  <Obfuscate
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    email="houaridada@outlook.fr"
                    headers={{
                      subject: "Nachricht von Webseite",
                      body: "Sehr geehrte Damen und Herren,"
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {"Copyright © "}
                  {new Date().getFullYear()}{" "}
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/"
                    onClick={event => {
                      handleChange(event, "section_1");
                    }}
                  >
                    DADA-CLEAN-PFALZ
                  </Link>
                  . Alle Rechte vorbehalten.
                </Typography>
              </Grid>
            </Grid>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Home;
