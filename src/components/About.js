import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
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

const About = () => {
  const { t } = useTranslation();
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
                {t("about.aboutTitle")}
              </Typography>
              <div style={{ padding: "2vh" }}>
                <Typography>{t("about.aboutText1")}</Typography>
              </div>
              <div style={{ padding: "2vh" }}>
                <Typography>{t("about.aboutText2")}</Typography>{" "}
              </div>
              <div style={{ padding: "2vh" }}>
                <Typography>{t("about.aboutText3")}</Typography>{" "}
              </div>
            </Grid>
            <Grid item xs={6} sm={6} style={{ padding: "0.5vh" }}>
              <div style={{ padding: "2vh" }}>
                {/* A JSX comment  <img alt="dagligleder" width="100%" src="aboutus.png"></img> */}
                <Typography
                  variant="h5"
                  style={{
                    color: "#43bc94",
                    fontWeight: "500",
                    paddingBottom: "1vh",
                  }}
                >
                  {t("about.oksaneTitle")}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "800",
                    paddingBottom: "1vh",
                  }}
                >
                  {t("about.oksanaMotto")}
                </Typography>
                <Typography>{t("about.oksanaText")}</Typography>
              </div>
            </Grid>
            <Grid item sm={5}>
              <div style={{ padding: "2vh" }}>
                <Typography
                  variant="h5"
                  style={{
                    color: "#43bc94",
                    fontWeight: "500",
                    paddingBottom: "1vh",
                  }}
                >
                  {t("about.embassy")}
                </Typography>
                <Typography>{t("about.embassyText")}</Typography>
              </div>
              <div style={{ padding: "2vh" }}>
                <Typography
                  variant="h5"
                  style={{
                    color: "#43bc94",
                    fontWeight: "500",
                    paddingBottom: "1vh",
                  }}
                >
                  {t("about.support")}
                </Typography>
                <Typography>
                  <ul>
                    <li> {t("about.partner1")}</li>
                    <li> {t("about.partner2")}</li>
                    <li> {t("about.partner3")}</li>
                    <li> {t("about.partner4")}</li>
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

export default About;
