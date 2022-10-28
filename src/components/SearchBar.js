import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
        }}
      >
        <InputBase
          placeholder={dictionary.searchPlaceholder}
          variant="standard"
          sx={{
            ml: 1,
            flex: 1,
            caretColor: "black",
            minWidth: "50vw",
          }}
        />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
