import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const styles = (theme) => {
  return {
    color: "#fff",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };
};

const FallBackLoader = () => {
  return (
    <Backdrop sx={(theme) => styles(theme)} open={true}>
      <CircularProgress size={60} />
    </Backdrop>
  );
};

export default FallBackLoader;
