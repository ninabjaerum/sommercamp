import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

const Info = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <ThemeProvider theme={titlesTheme}>
          <Typography
            variant="h4"
            style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
          >
            {" "}
            {t("homepage.accomodation")}
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            {t("homepage.accomodationText")}
            <NavLink to="/praktisk" style={{ color: "#43bc94" }}>
              {t("homepage.accomodationLink")}
            </NavLink>
          </Typography>
          <Typography
            variant="h4"
            style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
          >
            {" "}
            {t("homepage.meals")}
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            {t("homepage.mealsText")}
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Info;
