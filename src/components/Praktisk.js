import SubHeader from "./SubHeader";
import { useEffect } from "react";
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

const Praktisk = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title={t("captions.practicalInfo")}></SubHeader>
        <Container>
          <Grid container style={{ paddingTop: "5vh", paddingBottom: "20vh" }}>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
              <Typography
                variant="h4"
                style={{ color: "#43bc94", fontWeight: "500" }}
              >
                {t("practical.accomodationTitle")}
              </Typography>
              <Typography variant="h6" className="subtitles">
                {t("practical.accomText2")}
              </Typography>
              <Typography>{t("practical.accomText1")}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  maxWidth: "100%",
                  margin: "auto",
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <img
                  alt="cabin"
                  style={{
                    padding: "1vh",
                  }}
                  width="40%"
                  src="Hytta.jpg"
                ></img>
                <img
                  alt="friends"
                  style={{
                    padding: "1vh",
                  }}
                  width="40%"
                  src="Barn.jpg"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",

                  paddingBottom: "2vh",
                }}
              >
                {t("practical.transportTitle")}
              </Typography>
              <Typography>{t("practical.transportText")}</Typography>
              <br />
              <Typography style={{fontWeight: "bold"}}>{t("practical.departureWeek1")}</Typography>
              <Typography>{t("practical.departure")}</Typography>
              <Typography>{t("practical.arrival")}</Typography>
              <br />
              <Typography style={{fontWeight: "bold"}}>{t("practical.departureWeek2")}</Typography>
              <Typography>{t("practical.departure2")}</Typography>
              <Typography>{t("practical.arrival2")}</Typography>
              <br />
              <Typography>{t("practical.other")}</Typography>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                {t("practical.securityTitle")}
              </Typography>
              <Typography>{t("practical.securityText")}</Typography>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                }}
              >
                {t("practical.communicationTitle")}
              </Typography>
              <Typography>{t("practical.communicationText1")}</Typography>{" "}
              <br></br>
              <Typography>{t("practical.communicationText2")}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "1vh" }}>
              <Typography
                variant="h4"
                style={{
                  color: "#43bc94",
                  fontWeight: "500",
                  paddingBottom: "2vh",
                }}
              >
                {" "}
                {t("practical.pakkelisteTitle")}
              </Typography>
              <Typography>{t("practical.pakktext1")} 😊</Typography>
              <br></br>
              <Typography>{t("practical.pakktext2")}</Typography> <br></br>
              <Typography>{t("practical.pakktext3")}</Typography>
              <br></br>
              <Typography>{t("practical.pakktext4")}</Typography>
              <br></br>
              <Typography>{t("practical.pakktext5")}</Typography>
              <div
                style={{
                  paddingTop: "4vh",
                  maxWidth: "100%",
                  margin: "auto",
                }}
              >
                <img
                  alt="cabin"
                  style={{
                    padding: "3vh",
                  }}
                  width="90%"
                  src="polsegrilling.jpg"
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

export default Praktisk;
