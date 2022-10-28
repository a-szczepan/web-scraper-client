import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import INCIFilter from "./Filters";
import Content from "./Content";
import SearchBar from "./SearchBar";
import DrawerBox from "./DrawerBox";

export default function PageContent() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [filter, setFilter] = useState({
    keyWords: "",
    firstFilter: {
      contain: true,
      list: [],
    },
    secondFilter: {
      contain: false,
      list: [],
    },
    category: false,
    brands: [],
  });

  const update = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });

  return (
    <Box sx={{ width: "100%", maxWidth: "1537px", alignSelf: "center" }}>
      {isDesktop ? (
        <Box sx={{ display: { sm: "flex" }, gap: "15px" }}>
          <Box sx={{ flexBasis: "20%" }}>
            <INCIFilter filter={filter} setFilter={setFilter} />
          </Box>
          <Box
            flexBasis="80%"
            display="flex"
            flexDirection="column"
            gap="10px"
            pt="20px"
          >
            <SearchBar filter={filter} setFilter={setFilter} />
            <Content sx={{ width: "100%" }} />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            p: "10px 0px 10px 0px",
          }}
        >
          <DrawerBox filter={filter} setFilter={setFilter} />
          <Content sx={{ width: "100%" }} />
        </Box>
      )}
    </Box>
  );
}
