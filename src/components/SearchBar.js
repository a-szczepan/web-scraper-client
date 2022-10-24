import { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
export default function SearchBar(props) {
  const { dictionary } = useContext(LanguageContext);
  return (
    <Box sx={{ backgroundColor: "pink" }}>
      <Paper component="form">
        <InputBase
          placeholder={dictionary.searchPlaceholder}
          variant="standard"
        />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button
        variant="contained"
        onClick={() => props.setUseFilters(!props.useFilters)}
      >
        {dictionary.filtersButton}
      </Button>
    </Box>
  );
}
