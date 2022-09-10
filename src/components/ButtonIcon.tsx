import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ButtonIconProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: IconDefinition;
}

export const ButtonIcon = ({ onClick, icon }: ButtonIconProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
    </button>
  );
};
