import SubHeader from "./SubHeader";
import { Grid } from "@mui/material";
import Footer from "./Footer";
const Pamelding = () => {
  //state

  return (
    <div>
      <SubHeader title="Påmelding og plasser"></SubHeader>

      <Grid container style={{ padding: "2vh", textAlign: "center" }}>
        <Grid item style={{ height: "60vh" }}>
          <h3> Innhold</h3>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Pamelding;
