import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

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

const themeButton = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#43bc94",
          "&:hover": {
            background: "white",
            color: "#43bc94",
          },
        },
      },
    },
  },
});

const LongText = () => {
  return (
    <div>
      <ThemeProvider theme={titlesTheme}>
        <Typography
          variant="h4"
          style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
        >
          {" "}
          Om oss
        </Typography>
        <Typography lineHeight="2.5">
          Vi som jobber i EY Skye har lyst til å bidra med noe mer enn de
          konsulent-tjenestene innen teknologi vi leverer som selskap. Vi får
          ofte tilgang til opplevelser som er betalt for, fordi selskapet vårt
          har mulighet til det. På den måten er vi heldige. Og det gjør at vi
          ønsker å gi noe tilbake. Derfor er det vi ansatte som driver Skye
          sommercamp sammen. Vi gjør det som frivillige, og gir av vår tid.
          Samtidig er vi overbevist om at det vil være like bra for oss som for
          barna som blir med på campen. Vi gleder oss til leirbål, gode
          samtaler, måltider sammen som vi selv har laget og fnising i soveposen
          før natten kommer.
        </Typography>
        <div style={{ paddingTop: "2%" }}>
          <ThemeProvider theme={themeButton}>
            <NavLink to="/om" style={{ textDecoration: "none" }}>
              <Button variant="contained">Les mer om oss her</Button>
            </NavLink>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LongText;
