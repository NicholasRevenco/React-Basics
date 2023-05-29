import { useContext } from "react";
import { AppContext } from '../ReactRouterDom';
import { useQuery } from "@tanstack/react-query";

export const Home = () => {

    const { data, isLoading, isError, refetch } = useQuery(["excuse"], () => {
        return fetch("https://excuser-three.vercel.app/v1/excuse/")
            .then((res) => res.json())
            .then((data) => data[0].excuse ); 
    });

    const { username } = useContext(AppContext);

    if (isLoading) {
        return <h1>The data is loading</h1>
    }

    if (isError) {
        return <h1>Sorry, there was an error!</h1>
    }

    return (
    <div>
        <h1>This is the home page and user is: {username}</h1>
        <h1>{data}</h1>
        <button onClick={refetch}> Update Data</button>
    </div> )
}
