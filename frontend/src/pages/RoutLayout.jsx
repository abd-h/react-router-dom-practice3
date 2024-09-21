import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RoutLayout = () => {
  const navigate = useNavigation();
  // console.log(navigate.state === 'loading');
  return (
      <div>
         <MainNavigation /> 
      <main>
        {navigate.state === 'loading' && <p>LOADING....</p>}
        <Outlet />
      </main>
    </div>
  );
}

export default RoutLayout;