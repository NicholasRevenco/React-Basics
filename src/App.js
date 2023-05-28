import './App.css';

function App() {
  return (
    <div className="App">
        <User />
    </div>
  );
}

const User = () => {
  const name = <h1>Nicholas</h1>;
  const age = <h2>16</h2>;
  const email = <h2>nicholas.revenco@gmail.com</h2>;
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
