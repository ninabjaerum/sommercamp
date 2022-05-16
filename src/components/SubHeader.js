import { Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const subheadTheme = createTheme();

subheadTheme.typography.h3 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [subheadTheme.breakpoints.up("md")]: {
    fontSize: "2.8rem",
  },
};

const SubHeader = (props) => {
  const { t } = useTranslation();
  return (
    <div className="subheader-cont">
      <ThemeProvider theme={subheadTheme}>
        <Grid>
          <Grid
            container
            style={{
              paddingTop: "1vh",
              paddingBottom: "1vh",
              minHeight: "10vh",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
              {" "}
              <Typography variant="h3" style={{ color: "#43bc94" }}>
                {" "}
                {props.title}{" "}
              </Typography>{" "}
            </Grid>
            <Grid item xs={3}>
              <div className="subheader-logo">
                <NavLink to="/">
                  <img src="/mainlogoblack.png" alt="logo" width="60%" />
                </NavLink>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className="nav-cont">
              <nav>
                <Link to="/pamelding" className="nav-item">
                  {t("captions.registrationTitle")}
                </Link>
                <Link to="/praktisk" className="nav-item">
                  {t("captions.practical")}
                </Link>
                <Link to="/aktiviteter" className="nav-item">
                  {t("captions.activitiesTitle")}
                </Link>
                <Link to="/om" className="nav-item">
                  {t("homepage.aboutus")}
                </Link>
              </nav>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default SubHeader;
