import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import PolishImg from "../assets/poland.svg";
import EnglishImg from "../assets/uk.svg";

export default function LanguageSwitch(props) {
  const { language, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const storageLanguage = window.localStorage.getItem("language");
    if (!storageLanguage) {
      window.localStorage.setItem("language", language);
    } else {
      changeLanguage(storageLanguage);
    }
  }, [language]);

  return (
    <Box sx={{ width: "100%", maxWidth: "1537px" }}>
      <FormGroup width="100%" sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={(e) => {
                e.preventDefault();
                changeLanguage(language === "English" ? "Polski" : "English");
                window.localStorage.setItem(
                  "language",
                  language === "English" ? "Polski" : "English"
                );
              }}
            />
          }
          label={language}
          sx={{
            alignSelf: "flex-end",
            "& .MuiSwitch-thumb ": {
              backgroundImage: `url(${
                language === "English" ? EnglishImg : PolishImg
              })`,
            },
            "& .MuiSwitch-track": {
              backgroundColor: "primary.main",
            },
          }}
        ></FormControlLabel>
      </FormGroup>
    </Box>
  );
}
