import './App.css';
import { useState, useEffect } from "react";

export const Api = () => {

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