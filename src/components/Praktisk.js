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

const Praktisk = () => {
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
                Curabitur fringilla egestas diam, non aliquam nunc dapibus quis.
                Sed viverra, ante ac malesuada efficitur, quam orci iaculis
                libero, sed viverra.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "0.5vh" }}>
              <Typography
                variant="h4"
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                Transport
              </Typography>

              <Typography variant="h6" className="subtitles">
                Hvordan kommer vi til campen?
              </Typography>
              <Typography>
                Etiam a tincidunt quam. Nullam iaculis volutpat urna ut tempus.
                Mauris venenatis velit lectus, in consectetur leo iaculis
                interdum. Nullam vel metus euismod tellus convallis blandit.
                Integer posuere suscipit ullamcorper. Nam quis neque enim.
                Curabitur fringilla egestas diam, non aliquam nunc dapibus quis.
                Sed viverra, ante ac malesuada efficitur.
              </Typography>
              <Typography variant="h6" className="subtitles">
                Oppmøte og reise
              </Typography>
              <Typography>
                Integer eget lacus scelerisque, gravida quam quis, ultricies
                massa. Duis venenatis cursus risus at ultrices. Sed consequat
                tortor elit, eu laoreet enim maximus et. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices.
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
