import { Navigate } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { status, data: signInCheckResult } = useSigninCheck();
  if (status === 'loading') {
    return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>;
  }

  return signInCheckResult.signedIn === true ? children : <Navigate to={{ pathname: '/login' }} />;
};
