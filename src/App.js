import './App.css';
import { UseState } from "./useStateEx/UseState";
import { Crud } from "./crudEx/Crud";
import { ExcuseApi } from "./apiEx/ExcuseApi";
import { NameAgeApi } from "./apiEx/NameAgeApi";
import { ReactRouterDom } from "./reactRouterDomEx/ReactRouterDom";
import { Form } from "./formsEx/Form";
import { HookApp } from "./hooksEx/HookApp";





import { useState } from "react";

function App() {

  return (
    <div className="App">
        <UseState />
        <hr />
        <Crud />
        <hr />
        <ExcuseApi />
        <hr />
        <NameAgeApi />
        <hr />
        <ReactRouterDom />
        <hr />
        <Form />
        <hr />
        <HookApp />
    </div>
  );
}

export default App;
