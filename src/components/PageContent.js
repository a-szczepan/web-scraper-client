import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import INCIFilter from "./Filters";
import Content from "./Content";
import SearchBar from "./SearchBar";
import DrawerBox from "./DrawerBox";
import PaginationBar from "./PaginationBar";

export default function PageContent() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const ref = useRef(null);
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

  const update = () => {
    setDesktop(window.innerWidth > 900);
  };

  const executeScroll = () => ref.current.scrollIntoView();

  useEffect(() => {
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1537px",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div ref={ref}></div>
      {isDesktop ? (
        <Box sx={{ display: { sm: "flex" }, gap: "15px" }}>
          <Box flexBasis="20%">
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
            <Content
              sx={{ width: "100%" }}
              filter={filter}
              page={page}
              setPage={setPage}
              setNumOfPages={setNumOfPages}
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            p: "10px 0 10px 0",
          }}
        >
          <DrawerBox filter={filter} setFilter={setFilter} />
          <Content
            sx={{ width: "100%" }}
            filter={filter}
            page={page}
            setPage={setPage}
            setNumOfPages={setNumOfPages}
          />
        </Box>
      )}
      <PaginationBar
        page={page}
        setPage={setPage}
        executeScroll={executeScroll}
        numOfPages={numOfPages}
      />
    </Box>
  );
}
