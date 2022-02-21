import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

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

const themeButton = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#43bc94",
          "&:hover": {
            background: "white",
            color: "#43bc94",
          },
        },
      },
    },
  },
});
const Pamelding = () => {
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title="Påmelding"></SubHeader>
        <Container className="pameld-cont">
          <Grid container style={{ paddingBottom: "15vh" }}>
            <Grid
              item
              xs={12}
              sm={7}
              style={{ paddingTop: "5vh", paddingRight: "2vh" }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                }}
              >
                Hvordan melder jeg meg på?
              </Typography>
              <Typography>
                {" "}
                Barn i alderen 10-12 (5. – 7. klasse) kan søke om å få være med
                på Skye sommercamp, og de som ellers ikke ville hatt mulighet
                til å reise på ferie vil prioriteres. Vi går gjennom søknadene
                så raskt som mulig. Det vil bli ca. 20 plasser hver uke i 4 uker
                med ca. 8 ledere hver uke.{" "}
                <div style={{ paddingTop: "2vh", paddingBottom: "2vh" }}>
                  Deltakelse på Skye Sommercamp er gratis.
                </div>
                <div>
                  <div style={{ fontWeight: "bold", paddingBottom: "1.5vh" }}>
                    Slik er ukene fordelt sommeren 2022:{" "}
                  </div>
                  Uke 25: 20. - 25. juni <br></br>
                  Uke 26: 27. juni – 2. juli 2022 <br></br>
                  Uke 27: 4. - 9. juli 2022 <br></br>
                  Uke 28: 11. - 16. juli 2022 <br></br>
                </div>
              </Typography>

              <br></br>
              <Typography>
                Ved påmeldingen ønsker vi at dere går inn på skjema{" "}
                <NavLink to="/" style={{ color: "#43bc94" }}>
                  her
                </NavLink>{" "}
                eller på knappen under, og fyller ut all nødvendig informasjon.
                Fristen for å melde seg på er (..) og deretter vil vi ta kontakt
                forløpende.
                <div style={{ paddingTop: "2vh", paddingBottom: "2vh" }}>
                  NB! Det gjøres oppmerksom på at det er et svært begrenset
                  antall mennesker som leser søknaden som sendes inn. Denne
                  oppgaven er forbehold et fåtall mennesker som er ansvarlig for
                  inntak til ferieoppholdet. Vi følger personvernloven, og
                  lagrer ikke informasjon som det ikke er gitt tillatelse til.
                </div>
              </Typography>
              <div style={{ paddingTop: "2vh" }}>
                <ThemeProvider theme={themeButton}>
                  <Button variant="contained">Gå til påmeldingsskjema</Button>
                </ThemeProvider>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              style={{
                paddingTop: "5vh",
              }}
            >
              <div style={{ padding: "2vh" }}>
                <img alt="barn leker" width="100%" src="/taulek.jpg"></img>
              </div>
              <div style={{ padding: "2vh" }}>
                <img
                  alt="barn leker"
                  width="100%"
                  src="https://images.unsplash.com/photo-1464808322410-1a934aab61e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                ></img>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                paddingTop: "5vh",
              }}
            >
              <div>
                <Typography variant="h6">
                  Hvilket ansvar har du som påmelder til Skye sommercamp?
                </Typography>
                <Typography>
                  <ul>
                    <li>Sikre at barnet som meldes på har behov for ferie.</li>
                    <li>
                      Sikre at barnet som meldes på har mulighet til å delta på
                      ferieoppholdet.
                    </li>
                    <li>
                      Vite at barnet fungerer fint sammen med andre, uten behov
                      for faglig og/eller medisinsk oppfølging.
                    </li>
                    <li>
                      Være tilgjengelig for oss i tiden før, under og etter
                      oppholdet dersom det er behov for ytterligere informasjon
                      om barnet. Vi ber deg også føre opp et bakvaktnummer, i
                      tilfelle du selv er på ferie i den aktuelle perioden.
                    </li>
                  </ul>
                </Typography>
              </div>
              <div>
                <Typography variant="h6">
                  Hvilke forventinger kan du som melder på et barn på Skye
                  Sommercamp ha?
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      Skye Sommercamp instruktørene er til stede for å være
                      medmennesker, de er ikke fagpersoner, og det forventes
                      derfor heller ikke at de skal kunne håndtere faglig
                      utfordrende situasjoner.
                    </li>
                    <li>
                      Skye sommercamp instruktører er tilgjengelig for barna
                      under hele oppholdet
                    </li>
                    <li>
                      Skye sommercamp dekker kost og losji (helpensjon). Det tas
                      hensyn til allergier og de matpreferanser vi klarer å
                      imøtekomme
                    </li>
                    <li>
                      Det blir arrangert spennende ferieaktiviteter hver dag
                    </li>
                  </ul>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Pamelding;
