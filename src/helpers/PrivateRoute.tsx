import React from 'react'; 
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useAppSelector } from '../hooks/reduxHook';

export const PrivateRoute: React.FC<{ component: React.ComponentType, redirectTo?: string }> = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useAppSelector(selectIsLoggedIn);
  console.log(isLogin);
  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};