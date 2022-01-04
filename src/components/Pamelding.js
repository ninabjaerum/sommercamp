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
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                Hvordan melder jeg meg på?
              </Typography>
              <Typography variant="h6" className="subtitles">
                Send søknad via e-post
              </Typography>
              <Typography>
                Dersom du ønsker å melde ditt barn på camp, ber vi om at en
                søknad om påmelding sendes til oss på e-post. Vi har begrenset
                med plasser på campen. Det er totalt plass til 100 barn, spredt
                over 4 uker med 25 barn per uke. For å gå gjennom søknadene
                trenger vi litt informasjon om deg og ditt barn.{" "}
              </Typography>
              <br></br>
              <Typography>
                E-posten sendes til hallo@skyessommercamp.no
              </Typography>
              <Typography variant="h6" className="subtitles">
                Dette må være med i e-posten
              </Typography>
              <Typography>
                Vi ønsker at søknadse-posten innholder følgende informasjon:{" "}
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
                paddingLeft: "3vh",
              }}
            >
              <img
                alt="barn leker"
                width="100%"
                src="https://images.unsplash.com/photo-1464808322410-1a934aab61e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              ></img>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Pamelding;
