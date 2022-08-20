import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export default function AuthenticatedLayout() {
  return (
    <div>
      <div className="bg-indigo-600 pb-32">
        <Header></Header>

        {/*  
TODO: MOVING Header
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight font-bold text-white">Dashboard</h1>
          </div>
        </header> */}
      </div>

      <main className="-mt-32 min-h-full">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 min-h-full ">
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
