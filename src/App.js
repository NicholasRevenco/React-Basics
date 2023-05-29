import './App.css';
import { User } from "./User";
import { UseState } from "./UseState";
import { Crud } from "./Crud";
import { ExcuseApi, NameAgeApi } from "./Api";
import { ReactRouterDom } from "./ReactRouterDom";



import { useState } from "react";

function App() {

  return (
    <div className="App">
        <UseState />
        <Crud />
        <ExcuseApi />
        <NameAgeApi />
        <ReactRouterDom />
    </div>
  );
}

export default App;
