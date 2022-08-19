import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export default function AuthenticatedLayout() {
  return (
    <div>
      <Header></Header>

      <main className="-mt-32 min-h-full">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 min-h-full h-96">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 h-full	">
            <div className="h-full	 border-gray-200 rounded-lg">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
