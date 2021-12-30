import { Typography } from "@mui/material";

const Summary = () => {
  //State here

  return (
    <div>
      <div>
        <Typography
          variant="h4"
          style={{ paddingBottom: "2%", color: "#43bc94" }}
        >
          {" "}
          Velkommen til sommercamp!
        </Typography>
        <Typography lineHeight="2" style={{ paddingBottom: "2%" }}>
          {" "}
          Maecenas mauris sapien, ullamcorper gravida diam a, faucibus
          pellentesque tellus. In posuere elit fringilla neque ultricies
          pulvinar ut at est. Nullam accumsan tincidunt turpis ac finibus.Sed
          vehicula id diam eget gravida. Fusce a nisl neque. Fusce quis nisi
          sapien. Nunc sit amet magna velit. Cras nulla mauris, dignissim sit
          amet pharetra utfringilla neque ultricies. faucibus pellentesque
          tellus.
        </Typography>
      </div>
    </div>
  );
};

export default Summary;
