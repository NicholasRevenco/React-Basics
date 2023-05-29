import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from '../ReactRouterDom';

export const Home = () => {

    const { username } = useContext(AppContext);

    return (
    <div>
        <h1>This is the home page and user is: {username}</h1>
    </div> )
}