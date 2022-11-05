import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  Stack,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { getBrands } from "../requests/requests";

export default function BrandFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const brands = await getBrands();
      setBrands(brands.data.data.map((item) => item.name));
    }
    fetchData();
  }, [props.filter.brands]);

  return (
    <Accordion elevation={0} sx={{ backgroundColor: "inherit", width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: "0" }}>
        <Typography variant="h6">{dictionary.brands}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "0" }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ overflow: "auto", p: "5px 0 5px 0", mb: "10px" }}
        >
          {props.filter.brands.length > 0
            ? props.filter.brands.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  onDelete={() => {
                    const newValue = props.filter.brands.filter(
                      (brand) => brand !== item
                    );
                    props.setFilter({
                      ...props.filter,
                      brands: newValue,
                    });
                  }}
                />
              ))
            : null}
        </Stack>
        <List dense={false} sx={{ maxHeight: "300px", overflow: "auto" }}>
          {brands.length > 0
            ? brands.map((item, index) => (
                <ListItem key={index} value={item} sx={{ p: "0" }}>
                  <ListItemButton sx={{ pt: "3px" }}>
                    <Checkbox
                      checked={props.filter.brands.indexOf(item) > -1}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newValue = [...props.filter.brands, item];
                          props.setFilter({
                            ...props.filter,
                            brands: newValue,
                          });
                        } else {
                          const newValue = props.filter.brands.filter(
                            (brand) => brand !== item
                          );
                          props.setFilter({
                            ...props.filter,
                            brands: newValue,
                          });
                        }
                      }}
                    />

                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))
            : null}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
