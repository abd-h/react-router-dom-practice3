import React from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation'

const EventLayout = () => {
    return (
        <>
            <EventsNavigation/>
            <main>
            <Outlet />
            </main>
        
      </>
    );
}

export default EventLayout