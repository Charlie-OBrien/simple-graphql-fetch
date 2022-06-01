import { useEffect, useState } from "react";
import LAUNCHES_QUERY from "./LAUNCHES_QUERY";

function useLaunches () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      fetch('https://api.spacex.land/graphql/', {
        method: "POST", //does not work with "GET"
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query: LAUNCHES_QUERY})
      }).then(response => response.json())
        .then(data => setLaunches(data.data.launchesPast))
        // .then(data => console.log(data)) // <- debug
    }, []);

    return launches;
}

export default useLaunches;