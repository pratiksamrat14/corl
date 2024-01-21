import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";


const App = () => {
  return (
    <Box>
      <Suspense>
        <RouterProvider router={router}/>
      </Suspense>
    </Box>
  );
}

export default App;
