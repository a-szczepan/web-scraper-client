import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const { dictionary } = useContext(LanguageContext);

  return (
    <Paper
      component="form"
      sx={{
        alignSelf: "center",
        display: "flex",
        width: "50%",
      }}
    >
      <InputBase
        placeholder={dictionary.searchPlaceholder}
        variant="standard"
        sx={{
          ml: 1,
          flex: 1,
          caretColor: "black",
        }}
      />
      <IconButton type="button">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
