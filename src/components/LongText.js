import { Typography } from "@mui/material";
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

const LongText = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <Typography
          variant="h4"
          style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
        >
          {" "}
          {t("homepage.aboutus")}
        </Typography>
        <Typography lineHeight="2.5">{t("about.aboutText1")}</Typography>
        <div style={{ paddingTop: "2%" }}>
          <ThemeProvider theme={themeButton}>
            <NavLink to="/om" style={{ textDecoration: "none" }}>
              <Button variant="contained">{t("homepage.aboutButton")}</Button>
            </NavLink>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LongText;
