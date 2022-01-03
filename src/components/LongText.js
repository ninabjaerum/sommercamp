import { Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
          Tidenes sommeferie
        </Typography>
        <Typography lineHeight="2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          at odio tempus, interdum magna eu, iaculis eros. Mauris at viverra
          nulla, eu varius neque. Pellentesque ultricies gravida est ac
          vehicula. Nullam rhoncus odio nulla, aliquet egestas lorem aliquam a.
          Sed sed dignissim justo. Quisque nec accumsan ante. In dui enim,
          maximus et vulputate vel, aliquet eu justo. Duis ullamcorper at dui
          sit amet dignissim. Curabitur vulputate, ex quis luctus scelerisque,
          ligula justo finibus sapien, a pharetra felis quam ac ante.
          Pellentesque imperdiet mauris eu nulla elementum viverra. Fusce
          dapibus dolor iaculis urna tempus pulvinar. Etiam eget nunc eu risus
          fringilla dapibus. Curabitur sit amet urna lacus. Integer porta tempus
          lacus. In nec tempor tortor. In a interdum purus, at gravida turpis.
        </Typography>
        <div style={{ paddingTop: "2%" }}>
          <ThemeProvider theme={themeButton}>
            <Button variant="contained">Les mer om dette</Button>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default LongText;
