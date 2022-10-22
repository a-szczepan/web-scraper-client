import { useContext, useEffect, useState } from "react";
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
import Button from "@mui/material/Button";

export default function INCIFilter() {
  const { dictionary } = useContext(LanguageContext);
  const { register, handleSubmit } = useForm();
  const [contain, setContain] = useState(true);
  const [addExtraFilters, setAddExtraFilters] = useState(false);
  const [filter, setFilter] = useState({
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
    brand: "",
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Box
      sx={{
        width: { xs: "90vw", sm: "50vw" },
        alignItems: "flex-start",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", gap: "1%", m: "5px 0px 5px 0px" }}
        onSubmit={handleSubmit((data) => {
          if (!filter.firstFilter.list.includes(data.ingredientFirst)) {
            const newValue = [...filter.firstFilter.list, data.ingredientFirst];
            setFilter({
              ...filter,
              firstFilter: {
                contain: data.containFirst,
                list: newValue,
              },
            });
          }
        })}
      >
        <Select
          value={contain}
          {...register("containFirst", {
            onChange: (e) => setContain(e.target.value),
          })}
          sx={{ minWidth: "132px", maxHeight: "45px" }}
        >
          <MenuItem value={true}>{dictionary.contain}</MenuItem>
          <MenuItem value={false}>{dictionary.notContain}</MenuItem>
        </Select>
        <Paper sx={{ display: "flex", width: { xs: "100%", md: "20vw" } }}>
          <InputBase
            placeholder={dictionary.filterInput}
            variant="standard"
            {...register("ingredientFirst")}
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
      {filter.firstFilter.list.length > 0 ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            m: "3px 0px 5px 0px",
            overflow: "auto",
            width: { xs: "100%", md: "50vw" },
          }}
        >
          {filter.firstFilter.list.map((element) => (
            <Chip
              label={element}
              onDelete={() => {
                const newValue = filter.firstFilter.list.filter(
                  (item) => element !== item
                );
                setFilter({
                  ...filter,
                  firstFilter: {
                    list: newValue,
                  },
                });
              }}
            ></Chip>
          ))}
        </Stack>
      ) : null}
      <Button
        variant="outlined"
        onClick={() => setAddExtraFilters(!addExtraFilters)}
        startIcon={<AddCircleIcon />}
        sx={{
          width: "fit-content",
        }}
      >
        {dictionary.addFilter}
      </Button>
      {addExtraFilters ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1%",
              m: "5px 0px 5px 0px",
            }}
            onSubmit={handleSubmit((data) => {
              if (!filter.secondFilter.list.includes(data.ingredientSecond)) {
                const newValue = [
                  ...filter.secondFilter.list,
                  data.ingredientSecond,
                ];
                setFilter({
                  ...filter,
                  secondFilter: {
                    contain: data.containSecond,
                    list: newValue,
                  },
                });
              }
            })}
          >
            <Select
              value={!contain}
              sx={{ minWidth: "132px", maxHeight: "45px" }}
              {...register("containSecond", {
                onChange: (e) => setContain(e.target.value),
              })}
            >
              <MenuItem value={!contain}>
                {!contain === true ? dictionary.contain : dictionary.notContain}
              </MenuItem>
            </Select>
            <Paper
              component="form"
              sx={{ display: "flex", width: { xs: "100%", md: "20vw" } }}
            >
              <InputBase
                placeholder={dictionary.filterInput}
                variant="standard"
                {...register("ingredientSecond")}
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
          {filter.secondFilter.list.length > 0 ? (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                m: "3px 0px 5px 0px",
                overflow: "auto",
                width: { xs: "100%", md: "50vw" },
              }}
            >
              {filter.secondFilter.list.map((element) => (
                <Chip
                  label={element}
                  onDelete={() => {
                    const newValue = filter.secondFilter.list.filter(
                      (item) => element !== item
                    );
                    setFilter({
                      ...filter,
                      secondFilter: {
                        list: newValue,
                      },
                    });
                  }}
                ></Chip>
              ))}
            </Stack>
          ) : null}
        </Box>
      ) : null}
      <Box
        sx={{
          display: "flex",
          gap: "2%",
          width: { xs: "100%", md: "20vw" },
          m: "3px 0 8px 0",
        }}
      >
        <Select value={filter.category}>
          <MenuItem value={filter.category}>Odżywki</MenuItem>
          <MenuItem value={{}}>{}</MenuItem>
        </Select>
        <Select value="Brand">
          <MenuItem value={{}}>{}</MenuItem>
          <MenuItem value={{}}>{}</MenuItem>
        </Select>
      </Box>
      <Button variant="contained">{dictionary.applyFilters}</Button>
    </Box>
  );
}
