import './App.css';
import { User } from "./User"

function App() {

  const users = [
    {name: "Pedro", age: 21}, 
    { name: "Nicholas", age: 55 }, 
    {name: "Adrian", age: 23 }
  ];

  return (
    <div className="App">

        {users.map((user, key) => {
          return <div> <User name={user.name} age={user.age} /> </div>
        })}

    </div>
  );
}

export default App;
