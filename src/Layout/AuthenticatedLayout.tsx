import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const AuthenticatedLayout = () => {
  return (
    <React.Fragment>
      <header className='flex justify-around'>
        <Header />
      </header>
      <div className='grow h-full flex justify-around'>
        <div className='bg-white m-5 rounded-lg p-3 w-10/12 max-w-screen-lg shadow-lg'>
          <Outlet></Outlet>
        </div>
      </div>
    </React.Fragment>
  );
};
