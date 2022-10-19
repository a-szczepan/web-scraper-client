import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function INCIFilter() {
  const { dictionary } = useContext(LanguageContext);
  const [contain, setContain] = useState(true);
  const [addExtraFilters, setAddExtraFilters] = useState(false);

  return (
    <FormControl
      sx={{
        width: { xs: "90vw", sm: "50vw" },
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ display: "flex", gap: "1%", pt: "2%" }}>
        <Select
          value={contain}
          onChange={(e) => setContain(e.target.value)}
          sx={{ minWidth: "132px", maxHeight: "45px" }}
        >
          <MenuItem value={true}>{dictionary.contain}</MenuItem>
          <MenuItem value={false}>{dictionary.notContain}</MenuItem>
        </Select>
        <Paper component="form" sx={{ display: "flex", width: "100%" }}>
          <InputBase
            placeholder={dictionary.filterInput}
            variant="standard"
            sx={{
              ml: 1,
              flex: 1,
              caretColor: "black",
            }}
          />
          <IconButton type="button" sx={{ p: "10px" }}>
            {" "}
            <AddCircleIcon />
          </IconButton>
        </Paper>
      </Box>
      {/* <Stack direction="row" spacing={1}>
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
      </Stack> */}
      <Button
        variant="outlined"
        onClick={() => setAddExtraFilters(!addExtraFilters)}
        startIcon={<AddCircleIcon />}
        sx={{
          width: "fit-content",
          m: "1% 0 1% 0",
        }}
      >
        {dictionary.addFilter}
      </Button>
      {addExtraFilters ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: "1%" }}>
          <Select
            value={!contain}
            onChange={(e) => {
              setContain(e.target.value);
            }}
            sx={{ minWidth: "132px", maxHeight: "45px" }}
          >
            <MenuItem value={!contain}>
              {" "}
              {!contain === true ? dictionary.contain : dictionary.notContain}
            </MenuItem>
          </Select>
          <Paper component="form" sx={{ display: "flex", width: "100%" }}>
            <InputBase
              placeholder={dictionary.filterInput}
              variant="standard"
              sx={{
                ml: 1,
                flex: 1,
                caretColor: "black",
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }}>
              <AddCircleIcon />
            </IconButton>
          </Paper>
          {/* <Stack direction="row" spacing={1}>
            <Chip label="Deletable" onDelete={() => {}} />
            <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
          </Stack> */}
        </Box>
      ) : null}
      {/* <Select label="Category" >
        <MenuItem value={{}}>{}</MenuItem>
        <MenuItem value={{}}>{}</MenuItem>
      </Select>
      <Button variant="contained">Zaaplikuj filtry</Button> */}
    </FormControl>
  );
}
