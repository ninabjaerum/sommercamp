import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  //State here

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
            Velkommen til sommercamp!
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            Er du mellom 10-12 år? Har du har lyst til å lære noe nytt og gjøre
            ting du kanskje ikke har hatt muligheten til tidligere? Da har du
            kommet til rett sted! <br></br> <br></br> Sommeren 2022 ønsker vi å
            gjennomføre 4 uker med lek og moro på Jakthytta på Malmøya rett
            utenfor Stavern. Campen er gratis og hver uke vil vare fra mandag
            til lørdag. Det blir ca. 20 barn sammen på camp hver uke. For alle
            barn som er med blir det fem dager fylt med alt fra fotballcup,
            bading og vannski til matlaging, tegning og andre kreative
            aktiviteter.
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Summary;
