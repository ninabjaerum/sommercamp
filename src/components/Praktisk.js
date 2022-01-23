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
        <Container>
          <Grid container style={{ paddingTop: "5vh", paddingBottom: "20vh" }}>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
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
                Malmøya er en idyllisk øy utenfor Stavern med mange
                bademuligheter, et perfekt sted å samle sommerminner! På Malmøya
                finner du alt fra nydelige svaberg til frodige eikeskoger.
                <br></br>
                <br></br> Ikke langt fra sjøen ligger Jakthytta, en stor hytte
                med hele 32 sengeplasser, stort kjøkken og flere oppholdsrom med
                god plass. Utenfor hytta er det også flere spennende områder man
                kan utforske, samt egen fotballbane.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  padding: "2vh",
                }}
              >
                <img alt="grilling" width="90%" src="/campfire.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",

                  paddingBottom: "2vh",
                }}
              >
                Sikkerhet
              </Typography>

              <Typography>
                Alle lederne på sommercampen har nylig gjennomført førstehjelp-
                og livredningskurs. Det vil være påbudt med flytevest når vi
                kjører båt og det vil alltid være badevakt til stede når barna
                bader i sjøen. Vi tar sikkerheten til alle deltakerne på campen
                med høyeste alvor og vil ha strenge rutiner for å ivareta denne
                sikkerheten slik at vi er helt trygge på at vi kan håndtere
                ulike utfordringer. Mer informasjon kommer.
              </Typography>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                Transport
              </Typography>

              <Typography>
                Vi ønsker å reise sammen med felles transport hele veien til
                Malmøya. Oppmøte vil være i Oslo-området mandagen den uken du
                skal på tur. Vi tar buss til Larvik og deretter båt til øya,
                hvor vi til slutt går sammen opp til hytta. Nærmere informasjon
                om tid og sted vil komme.
              </Typography>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                Kommunikasjon og hjemlengsel
              </Typography>

              <Typography>
                Vi ønsker at sommercampen skal være helt fritt for
                mobiltelefoner og annet elektronisk utstyr (kamera er tillatt),
                da vi ønsker at barna heller skal delta på aktiviteter ute og
                sammen med andre barn. Det vil være anledning til å ringe
                deltakerne om det skulle være av helt spesielle grunner eller
                akutte nødstilfeller. Dersom barna har behov for å ringe hjem,
                vil de også få muligheten til det.
                <br></br>
                Hjemlengsel er noe som kan oppstå, det er derfor viktig at dere
                prater med barnet på forhånd og gir oss beskjed slik at vi
                sammen gjør det som er best for barnets opphold. Her er vi helt
                avhengig av åpen, direkte og konstruktiv kommunikasjon med
                foreldre/foresatte.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                }}
              >
                Pakkeliste{" "}
              </Typography>
              <Typography>
                Vi oppfordrer alle til å ha med det som er oppgitt på
                pakkelisten under. Ta kontakt med oss dersom dere mangler
                noe/har noen spørsmål, så skal vi prøve å hjelpe til.
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
                  <li>Kamera (for eksempel engangskamera)</li>
                  <li>Leketøy</li>
                  <li>Kosedyr</li>
                  <li>Kamera</li>
                  <li>Caps eller annet hodeplagg</li>
                  <li>Lommelykt</li>
                  <li>Solbriller</li>
                </ul>
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
