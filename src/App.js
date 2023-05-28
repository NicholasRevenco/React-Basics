import './App.css';

function App() {
  return (
    <div className="App">
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
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return <h1>{ user }</h1>;
};

export default App;
