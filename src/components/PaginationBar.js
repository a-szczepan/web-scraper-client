import Pagination from "@mui/material/Pagination";

export default function PaginationBar(props) {
  return (
    <Pagination
      count={10}
      page={props.page}
      onChange={(e, value) => {
        props.setPage(value);
        props.executeScroll();
      }}
      size="large"
      sx={{ alignSelf: "center" }}
    />
  );
}
