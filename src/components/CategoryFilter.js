import { FormControl, FormHelperText, Select, MenuItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../context/LanguageProvider";
import { getCategories } from "../requests/requests";

export default function CategoryFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const { register } = useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await getCategories();
      setCategories(["Brak", ...categories.data]);
    }
    fetchData();
  }, [props.filter]);

  return (
    <FormControl>
      <FormHelperText htmlFor="category-select">
        {dictionary.category}
      </FormHelperText>
      <Select
        id="category-select"
        defaultValue="Brak"
        {...register("category", {
          onChange: (e) =>
            props.setFilter({ ...props.filter, category: e.target.value }),
        })}
      >
        {categories.length > 0
          ? categories.map((item, index) => (
              <MenuItem key={index} value={item}>
                {dictionary.categories[item]}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}
