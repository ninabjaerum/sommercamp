import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "🇬🇧 English" },
  no: { nativeName: "🇳🇴 Norsk" },
  //ukr: { nativeName: "🇺🇦 Ukranian" },
};

const langButton = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#43bc94",
          "&:hover": {
            background: "#43bc94",
            color: "white",
          },
        },
      },
    },
  },
});

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-cont">
      <Grid>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <div className="logo-cont-header">
              <img src="/mainlogoblack.png" alt="logo" width="90%" />
            </div>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {Object.keys(lngs).map((lng) => (
              <ThemeProvider theme={langButton}>
                <Button
                  key={lng}
                  type="submit"
                  style={{ padding: "5px", margin: "6px" }}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </Button>
              </ThemeProvider>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="nav-cont">
            <nav>
              <Link to="pamelding" className="nav-item">
                {t("captions.registrationTitle")}
              </Link>
              <Link to="praktisk" className="nav-item">
                {t("captions.practical")}
              </Link>
              <Link to="aktiviteter" className="nav-item">
                {t("captions.activitiesTitle")}
              </Link>
              <Link to="om" className="nav-item">
                {t("homepage.aboutus")}
              </Link>
            </nav>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
