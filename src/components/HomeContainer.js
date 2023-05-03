import { Container, Grid, Typography, Divider, Chip } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Summary from "./Summary";
import Info from "./Info";
import LongText from "./LongText";
import { useTranslation } from "react-i18next";

const HomeContainer = () => {
  const { t } = useTranslation();

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
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} className="row-1">
          <Summary />
        </Grid>
        <Grid item sm={12} md={6} className="row-1">
          <div style={{ maxWidth: "70%", margin: "auto" }}>
            <img alt="barn leker" width="100%" src="maltid.jpg"></img>
          </div>
        </Grid>

        <Grid item xs={12} className="row-2">
          <Divider>
            <ThemeProvider theme={themedChip}>
              <Chip label={t("homepage.ansatt")} backgroundColor="#43bc94" />
            </ThemeProvider>
          </Divider>
          <Typography
            variant="h6"
            style={{ paddingTop: "3%", paddingBottom: "3%" }}
          >
            {t("homepage.quote")}
          </Typography>
          <Divider></Divider>
        </Grid>

        <Grid item sm={12} md={6} className="row-3">
          <div style={{ maxWidth: "100%", margin: "auto" }}>
            <img alt="barn leker" width="100%" src="Hytta1.jpg"></img>
          </div>
        </Grid>
        <Grid item md={6} sm={12} className="row-3">
          <Info />
        </Grid>
        <Grid item xs={12} className="row-4">
          <LongText></LongText>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div style={{ maxWidth: "100%", margin: "auto", padding: "1vh" }}>
            <img alt="barn leker" width="90%" src="bat.jpg"></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} style={{ margin: "auto" }}>
          <div
            style={{
              maxWidth: "90%",
              margin: "auto",
              padding: "1vh",
            }}
          >
            <img alt="barn leker" width="100%" src="sunset.jpg"></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} style={{ margin: "auto" }}>
          <div style={{ maxWidth: "90%", margin: "auto", padding: "1vh" }}>
            <img alt="barn leker" width="100%" src="Krabbefisking1.jpg"></img>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
