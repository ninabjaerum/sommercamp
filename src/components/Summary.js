import { Typography } from "@mui/material";
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

const Summary = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <ThemeProvider theme={titlesTheme}>
          <Typography
            variant="h4"
            style={{
              paddingBottom: "2%",
              color: "#43bc94",
              fontWeight: "500",
            }}
          >
            {" "}
            {t("homepage.welcomeTitle")}
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "1%" }}>
            {" "}
            {t("homepage.welcomeText1")}
          </Typography>
          <br />
          <Typography lineHeight="2" style={{ paddingBottom: "1%" }}>
            {" "}
            {t("homepage.welcomeText2")}
          </Typography>{" "}
          <br />
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            {t("homepage.welcomeText3")}
          </Typography>
          <Typography>{t("homepage.welcomeTextWeeks25")}</Typography>
          <Typography>{t("homepage.welcomeTextWeeks26")}</Typography>
          <Typography>{t("homepage.welcomeTextWeeks27")}</Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Summary;
