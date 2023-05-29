import '../App.css';
import { useState, useEffect } from "react";

export const NameAgeApi = () => {

    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(0);

    const fetchData = () => {
        fetch(`https://api.agify.io/?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                setPredictedAge(data.age);
        });
    }
    return (
        <div className="App">
            <input
                placeholder="Name"
                onChange={(event) => {
                    setName(event.target.value);
                }} />
            <button onClick={fetchData}>Predict Age</button>
            <h1>Predicted age for {name}: {predictedAge}</h1>
        </div>
    )
}
