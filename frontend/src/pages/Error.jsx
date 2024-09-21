import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from './PageContent';

const Error = () => {
  const error = useRouteError();

  let title = 'COULD NOT FETCH DATA';
  let message = 'COULD NOT FIND RESOURCE';

  // console.log(JSON.parse(error.data).message);
  // console.log(error.data.message);

  if (error.status === 500) {
    // title = JSON.parse(error.data).message;
    title = error.data.message;
  }

  if (error.status === 404) {
    title = 'Page Not found';
    message = 'Could not find page or resource';
  }
    return (
        <>
            <MainNavigation />
        <main>
          <PageContent title={title}>
            <p>{ message }</p>
          </PageContent>
        </main>
      </>
    );
}

export default Error