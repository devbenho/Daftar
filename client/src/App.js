import React from "react";
import  {Button}  from "./components/Button";
import { Spacer } from "./components/Spacer";

const App = () => {
  return (
    <div>
      <Button label="Solid" variant="solid" px={3} bg="brand-100" color="white"/>
      <Spacer spacer="|"/>
      <Button label="Ghost" variant="ghost" px={3} bg="brand-100" color="black"/>
    </div>
  );
};

export default App;