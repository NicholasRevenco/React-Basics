import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

export const Api = () => {

    const [catFact, setCatFact] = useState("");

    const fetchCatFact = () => {
        fetch("https://excuser-three.vercel.app/v1/excuse/")
        .then((res) => res.json())
        .then((data) => {
             console.log(data);
    });
    }

    useEffect(() => {
        fetchCatFact();
    }, [])
    fetch("https://excuser-three.vercel.app/v1/excuse/")
        .then((res) => res.json())
        .then((data) => {
             console.log(data);
    });

    return (
        <div className="App">
            <p>{catFact}</p>
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
        </div>
    )
}