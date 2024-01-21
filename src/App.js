import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./action/sample";


const App = () => {
  const dispatch = useDispatch();
  const count =  useSelector((state) => state.sample.count);

  const onClickAdd = () => {
    dispatch(increment(count));
  }

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={onClickAdd}>
        add
      </Button>
    </Box>
  );
}

export default App;
