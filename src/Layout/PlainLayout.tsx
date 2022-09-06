import React from 'react';
import { Outlet } from 'react-router-dom';

export const PlainLayout = () => {
  return (
    <div className='grow h-full flex justify-around'>
      <Outlet></Outlet>
    </div>
  );
};
