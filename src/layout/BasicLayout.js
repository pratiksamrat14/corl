import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const styles = () => {
  return {
    padding: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
};
const BasicLayout = () => {
  return (
    <Box sx={() => styles()}>
      <Outlet />
    </Box>
  );
};

export default BasicLayout;
