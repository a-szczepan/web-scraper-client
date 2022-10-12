import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { LanguageContext } from "../context/LanguageProvider";
import PolishImg from "../assets/poland.svg";
import EnglishImg from "../assets/uk.svg";

export default function LanguageSwitch(props) {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
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
    </div>
  );
}
