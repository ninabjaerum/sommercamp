import SubHeader from "./SubHeader";
import { Container, Grid, Typography, Divider, Chip } from "@mui/material";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal, ModalContent } from "./Modal";
import { useState } from "react";

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

const holder = {
  height: "250px",
  margin: "auto",
  display: "block",
};

const About = () => {
  const { t } = useTranslation();
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const themedChip = createTheme({
    components: {
      MuiChip: {
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

  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <SubHeader title={t("homepage.aboutus")}></SubHeader>
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
              <Divider></Divider>
            </Grid>
            <Grid item xs={12} sm={12} style={{ padding: "5% 20% 5% 20%" }}>
              <div>
                <Typography
                  variant="h6"
                  style={{
                    color: "#43bc94",
                    fontWeight: "600",
                    paddingBottom: "1vh",
                    paddingTop: "1vh",
                    textAlign: "center",
                  }}
                >
                  {t("about.instructorsTitle")}
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                  }}
                >
                  {t("about.instructorsText")}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "0.5vh" }}>
              <div style={{ padding: "2vh" }}>
                <Divider>
                  <ThemeProvider theme={themedChip}>
                    <Chip label={t("about.oksana")} backgroundColor="#43bc94" />
                  </ThemeProvider>
                </Divider>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1.5vh",
                  }}
                >
                  <img alt="oksana" width="55%" src="Oksanaportrett.jpg"></img>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "0.5vh" }}>
              <div style={{ padding: "2vh" }}>
                <Divider>
                  <ThemeProvider theme={themedChip}>
                    <Chip label={t("about.julia")} backgroundColor="#43bc94" />
                  </ThemeProvider>
                </Divider>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1.5vh",
                  }}
                >
                  <img alt="oksana" width="55%" src="placeholder.jpg"></img>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
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
                <div>
                  <Modal onOpen={showModal}>
                    <div className="holder">
                      <img
                        src="approval.jpg"
                        alt="approval letter"
                        style={holder}
                      />
                    </div>
                  </Modal>
                  {isOpen && (
                    <ModalContent onClose={() => setIsopen(false)}>
                      <img src="approval.jpg" alt="approval letter" />
                    </ModalContent>
                  )}
                </div>
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
