import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from '../ReactRouterDom';

export const Menu = () => {

    const { username } = useContext(AppContext);

    return (
    <div>
        <h1>This is the menu page and user is: {username}</h1>
        <ChangeProfile />
    </div> )
}