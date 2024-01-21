import { Box } from "@mui/material";
import FallBackLoader from "./components/Loaders/FallBackLoader";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";

const App = () => {
  return (
    <Box>
      <Suspense fallback={<FallBackLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Box>
  );
};

export default App;
