import { Box, Typography, Button } from "@mui/material";
import { LanguageContext } from "../context/LanguageProvider";
import { useState, useEffect, useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";
import { getProducts } from "../requests/requests";
import ProductCard from "./ProductCard";

export default function Content(props) {
  const { dictionary } = useContext(LanguageContext);
  const [content, setContent] = useState(null);
  const defaultFilter = {
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
  };

  useEffect(() => {
    async function fetchProducts(filter, page) {
      const res = await getProducts(filter, page);
      setContent(res.data[0]);
      res.data[1].all
        ? props.setNumOfPages(Math.floor(res.data[1].all / 24) + 1)
        : props.setNumOfPages(-1);
    }
    const filters = {};
    Object.entries(props.filter).map(([key, value]) =>
      typeof value === "object" && !Array.isArray(value)
        ? (filters[value.contain === true ? "contain" : "notContain"] =
            value.list?.toString())
        : (filters[key] = value?.toString())
    );
    fetchProducts(filters, props.page);
  });

  return content?.length > 0 ? (
    <Box>
      {JSON.stringify(props.filter) !== JSON.stringify(defaultFilter) ? (
        <Box ml="0.7rem">
          <Button
            startIcon={<ClearIcon />}
            onClick={() => props.setFilter(defaultFilter)}
          >
            {" "}
            {dictionary.clearFilters}{" "}
          </Button>
        </Box>
      ) : null}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            lgxl: "repeat(4, 1fr)",
          },
          gridTemplateRows: "auto",
          justifyItems: "center",
          alignItems: "center",
          gap: "1rem 1rem",
          p: "1rem",
        }}
      >
        {content.map((element, index) => (
          <ProductCard
            key={index}
            data={{
              link: element.link,
              name: element.name,
              brand: element.brand,
              category: element.category,
              picture: element.picture,
              inci: element.inci,
            }}
            filter={props.filter}
          />
        ))}
      </Box>
    </Box>
  ) : content !== null ? (
    <Box display="flex" width="100%" justifyContent="center">
      <Typography>{dictionary.noResults}</Typography>
    </Box>
  ) : (
    <Box
      display="flex"
      width="100%"
      minHeight="45vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
}
