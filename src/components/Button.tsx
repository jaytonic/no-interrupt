import React from 'react';

export interface ButtonPropsModel {
  type: 'button' | 'submit' | 'reset' | undefined;
  label: string;
}

export const Button = ({ type = 'button', label }: ButtonPropsModel) => {
  return (
    <button
      type={type}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {label}
    </button>
  );
};
