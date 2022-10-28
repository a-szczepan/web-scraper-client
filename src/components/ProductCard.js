import * as React from "react";
import { useContext } from "react";
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
            <Typography variant="body2" color="text.secondary">
              {props.data.inci}
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
