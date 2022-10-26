import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
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
        <SearchBar />
      </Box>
      <Drawer anchor="left" open={open}>
        <Box sx={{ width: { xs: "95vw", sm: "50vw" } }} role="presentation">
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />{" "}
          </IconButton>
          <Filters filter={props.filter} setFilter={props.setFilter} />
        </Box>
      </Drawer>
    </div>
  );
}
