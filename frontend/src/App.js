import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventLoader} from "./pages/Events";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RoutLayout from "./pages/RoutLayout";
import EventLayout from "./pages/EventLayout";
import Error from "./pages/Error";
import { action as manipulateAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction} from "./pages/Newsletter";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// Done.
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// Done.
// 4. Add properly working links to the MainNavigation
// Done.
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// Done.
// 6. Output a list of dummy events to the EventsPage
// Done.
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// Done.
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, // path: ""
      {
        path: "events/",
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ":eventId/",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateAction,
              },
            ],
          },

          { path: "new", element: <NewEventPage />, action: manipulateAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
