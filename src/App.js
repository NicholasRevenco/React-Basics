import './App.css';
import { User } from "./User";
import { useState } from "react";

function App() {

  const users = [
    //{name: "Pedro", age: 21}, 
    //{ name: "Nicholas", age: 55 }, 
    //{name: "Adrian", age: 23 }
  ];

  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");

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

    </div>
  );
}

export default App;
