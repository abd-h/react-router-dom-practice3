import React, { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { eventsLoader } from "./eventsLoader";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Jacket",
    price: 12,
  },
  {
    id: "p2",
    name: "Trousers",
    price: 10,
  },
  {
    id: "p3",
    name: "Waistcoat",
    price: 8,
  },
];

const EventsPage = () => {
  // const data = useLoaderData();
  const { events } = useLoaderData();
  return (
    <>
      <h1>EventsPage</h1>
      <Suspense fallback={ <p style={ { textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem'}}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventsPage;

// const eventLoader = async () => {
//   const response = await fetch("http://localhost:8080/events/");

//   if (!response.ok) {
//     // throw new Response(JSON.stringify({message: 'This is an error page'}), {status: 500})
//     throw json({ message: "COULD NOT FETCH EVENTS" }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData.events;
//   }
// };

export const loader = () => {
  return defer({
    events: eventsLoader(),
  });
};
