import '../App.css';
import { User } from "./User";
import { useState, useEffect } from "react";

export const UseState = () => {


const users = [
    //{name: "Pedro", age: 21}, 
    //{ name: "Nicholas", age: 55 }, 
    //{name: "Adrian", age: 23 }
  ];

  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    console.log("component mounted");
    return () => {
        console.log("component unmounted");
    }
  }, [showText]);

  const increaseAge = () => {
    setAge(age + 1 );
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">

        {users.map((user, key) => {
          return <div> <User name={user.name} age={user.age} /> </div>
        })}

        { age }
        <button onClick={increaseAge}>Increase Age</button>

        
        <input type="text" onChange={handleInputChange} />
        {inputValue}

        <button onClick={() => { setShowText(!showText)}}>Show Text</button>
        {showText && <h1>hello</h1>}

    </div>
  );
};