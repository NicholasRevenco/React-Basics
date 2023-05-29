import { useState } from "react";
import { useContext } from "react";
import { AppContext } from '../ReactRouterDom'

export const ChangeProfile = () => {

    const { setUsername } = useContext(AppContext);
    
    const [newUsername, setNewUsername] = useState("");
    
    return (
        <div>
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }} />
            <button onClick={() => {
                setUsername(newUsername);
                }}>Change Username</button>
        </div>
    )
}