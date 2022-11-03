import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import INCIFilter from "./INCIFilter";

export default function Filters(props) {
  const { dictionary } = useContext(LanguageContext);
  const [contain, setContain] = useState(true);
  const [addExtraFilters, setAddExtraFilters] = useState(false);

  return (
    <Box display="flex" flexDirection="column">
      <List sx={{ maxWidth: "20rem" }}>
        <ListItem>
          <Box display="flex" flexDirection="column" width="100%">
            <Typography variant="h6" sx={{ m: "12px 0 12px 0" }}>
              {dictionary.ingredients}
            </Typography>
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
              variant="text"
              onClick={() => setAddExtraFilters(!addExtraFilters)}
              startIcon={<AddCircleIcon />}
              sx={{ alignSelf: "flex-start" }}
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
          </Box>
        </ListItem>
        <Divider />
        <ListItem>
          <CategoryFilter filter={props.filter} setFilter={props.setFilter} />
        </ListItem>
        <Divider />
        <ListItem>
          <BrandFilter filter={props.filter} setFilter={props.setFilter} />
        </ListItem>
        <ListItem>
          <Button variant="contained">{dictionary.clearFilters}</Button>
        </ListItem>
      </List>
    </Box>
  );
}
