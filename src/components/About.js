import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
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

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title="Om oss"></SubHeader>
        <Container>
          <Grid container style={{ paddingTop: "5vh", paddingBottom: "4vh" }}>
            <Grid item xs={12} style={{ padding: "0.5vh" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingLeft: "2vh",
                }}
              >
                Om oss i EY Skye
              </Typography>
              <div style={{ padding: "2vh" }}>
                <Typography>
                  Vi som jobber i EY Skye har lyst til å bidra med noe mer enn
                  de konsulent-tjenestene innen teknologi vi leverer som
                  selskap. Vi får ofte tilgang til opplevelser som er betalt
                  for, fordi selskapet vårt har mulighet til det. På den måten
                  er vi heldige. Og det gjør at vi ønsker å gi noe tilbake.
                  Derfor er det vi ansatte som driver Skye sommercamp sammen. Vi
                  gjør det som frivillige, og gir av vår tid. Samtidig er vi
                  overbevist om at det vil være like bra for oss som for barna
                  som blir med på campen. Vi gleder oss til leirbål, gode
                  samtaler, måltider sammen som vi selv har laget og fnising i
                  soveposen før natten kommer.
                </Typography>
              </div>
              <div style={{ padding: "2vh" }}>
                <Typography>
                  For mange av oss er minner fra sommerferier noe vi aldri vil
                  glemme. Late dager på svaberget, krabbefiske og båtturer.
                  Kveldsbad i regnet og latterkramper som skaper varme og nærhet
                  for resten av uka. En følelse av tilhørighet, samhold og
                  egenverdi som vi har med oss inn i livet. Vi kommer alle fra
                  ulike miljøer, familier og steder – med ulike muligheter til å
                  oppleve sommeren slik den kan være på sitt beste. Gjennom Skye
                  sommercamp ønsker vi å gi flere barn og unge gode
                  sommerminner, og særlig til de som ellers ikke ville fått
                  denne muligheten.
                </Typography>{" "}
              </div>
              <div style={{ padding: "2vh" }}>
                <Typography>
                  Alle lederne i Skye sommercamp gjennomgår et
                  opplæringsprogram, med fokus på sikkerhet og førstehjelp,
                  gjennomføring av aktiviteter og mellommenneskelig
                  kommunikasjon. Vi ønsker at hver enkelt deltager skal få gode
                  opplevelser, oppleve trygghet, felleskap og gode relasjoner
                  til andre barn og oss voksne.
                </Typography>{" "}
              </div>
            </Grid>
            <Grid item xs={6} sm={5} style={{ padding: "0.5vh" }}>
              <div style={{ padding: "2vh" }}>
                <img alt="dagligleder" width="100%" src="aboutus.png"></img>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div style={{ padding: "2vh" }}>
                <Typography
                  variant="h5"
                  style={{
                    color: "#43bc94",
                    fontWeight: "500",
                    paddingBottom: "1vh",
                  }}
                >
                  Vi gleder oss!
                </Typography>
                <Typography>
                  Vennlig hilsen, <br></br>
                  Tommy Rugsveen <br></br>
                  Daglig leder i EY Skye
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

export default About;
