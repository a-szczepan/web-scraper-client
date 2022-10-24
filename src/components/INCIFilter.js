import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LanguageContext } from "../context/LanguageProvider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

export default function INCIFilter(props) {
  const { dictionary } = useContext(LanguageContext);
  const { register, handleSubmit } = useForm();

  return (
    <Box>
      <Box
        component="form"
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
        <Paper>
          <InputBase
            placeholder={dictionary.filterInput}
            variant="standard"
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
        <Stack direction="row" spacing={1} sx={{ overflow: "auto" }}>
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
