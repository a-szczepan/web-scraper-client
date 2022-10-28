import * as React from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

export default function DrawerBox(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Box display="flex" gap="1%">
        <IconButton sx={{ width: "auto" }} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <SearchBar filter={props.filter} setFilter={props.setFilter} />
      </Box>
      <Drawer anchor="left" open={open} width="100%">
        <Box sx={{ width: { xs: "95%" } }} role="presentation">
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />{" "}
          </IconButton>
          <Filters filter={props.filter} setFilter={props.setFilter} />
        </Box>
      </Drawer>
    </div>
  );
}
