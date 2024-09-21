import React, { Suspense } from "react";
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { eventsLoader } from "./eventsLoader";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  // console.log(data.event);

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center", fontWeight: "bolder" }}>
            Loading...
          </p>
        }
      >
        <Await resolve={event}>
          {(loaderEvent) => <EventItem event={loaderEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={
          <p style={{ textAlign: "center", fontWeight: "bolder", color: 'red', fontSize: '1.5rem'}}>
            EventDetailPage: Loading...
          </p>
        }
      >
        <Await resolve={ events }>
        {(loaderEvents) => <EventsList events={loaderEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const eventLoader = async (params) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "EventDetailPage: Could not fetch event data" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

export const loader = async ({ request, params }) => {
  return defer({
    event: await eventLoader(params),
    events: eventsLoader(),
  });
};

// export const loader = async ({ request, params }) => {
//   const id = params.eventId;

//   const response = await fetch("http://localhost:8080/events/" + id);

//   if (!response.ok) {
//     json({ message: "Could not find event details" }, { status: 500 });
//   } else {
//     return response;
//   }
// };

export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Event not Deleted!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
