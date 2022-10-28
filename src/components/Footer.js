import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1537px",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Divider />
      <Box display="flex" alignItems="center" alignSelf="center">
        <Typography>{dictionary.github}</Typography>
        <IconButton
          sx={{ p: "10px" }}
          onClick={() => {
            window.location.assign(`https://github.com/a-szczepan`);
          }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
