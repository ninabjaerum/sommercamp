import { Grid, Typography } from "@mui/material";

const Footer = () => {
  //State here

  return (
    <div className="footer-cont">
      <Grid container>
        <Grid
          item
          xs={8}
          style={{
            justifyContent: "center",
            alignItems: " center",
            display: "flex",
          }}
        >
          <div>
            <Typography>Kontaktinformasjon </Typography>
            <Typography>E-post: PLACEHOLDER@mail.no </Typography>
            <Typography>Telefon: +47 123 45 678</Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          sm={4}
          style={{
            justifyContent: "center",
          }}
        >
          <img src="/mainlogoblack.png" alt="logo" width="40%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
