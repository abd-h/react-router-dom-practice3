import React from 'react';
import { useNavigate} from 'react-router-dom';
import EventForm from '../components/EventForm';

const NewEventPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/')
  }
  return (
    <>
      <h1 onClick={ clickHandler }>NewEventPage</h1>
      <EventForm method='post' />
    </>
  );
}

export default NewEventPage

