export const User = (props) => {
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