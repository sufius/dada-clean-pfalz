import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";
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
import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import DcpCarousel from "../../components/DcpCarousel";
import Hero from "../../components/Hero";

const drawerWidth = 240;

type Inputs = {
  name: string;
  email: string;
  mobile: string;
  emailText: string;
};

const Home: FC = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = data => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("/request/quotation", requestOptions)
      .then(data => {
        console.log(data);
      });
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
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
            Dada-Clean-Pfalz
          </Typography>
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Element name="section_1" component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Hero />
        <Container maxWidth="lg" id="layoutContent">
          <Element name="section_2">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ mt: 6 }}
            >
              ÜBER UNS
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: "100%", borderRadius: "4px" }}>
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
              sx={{ mt: 6 }}
            >
              DIENSTLEISTUNGEN
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  REINIGUNG VON BÜROS, <br /> GEBÄUDEN UND WOHNHÄUSERN
                </Typography>
                <Typography paragraph align="justify">
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
                <Typography paragraph align="justify">
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
                <Typography paragraph align="justify">
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
                <Typography paragraph align="justify">
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
              sx={{ mt: 6, mb: 4 }}
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
              sx={{ mt: 6, mb: 4 }}
            >
              GRATIS ANGEBOT EINHOLEN
            </Typography>
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
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        {...register("name", { required: true })}
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
                        {...register("email", {
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
                      <TextField
                        error={Boolean(errors.mobile)}
                        helperText={
                          Boolean(errors.emailText) &&
                          "Sie müssen eine Telefonnummer eingeben"
                        }
                        label="Telefonnummer"
                        fullWidth
                        required
                        variant="filled"
                        type="tel"
                        placeholder="0176 123 456 78"
                        {...register("mobile", {
                          required: true,
                          maxLength: 15
                        })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...register("emailText", { required: true })}
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
                </CardContent>
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
              </Card>
            </Box>
          </Element>
        </Container>
      </Element>
      <Typography
        variant="caption"
        color="textSecondary"
        align="center"
        paragraph
        sx={{ mt: 6 }}
      >
        {"Copyright © "}
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/"
          onClick={event => {
            handleChange(event, "section_1");
          }}
        >
          Dada-Clean-Pfalz
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </>
  );
};

export default Home;
