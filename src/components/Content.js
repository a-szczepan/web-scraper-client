import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getProducts } from "../requests/requests";
import ProductCard from "./ProductCard";

export default function Content(props) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchProducts(filter, page) {
      const res = await getProducts(filter, page);
      setContent(res.data);
    }
    const filters = {};
    Object.entries(props.filter).map(([key, value]) =>
      typeof value === "object" && !Array.isArray(value)
        ? (filters[value.contain === true ? "contain" : "notContain"] =
            value.list?.toString())
        : (filters[key] = value?.toString())
    );
    console.log(props.page);
    fetchProducts(filters, props.page);
  }, [props.filter, props.page]);

  return (
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
      {content.length > 0
        ? content.map((element, index) => (
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
            />
          ))
        : null}
    </Box>
  );
}
