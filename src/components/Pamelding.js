import SubHeader from "./SubHeader";
import { Container, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
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
              sm={6}
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
              <Typography
                variant="h6"
                style={{
                  color: "#F26157",
                  fontWeight: "700",
                  paddingBottom: "1.5vh",
                }}
              >
                {" "}
                {t("pamelding.fullybooked")}
              </Typography>{" "}
              <br />
              <Typography> {t("pamelding.text1")}</Typography> <br />
              <Typography style={{
                  fontWeight: "700",
                }}> {t("practical.departureWeek1")}</Typography>
              <Typography> {t("practical.departure")}</Typography>
              <Typography> {t("practical.arrival")}</Typography>
              <br />
              <Typography  style={{
                  fontWeight: "700",
                }}> {t("practical.departureWeek2")}</Typography>
              <Typography> {t("practical.departure2")}</Typography>
              <Typography> {t("practical.arrival2")}</Typography>
              <br />
              <Typography> {t("pamelding.meetLarvik")}</Typography>
              <Typography
                style={{
                  fontWeight: "700",
                }}
              >
                {" "}
                {t("pamelding.responsible")}
              </Typography>
              <br />
              <Typography>
                <div style={{ paddingBottom: "2vh" }}>
                  {t("pamelding.text4")}
                </div>
              </Typography>
              <div style={{ paddingTop: "2vh" }}>
                <ThemeProvider theme={themeButton}>
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=mT-XW99360uyfaoMcLhILFVXtLiX2v5KtZDTtv6hXjRUMkxMQ1A1Q0hBRzdHQzdRN0c1SzkzS0JYOS4u&Token=4854e24d314547d198f2389fc72cfc64"
                  style={{ color: "#43bc94" }}
                >  */}
                  <Button variant="contained" disabled={true}>
                    {t("pamelding.button")}{" "}
                      
                  </Button>
                  {/* </a> */}
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
              sm={5}
              style={{
                paddingTop: "5vh",
              }}
            >
              <div style={{ padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Ankomst.jpg"></img>
              </div>
              <div style={{ padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Leksol.jpg"></img>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={11}
              style={{
                paddingTop: "4vh",
                paddingBottom: "2vh",
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
            <Grid item xs={12} sm={4}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="tautrekk2.jpg"></img>
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
                <img alt="barn leker" width="100%" src="Huske.jpg"></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{ margin: "auto" }}>
              <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
                <img alt="barn leker" width="100%" src="Vollyball1.jpg"></img>
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
