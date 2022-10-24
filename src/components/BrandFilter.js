import {
  FormControl,
  FormHelperText,
  Checkbox,
  ListItemText,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../context/LanguageProvider";
import { getBrands } from "../requests/requests";

export default function BrandFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const { register } = useForm();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const brands = await getBrands();
      setBrands(brands.data.data.map((item) => item.name));
    }
    fetchData();
  }, [props.filter]);

  return (
    <FormControl>
      <FormHelperText htmlFor="brand-select">
        {dictionary.brands}
      </FormHelperText>
      <Select
        multiple
        id="brand-select"
        value={props.filter.brands}
        {...register("brands", {
          onChange: (e) =>
            props.setFilter({ ...props.filter, brands: e.target.value }),
        })}
      >
        {brands.length > 0
          ? brands.map((item, index) => (
              <MenuItem key={index} value={item}>
                {" "}
                <Checkbox checked={props.filter.brands.indexOf(item) > -1} />
                <ListItemText primary={item} />{" "}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}
