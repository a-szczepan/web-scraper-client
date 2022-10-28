import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../context/LanguageProvider";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const { dictionary } = useContext(LanguageContext);
  const [keyWords, setKeywords] = useState("");
  const { handleSubmit } = useForm();

  return (
    <Paper
      component="form"
      sx={{
        alignSelf: "center",
        display: "flex",
        width: "50%",
      }}
      onSubmit={handleSubmit(() =>
        props.setFilter({ ...props.filter, keyWords })
      )}
    >
      <InputBase
        placeholder={dictionary.searchPlaceholder}
        variant="standard"
        sx={{
          ml: 1,
          flex: 1,
          caretColor: "black",
        }}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
