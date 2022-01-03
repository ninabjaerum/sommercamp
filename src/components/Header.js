import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

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
            </nav>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
