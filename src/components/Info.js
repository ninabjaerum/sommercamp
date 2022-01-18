import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

const Info = () => {
  return (
    <div>
      <div>
        <ThemeProvider theme={titlesTheme}>
          <Typography
            variant="h4"
            style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
          >
            {" "}
            Overnatting
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            Sommercampen og overnatting blir i Jakthytta på Malmøya, med egen
            fin sovehytte i ekte sommercmapstil! Her har vi ulike typer rom,
            blant annet 2-mannsrom, 4-mannsrom, 6-mannsrom og 10-mannsrom.
            Dersom noen er ekstra eventyrlystne, vil det også bli muligheter for
            å campe utendørs. Les om dette{" "}
            <NavLink to="/praktisk">
              <a href="#" style={{ color: "#43bc94" }}>
                her.
              </a>
            </NavLink>
          </Typography>
          <Typography
            variant="h4"
            style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
          >
            {" "}
            Måltider
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            Det vil bli servert flere spennende måltider hver dag som passer for
            alle. Vi ønsker også å inkludere barna i matlagingen hvis det er noe
            de har lyst til. Det blir matlaging både inne på felleskjøkkenet og
            utendørs på bål eller grill. Husk å gi beskjed om allergier,
            intoleranser eller andre hensyn. 
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Info;
