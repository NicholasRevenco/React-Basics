import './App.css';
import { User } from "./User";
import { UseState } from "./UseState";
import { Crud } from "./Crud";

import { useState } from "react";

function App() {

  return (
    <div className="App">
        <UseState />
        <Crud />
    </div>
  );
}

export default App;
