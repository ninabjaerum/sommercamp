import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import i18n from "../i18n";

const lngs = {
  en: { nativeName: "English" },
  no: { nativeName: "Norwegian" },
  ukr: { nativeName: "Ukranian" },
};

const Header = () => {
  return (
    <div className="header-cont">
      <Grid>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <div className="logo-cont-header">
              <img src="/logotest.png" alt="logo" width="90%" />
            </div>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={1} md={4}></Grid>
          <Grid item xs={1} md={4}>
            <div>
              <Typography>Choose a language</Typography>
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  type="submit"
                  style={{ padding: "5px", margin: "6px" }}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </Grid>
          <Grid item xs={1} md={4}></Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="nav-cont">
            <nav>
              <Link to="pamelding" className="nav-item">
                Påmelding
              </Link>
              <Link to="praktisk" className="nav-item">
                Praktisk
              </Link>
              <Link to="aktiviteter" className="nav-item">
                Aktiviteter
              </Link>
              <Link to="om" className="nav-item">
                Om Oss
              </Link>
            </nav>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
