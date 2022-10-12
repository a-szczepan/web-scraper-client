import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PolishImg from "../assets/poland.svg";
import EnglishImg from "../assets/uk.svg";

export default function LanguageSwitch(props) {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={(e) => {
                e.preventDefault();
                changeLanguage(language === "English" ? "Polski" : "English");
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
      <Divider />
    </Box>
  );
}
