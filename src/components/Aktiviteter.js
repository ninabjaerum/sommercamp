import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
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

const Aktiviteter = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title={t("captions.activitiesTitle2")}></SubHeader>
        <Container className="">
          <Grid container style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
            <Grid item xs={12} style={{ padding: "0.5vh" }}>
              <Typography
                variant="h5"
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                {t("activities.activityTitle")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.acttext1")}
              </Typography>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.acttext2")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.acttext3")}
              </Typography>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.acttext4")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="bat2.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{ margin: "auto" }}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  padding: "1vh",
                }}
              >
                <img alt="barn leker" width="100%" src="tautrekk.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} style={{ margin: "auto" }}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Pusling.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img
                  alt="barn leker"
                  width="100%"
                  src="Krabbefisking2.jpg"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="ballspill.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Utflukt.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  padding: "1vh",
                }}
              >
                <img alt="barn leker" width="100%" src="Handcraft.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Badeleker.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} style={{ margin: "auto" }}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  padding: "1vh",
                }}
              >
                <img alt="barn leker" width="100%" src="bat3.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} style={{ margin: "auto" }}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Banan.jpg"></img>
              </div>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Aktiviteter;
