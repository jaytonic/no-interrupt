import React from 'react';

export const Header = () => {
  return (
    <div className='w-10/12 max-w-screen-lg'>
      <div className='text-white flex justify-between items-center mt-3'>
        <h1 className='text-3xl my-3'>No interrupts</h1>
        <ul className='text-lg list-none flex'>
          <li className='py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100'>
            menu 1
          </li>
          <li className='py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100'>
            menu 2
          </li>
        </ul>
      </div>
    </div>
  );
};
