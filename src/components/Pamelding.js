import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
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
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title={t("captions.registrationTitle")}></SubHeader>
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
                {t("pamelding.title")}
              </Typography>
              <Typography> {t("pamelding.text1")}</Typography> <br></br>
              <Typography> {t("pamelding.text2")}</Typography>
              <br></br>
              <Typography>
                {t("pamelding.text3")}
                <NavLink to="/" style={{ color: "#43bc94" }}>
                  {t("pamelding.reglink")}
                </NavLink>{" "}
                {t("pamelding.text5")}
                <div style={{ paddingTop: "2vh", paddingBottom: "2vh" }}>
                  {t("pamelding.text4")}
                </div>
              </Typography>
              <div style={{ paddingTop: "2vh" }}>
                <ThemeProvider theme={themeButton}>
                  <Button variant="contained">{t("pamelding.button")}</Button>
                </ThemeProvider>
              </div>
              <div>
                <Typography style={{ paddingTop: "2vh" }}>
                  <ul>
                    <li>{t("pamelding.bullet1")}</li>
                    <li>{t("pamelding.bullet2")}</li>
                  </ul>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                paddingTop: "5vh",
              }}
            >
              <div style={{ padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="/taulek.jpg"></img>
              </div>
              <div style={{ padding: "1vh" }}>
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
              sm={11}
              style={{
                paddingTop: "4vh",
              }}
            >
              <div>
                <Typography variant="h6">{t("pamelding.expYou")}</Typography>
                <Typography>
                  <ul>
                    <li>{t("pamelding.bullet3")}</li>
                    <li>{t("pamelding.bullet4")}</li>
                    <li>{t("pamelding.bullet5")}</li>
                  </ul>
                </Typography>
              </div>
              <div>
                <Typography variant="h6">{t("pamelding.expUs")}</Typography>
                <Typography>
                  <ul>
                    <li>{t("pamelding.bullet6")}</li>
                    <li>{t("pamelding.bullet7")}</li>
                    <li>{t("pamelding.bullet8")}</li>
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
