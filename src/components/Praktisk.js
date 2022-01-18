import SubHeader from "./SubHeader";
import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const titlesTheme = createTheme();

titlesTheme.typography.h4 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [titlesTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

const Praktisk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title="Praktisk informasjon"></SubHeader>
        <Container className="">
          <Grid container style={{ paddingTop: "5vh", paddingBottom: "20vh" }}>
            <Grid item xs={12} sm={6} style={{ padding: "0.5vh" }}>
              <Typography
                variant="h4"
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                Overnatting
              </Typography>
              <Typography variant="h6" className="subtitles">
                Hytta på Maløya
              </Typography>
              <Typography>
                Integer eget lacus scelerisque, gravida quam quis, ultricies
                massa. Duis log venenatis cursus risus at ultrices. Sed
                consequat tortor elit, eu laoreet enim maximus et. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Phasellus quis hendrerita ipsum.
              </Typography>

              <Typography variant="h6" className="subtitles">
                Beliggenhet og fasiliteter
              </Typography>
              <Typography>
                Etiam a tincidunt quam. Nullam iaculis volutpat urna ut tempus.
                Mauris venenatis velit lectus, in consectetur leo iaculis
                interdum. Nullam vel metus euismod tellus convallis blandit.
                Integer posuere suscipit ullamcorper. Nam quis neque enim.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "0.5vh" }}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  padding: "2vh",
                }}
              >
                <img alt="grilling" width="100%" src="/campfire.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                Pakkeliste{" "}
              </Typography>
              <Typography>
                Vi oppfordrer alle til å ha med det som er oppgitt på
                pakkelisten under. Ta kontakt med oss ved spørsmål, så kan vi se
                om vi kan hjelpe til med noe.
                <ul>
                  <li>Sko (joggesko og sandaler)</li>
                  <li>Toalettsaker</li>
                  <li>Solkrem</li>
                  <li>Klær</li>
                  <ul>
                    <li>Tykk genser (Ull/fleece)</li>
                    <li>Badetøy</li>
                    <li>Ullundertøy</li>
                    <li>Undertøy</li>
                    <li>Lue og votter i tilfelle det blir kaldt</li>
                    <li>Ullsokker</li>
                    <li>
                      Diverse hverdagsklær som passer både til varme sommerdager
                      og mer utfordrende vær
                    </li>
                  </ul>
                  <li>Ytterjakke (Eventuelt også turbukse/utebukse)</li>
                  <li>Regntøy og støvler</li>
                  <li>Håndkle (Dusj og bading)</li>
                  <li>
                    Enkelt sengetøy/sovepose (putevar, dynetrekk og laken)
                  </li>
                  <li>Liten dagstursekk</li>
                  <li>Drikkeflaske</li>
                </ul>
                Andre ting som kan være greit å ta med:
                <ul>
                  <li>Lesestoff</li>
                  <li>Mobiltelefon eller liknende</li>
                  <li>Leketøy</li>
                  <li>Kosedyr</li>
                  <li>Kamera</li>
                  <li>Caps eller annet hodeplagg</li>
                  <li>Lommelykt</li>
                  <li>Solbriller</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "2vh" }}>
              <Typography
                variant="h4"
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                Transport
              </Typography>
              <Typography variant="h6" className="subtitles">
                Hvordan kommer jeg til campen?
              </Typography>
              <Typography>
                Integer eget lacus scelerisque, gravida quam quis, ultricies
                massa. Duis log venenatis cursus risus at ultrices. Sed
                consequat tortor elit, eu laoreet enim maximus et. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Phasellus quis hendrerita ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Praktisk;
