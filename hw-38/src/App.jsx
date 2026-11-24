import "./App.css";
import { Box } from "./Box";
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  return (
    <div>
      <Input></Input>
      <Button text="submit"></Button>
      <Button text="cancel"></Button>
      <Button text="back"></Button>
      <Box name="Username" isAdmin={true}></Box>
    </div>
  );
}

export default App;
