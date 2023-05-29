import './App.css';
import { UseState } from "./useStateEx/UseState";
import { Crud } from "./crudEx/Crud";
import { ExcuseApi } from "./apiEx/ExcuseApi";
import { NameAgeApi } from "./apiEx/NameAgeApi";
import { ReactRouterDom } from "./reactRouterDomEx/ReactRouterDom";



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
