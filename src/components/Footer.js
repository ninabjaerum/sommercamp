import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-cont">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          style={{
            justifyContent: "center",
            alignItems: " center",
            display: "flex",
          }}
        >
          <div>
            <Typography>{t("footer.footerTitle")} </Typography>
            <Typography>{t("footer.footertext1")} </Typography>
            <Typography>{t("footer.footertext2")}</Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            justifyContent: "center",
          }}
        >
          <img src="/mainlogoblacknew.png" alt="logo" width="50%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
