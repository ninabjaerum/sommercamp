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
            Informasjonstittel
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            Maecenas mauris sapien, ullamcorper gravida diam a, faucibus
            pellentesque tellus. In posuere elit fringilla neque ultricies
            pulvinar ut at est. Nullam accumsan tincidunt turpis ac finibus.Sed
            vehicula id diam eget gravida.
          </Typography>
          <Typography
            variant="h4"
            style={{ paddingBottom: "2%", color: "#43bc94", fontWeight: "500" }}
          >
            {" "}
            Tittel nummer 2
          </Typography>
          <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
            {" "}
            Fusce a nisl neque. Fusce quis nisi sapien. Nunc sit amet magna
            velit. Cras nulla mauris, dignissim sit amet pharetra utfringilla
            neque ultricies
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Info;
