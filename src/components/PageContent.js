import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import INCIFilter from "./INCIFilter";

export default function PageContent() {
  const { dictionary } = useContext(LanguageContext);
  const [useFilters, setUseFilters] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        p: { xs: "4%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          alignSelf: "center",
          display: { sm: "flex" },
          gap: "2%",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            width: { xs: "80vw", sm: "50vw" },
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
          <IconButton type="button" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          variant="contained"
          onClick={() => setUseFilters(!useFilters)}
          sx={{
            minWidth: "fit-content",
            mt: { xs: "2%", sm: "0%" },
          }}
        >
          {dictionary.filtersButton}
        </Button>
      </Box>
      {useFilters ? <INCIFilter /> : null}
    </Box>
  );
}
