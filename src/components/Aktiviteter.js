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
                {t("activities.text1")}
              </Typography>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.text2")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.text3")}
              </Typography>
              <Typography style={{ padding: "1vh" }}>
                {t("activities.text4")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img
                  alt="barn leker"
                  width="100%"
                  src="https://images.unsplash.com/photo-1555791019-72d3af01da82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
                ></img>
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
                <img alt="barn leker" width="100%" src="/swim.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="/fire.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="/swing.jpg"></img>
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
