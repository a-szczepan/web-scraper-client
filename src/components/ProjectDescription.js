import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Box from "@mui/material/Box";
import Img from "../assets/searching.svg";
import Typography from "@mui/material/Typography";

export default function ProjectDescription() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Box
      sx={{
        padding: { xs: "4%", md: "4% 4% 0 4%" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row-reverse" },
        justifyContent: { md: "space-evenly" },
        alignItems: { xs: "center", lg: "flex-start" },
        gap: { sm: "4%" },
      }}
    >
      <Box
        component="img"
        src={Img}
        sx={{
          maxWidth: { xs: "80%", sm: "40%" },
          paddingBottom: { xs: "5%", lg: "0%" },
        }}
      />
      <Box sx={{ padding: { md: "0 3% 0 3%" }, flexBasis: "40%" }}>
        <Typography
          component="h1"
          variant="h3"
          gutterBottom
          sx={{
            paddingTop: { lg: "5%" },
            fontWeight: "800",
          }}
        >
          {dictionary.headerText}
        </Typography>
        <Typography
          component="body1"
          gutterBottom
          sx={{
            whiteSpace: "pre-line",
            // textAlign: 'justify'
          }}
        >
          {dictionary.appAnnotationI}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            whiteSpace: "pre-line",
            // textAlign: 'justify'
          }}
        >
          {dictionary.appAnnotationII}
        </Typography>
        <Typography
          variant="body1"
          sx={
            {
              // textAlign: 'justify'
            }
          }
        >
          {dictionary.appDescription}
        </Typography>
      </Box>
    </Box>
  );
}
