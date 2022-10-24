import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { Box, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import INCIFilter from "./INCIFilter";

export default function Filters(props) {
  const { dictionary } = useContext(LanguageContext);
  const [contain, setContain] = useState(true);
  const [addExtraFilters, setAddExtraFilters] = useState(false);

  return (
    <Box sx={{ backgroundColor: "green" }}>
      <INCIFilter
        key={1}
        filter={props.filter}
        setFilter={props.setFilter}
        contain={contain}
        setContain={setContain}
        refs={{
          type: "first",
          list: props.filter.firstFilter.list,
          registerContain: "containFirst",
          registerIngredient: "ingredientFirst",
        }}
      />
      <Button
        variant="outlined"
        onClick={() => setAddExtraFilters(!addExtraFilters)}
        startIcon={<AddCircleIcon />}
      >
        {dictionary.addFilter}
      </Button>
      {addExtraFilters ? (
        <INCIFilter
          key={2}
          filter={props.filter}
          setFilter={props.setFilter}
          contain={contain}
          setContain={setContain}
          refs={{
            type: "second",
            list: props.filter.secondFilter.list,
            registerContain: "containSecond",
            registerIngredient: "ingredientSecond",
          }}
        />
      ) : null}
      <Box>
        <CategoryFilter filter={props.filter} setFilter={props.setFilter} />
        <BrandFilter filter={props.filter} setFilter={props.setFilter} />
      </Box>
      <Button variant="contained">{dictionary.applyFilters}</Button>
    </Box>
  );
}
