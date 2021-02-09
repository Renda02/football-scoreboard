import React, { useState } from "react";
import "./App.css";

import { Container,Button } from "./globalStyles";
import CurrentData from "./components/CurrentData";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [show, setShow] = useState(true);

  return (
    <Container>
      {show ? <ScoreBoard /> : <CurrentData />}

      <Button onClick={() => setShow(!show)}>Toggle</Button>
    </Container>
  );
}

export default App;
