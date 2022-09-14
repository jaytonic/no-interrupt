import React from 'react';

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <h2 className="text-xl font-bold my-3">{title}</h2>;
};
