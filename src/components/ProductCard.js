import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
} from "@mui/material";

export default function ProductCard(props) {
  const { dictionary } = useContext(LanguageContext);
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    const contain = Object.values(props.filter).find((value) => value?.contain);
    setHighlighted(contain?.list.map((e) => RegExp(e, "gmi")));
  }, [props.filter]);

  return (
    <Card sx={{ maxWidth: 360, maxHeight: 470 }}>
      <CardContent sx={{ display: "flex" }}>
        <Box>
          <Box
            flexBasis="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <img
              style={{ maxHeight: "170px" }}
              src={props.data.picture}
              alt={`Product ${props.data.name}`}
            />
          </Box>
          <Box height="200px" overflow="scroll">
            <Typography gutterBottom>{props.data.name}</Typography>
            <Typography variant="body2">{dictionary.ingredients}:</Typography>
            <Typography component="div" variant="body2" color="text.secondary">
              {highlighted?.length > 0
                ? props.data.inci
                    .replace(/\*/g, ",")
                    .replace(/•/g, ",")
                    .trim()
                    .split(/,(?!(?:[^(]*\([^)]*\))*[^()]*\))/)
                    .filter((x) => x.length > 0)
                    .map((e, index) =>
                      highlighted.some((rx) => e.match(rx)) ? (
                        <Box key={index} display="inline">
                          <Box
                            display="inline"
                            color="secondary.main"
                            fontWeight="bold"
                          >
                            {" "}
                            {`${e}`}
                          </Box>
                          <Box display="inline">, </Box>
                        </Box>
                      ) : (
                        <Box key={index} display="inline">
                          {" "}
                          {`${e}`},{" "}
                        </Box>
                      )
                    )
                : props.data.inci
                    .replace(/\*/g, ",")
                    .replace(/•/g, ",")
                    .replace(/,{2,}/g, ",")}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            window.location.assign(props.data.link);
          }}
        >
          {dictionary.toShop}
        </Button>
      </CardActions>
    </Card>
  );
}
