import { Button, Container, Grid } from "@mui/material";

const HomeContainer = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6} className="a">
          <div>en tittel til dkgnrskjgndsgfnsfdgfgfsgfsgf</div>
        </Grid>
        <Grid item xs={6} className="b">
          <img
            alt="barn leker"
            width="100%"
            src="https://images.unsplash.com/photo-1611153661566-9cb802ffe968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2544&q=80"
          ></img>
        </Grid>
        <Grid item xs={6} className="c">
          <p>quote</p>
        </Grid>
        <Grid item xs={6} className="c">
          <p>quote</p>
        </Grid>
        <Grid item xs={12} className="d">
          <h3>En tittel</h3>
          <p>Masse tekst sentrert</p>
          <Button>Les mer om dette</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
