import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../context/LanguageProvider";
import {
  Select,
  MenuItem,
  Chip,
  Stack,
  Paper,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function INCIFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const { register, handleSubmit } = useForm();

  return (
    <Box sx={{ width: "inherit" }}>
      <Box
        component="form"
        display="flex"
        gap="2%"
        onSubmit={handleSubmit((data) => {
          if (!props.refs.list.includes(data[props.refs.registerIngredient])) {
            const newValue = [
              ...props.refs.list,
              data[props.refs.registerIngredient],
            ];
            props.setFilter({
              ...props.filter,
              [props.refs.type === "first" ? "firstFilter" : "secondFilter"]: {
                contain: data[props.refs.registerContain],
                list: newValue,
              },
            });
          }
        })}
      >
        {props.refs.type === "first" ? (
          <Select
            value={props.contain}
            sx={{ minWidth: "132px", maxHeight: "45px" }}
            {...register(props.refs.registerContain, {
              onChange: (e) => {
                props.setContain(e.target.value);
                props.setFilter({
                  ...props.filter,
                  firstFilter: {
                    ...props.filter.firstFilter,
                    contain: e.target.value,
                  },
                  secondFilter: {
                    ...props.filter.secondFilter,
                    contain: !e.target.value,
                  },
                });
              },
            })}
          >
            <MenuItem value={true}>{dictionary.contain}</MenuItem>
            <MenuItem value={false}>{dictionary.notContain}</MenuItem>
          </Select>
        ) : (
          <Select
            value={!props.contain}
            sx={{ minWidth: "132px", maxHeight: "45px" }}
            {...register(props.refs.registerContain, {
              onChange: (e) => props.setContain(e.target.value),
            })}
          >
            <MenuItem value={!props.contain}>
              {!props.contain === true
                ? dictionary.contain
                : dictionary.notContain}
            </MenuItem>
          </Select>
        )}
        <Paper variant="outlined" sx={{ display: "flex", width: "100%" }}>
          <InputBase
            placeholder={dictionary.filterInput}
            {...register(props.refs.registerIngredient)}
            sx={{
              ml: 1,
              flex: 1,
              caretColor: "black",
            }}
          />
          <IconButton type="submit" sx={{ p: "10px" }}>
            <AddCircleIcon />
          </IconButton>
        </Paper>
      </Box>
      {props.refs.list.length > 0 ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{ overflow: "auto", p: "5px 0 5px 0" }}
        >
          {props.refs.list.map((element, index) => (
            <Chip
              key={index}
              label={element}
              onDelete={() => {
                const newValue = props.refs.list.filter(
                  (item) => element !== item
                );
                props.setFilter({
                  ...props.filter,
                  [props.refs.type === "first"
                    ? "firstFilter"
                    : "secondFilter"]: {
                    list: newValue,
                  },
                });
              }}
            ></Chip>
          ))}
        </Stack>
      ) : null}
    </Box>
  );
}
