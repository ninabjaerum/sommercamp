import { Container, Grid, Typography, Divider, Chip } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Summary from "./Summary";
import Info from "./Info";
import LongText from "./LongText";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

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
          <div style={{ maxWidth: "90%", margin: "auto" }}>
            <img
              alt="barn leker"
              width="100%"
              src="https://images.unsplash.com/photo-1611153661566-9cb802ffe968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2544&q=80"
            ></img>
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
            style={{ paddingTop: "2%", paddingBottom: "2%" }}
          >
            {t("homepage.quote")}
          </Typography>
          <Divider></Divider>
        </Grid>

        <Grid item sm={12} md={6} className="row-3">
          <div style={{ maxWidth: "90%", margin: "auto" }}>
            <img
              alt="barn leker"
              width="100%"
              src="https://images.unsplash.com/photo-1555791019-72d3af01da82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
            ></img>
          </div>
        </Grid>
        <Grid item md={6} sm={12} className="row-3">
          <Info />
        </Grid>
        <Grid item xs={12} className="row-4">
          <LongText></LongText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
