import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Box from "@mui/material/Box";
import Img from "../assets/searching.svg";
import Typography from "@mui/material/Typography";

export default function ProjectDescription() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Box sx={{ width: "100%", maxWidth: "1537px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row-reverse" },
          justifyContent: { sm: "space-evenly" },
          alignItems: { xs: "center", lg: "flex-start" },
          gap: { sm: "4%" },
          p: { xs: "4%", md: "1%" },
        }}
      >
        <Box
          component="img"
          src={Img}
          sx={{
            maxWidth: { xs: "80%", sm: "40%" },
            pb: { xs: "5%", lg: "0%" },
            alignSelf: "center",
          }}
        />
        <Box
          sx={{
            p: { md: "0 3% 0 3%" },
            flexBasis: "40%",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            gutterBottom
            sx={{
              pt: { lg: "5%" },
              fontWeight: "800",
            }}
          >
            {dictionary.headerText}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {dictionary.appAnnotationI}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {dictionary.appAnnotationII}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {dictionary.appDescription}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
