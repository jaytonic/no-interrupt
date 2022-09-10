import { Link } from 'react-router-dom';

export interface LinkModel {
  to: string;
  children: React.ReactNode;
  //   color?: string;
}

export const Alink = ({ to,  children }: LinkModel) => {
  return (
      <Link to={to} className="font-medium text-primary-600 hover:text-primary-500">
        {children}
      </Link>
  );
};
