// Event loader function is store here to be used multiple times.

import { json } from "react-router-dom";

export const eventsLoader = async () => {
    const response = await fetch('http://localhost:8080/events/');

    if (!response.ok) {
        throw json({message: 'Could not fetch events data'}, {status: 500})
    } else {
        const resData = await response.json();
        return resData.events;
    }
}