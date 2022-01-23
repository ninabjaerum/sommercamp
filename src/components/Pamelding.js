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
        <SubHeader title="Påmelding og plasser"></SubHeader>
        <Container className="pameld-cont">
          <Grid container style={{ paddingBottom: "15vh" }}>
            <Grid
              item
              xs={12}
              sm={7}
              style={{ paddingTop: "5vh", paddingRight: "1vh" }}
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
                Dette er et gratis arrangement (gjennomført av EY Skye) og er
                ment for barn i alderen 10-12 år som av ulike grunner ikke har
                mulighet til å reise på ferie hjemmefra. Vi ønsker å tilby et
                meningsfylt alternativ hvor vi tar med barna på spennende
                aktiviteter. Vi går gjennom søknadene så raskt som mulig. Det
                vil bli ca. 20 plasser hver uke fordelt på 4 uker med ca. 8
                ledere hver uke. <br></br>
                <br></br>
                Slik er ukene fordelt: <br></br>
                <br></br>
                Uke 25: 20-25 juni 2022 <br></br>
                Uke 26: 27 juni – 2 juli 2022 <br></br>
                Uke 27: 4-9 juli 2022 <br></br>
                Uke 28: 11-16 juli 2022 <br></br>
              </Typography>

              <br></br>
              <Typography>
                Ved påmeldingen ønsker vi at dere går inn på skjema{" "}
                <NavLink to="/" style={{ color: "#43bc94" }}>
                  her
                </NavLink>{" "}
                eller på knappen under, og fyller ut all nødvendig informasjon.
                Det er dessverre ikke sikkert alle som melder seg på får være
                med da dette er et arrangement for de som trenger det aller
                mest. Fristen for å melde seg på er (..) og deretter vil vi ta
                kontakt forløpende.
              </Typography>
              <div style={{ paddingTop: "2vh" }}>
                <ThemeProvider theme={themeButton}>
                  <Button variant="contained">Påmeldingsskjema</Button>
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
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Pamelding;
