import "./App.css";
import { Box } from "./Box";
import { Button } from "./Button";
import { Input } from "./Input";

function App(props) {
  return (
    <div>
      <Box isDiscount={true}></Box>
      <Box></Box>
      <Box></Box>
      <Box isDiscount={true}></Box>
    </div>
  );
}

export default App;
