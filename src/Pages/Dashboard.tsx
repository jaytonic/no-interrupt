import { useUser } from 'reactfire';

export const Dashboard = () => {
  const { status, data: user } = useUser();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>hello {user?.email} </h2>
    </div>
  );
};
