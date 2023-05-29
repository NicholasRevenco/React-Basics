import './App.css';
import { useState, useEffect } from "react";

export const ExcuseApi = () => {

    const [excuse, setExcuse] = useState("");

    const fetchExcuse = () => {
        fetch("https://excuser-three.vercel.app/v1/excuse/")
            .then((res) => res.json())
            .then((data) => {
                setExcuse(data[0].excuse);
        });
    }

    useEffect(() => {
        fetchExcuse();
    }, [])

    return (
        <div className="App">
            <p>{excuse}</p>
            <button onClick={fetchExcuse}>Generate Cat Fact</button>
        </div>
    )
}

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
