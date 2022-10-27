import { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LanguageContext } from "../context/LanguageProvider";
import { getCategories } from "../requests/requests";

export default function CategoryFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(false);

  useEffect(() => {
    console.log(props.filter);
    async function fetchData() {
      const categories = await getCategories();
      setCategories([...categories.data]);
    }
    fetchData();
  }, [props.filter]);

  return (
    <Accordion elevation={0} sx={{ backgroundColor: "inherit", width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: "0" }}>
        <Typography variant="h6">{dictionary.category}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "0" }}>
        <List dense={false}>
          {category ? (
            <ListItem>
              <Chip
                label={dictionary.categories[category]}
                onDelete={() => {
                  setCategory(false);
                  props.setFilter({
                    ...props.filter,
                    category: false,
                  });
                }}
              />
            </ListItem>
          ) : null}
          {categories.length > 0
            ? categories.map((item, index) => (
                <ListItem key={index} value={item} sx={{ p: "0" }}>
                  <ListItemButton
                    sx={{ pt: "3px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setCategory(item);
                      props.setFilter({ ...props.filter, category: item });
                    }}
                  >
                    <ListItemText>{dictionary.categories[item]}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            : null}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
