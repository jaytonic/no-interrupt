import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="w-10/12 max-w-screen-lg">
      <div className="text-white flex justify-between items-center mt-3">
        <h1 className="text-3xl my-3">No interrupts</h1>
        <ul className="text-lg list-none flex">
          <li>
            <NavLink
              to="tickets"
              className="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100">
              Tickets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="queues"
              className="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100">
              Queues
            </NavLink>
          </li>
          <li>
            <NavLink
              to="queue"
              className="py-2 px-4 hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition hover:-translate-y-1 hover:scale-100">
              My Queue
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
