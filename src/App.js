import './App.css';

function App() {

  const users = [
    {name: "Pedro", age: 21}, 
    { name: "Nicholas", age: 55 }, 
    {name: "Adrian", age: 23 }
  ];

  return (
    <div className="App">

        {users.map((user, key) => {
          return <div> {user.name} {user.age} </div>
        })}

        <User 
          name="Nicholas"
          age={21}
          email="nicholas.revenco@gmail.com"
        />
        <User 
          name="Adrian"
          age={13}
          email="adrian.revenco@gmail.com"
        />

    </div>
  );
}

const User = (props) => {
  const name = <h1>{props.name}</h1>;
  const age = <h2>{props.age}</h2>;
  const email = <h2>{props.email}</h2>;

  age >= 18 ? console.log("Over 18") : console.log("Under 18");


  const user = (
    <div>
      {name}
      {age}
      {email}
      { true && <button>True</button>}
    </div>
  );
  return <h1>{ user }</h1>;
};

export default App;
