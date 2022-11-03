import Pagination from "@mui/material/Pagination";

export default function PaginationBar(props) {
  return props.numOfPages > 0 ? (
    <Pagination
      count={props.numOfPages}
      page={props.page}
      onChange={(e, value) => {
        props.setPage(value);
        props.executeScroll();
      }}
      size="large"
      sx={{ alignSelf: "center", m: "10px 0 10px 0" }}
    />
  ) : null;
}
