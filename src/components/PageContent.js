import { useState } from "react";
import Box from "@mui/material/Box";
import INCIFilter from "./Filters";
import Content from "./Content";
import SearchBar from "./SearchBar";

export default function PageContent() {
  const [useFilters, setUseFilters] = useState(false);
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
    category: "",
    brands: [],
  });

  return (
    <Box>
      <SearchBar useFilters={useFilters} setUseFilters={setUseFilters} />
      <Box sx={{ display: { sm: "flex" } }}>
        {useFilters ? (
          <INCIFilter filter={filter} setFilter={setFilter} />
        ) : null}
        <Content sx={{ flexBasis: "100%" }} />
      </Box>
    </Box>
  );
}
