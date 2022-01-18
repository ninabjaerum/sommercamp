import SubHeader from "./SubHeader";
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
const Pamelding = () => {
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title="Påmelding og plasser"></SubHeader>
        <Container className="pameld-cont">
          <Grid container style={{ paddingBottom: "7vh" }}>
            <Grid item xs={7} style={{ paddingTop: "5vh" }}>
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
                ledere hver uke.{" "}
              </Typography>
              <Typography variant="h6" className="subtitles">
                Send søknad via e-post
              </Typography>
              <Typography>
                Dersom du ønsker å melde ditt barn på camp, ber vi om at du
                sender oss en e-post til PLACEHOLDER@mail.com{" "}
              </Typography>
              <br></br>
              <Typography>
                Vi ønsker at barn som ikke har muligheten til å reise på ferie
                med egen familie/foresatte også skal få en minnerik sommer lek,
                moro og nye bekjentskaper. Vi har plass til ca. 20 barn hver uke
                og har til sammen 4 uker, derfor er det dessverre ikke sikkert
                alle som melder seg på får vært med. Derfor må vi sette opp noen
                kriterier for at de som trenger det aller mest skal få være med.
                Vi ønsker at følgende infromasjon er med i eposten:
              </Typography>

              <Typography>
                <ul>
                  <li>Alder på barn</li>
                  <li>Mange store biler på en vei</li>
                  <li>Interesser</li>
                  <li>Et gult hus</li>
                  <li>En høyt tak</li>
                  <li>Gode sommerminner</li>
                  <li>Liker du å stå på vannski</li>
                </ul>
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              style={{
                paddingTop: "5vh",
                paddingLeft: "4vh",
              }}
            >
              <div style={{ paddingBottom: "2vh" }}>
                <img alt="barn leker" width="100%" src="/taulek.jpg"></img>
              </div>
              <div>
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
