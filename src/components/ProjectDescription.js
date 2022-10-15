import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Box from "@mui/material/Box";
import Img from "../assets/undraw_searching_re_3ra9.svg";
import Typography from "@mui/material/Typography";

export default function ProjectDescription() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Box
      sx={{
        padding: "4%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row-reverse" },
        textAlign: "left",
        alignItems: "center",
        gap: { sm: "3%" },
      }}
    >
      <Box
        component="img"
        src={Img}
        sx={{ maxWidth: { xs: "80%", sm: "40%" }, paddingBottom: "5%" }}
      />
      <Box sx={{ padding: { md: "0 3% 0 3%" } }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "700",
            textJustify: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: "-webkit-linear-gradient(#f44336, #ffa726)",
          }}
        >
          {dictionary.headerText}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            whiteSpace: "pre-line",
            textIndent: "1rem",
          }}
        >
          {dictionary.appAnnotationI}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          {dictionary.appAnnotationII}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textIndent: "1rem",
          }}
        >
          {dictionary.appDescription}
        </Typography>
      </Box>
    </Box>
  );
}
