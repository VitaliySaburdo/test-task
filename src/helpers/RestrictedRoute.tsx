import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const RestrictedRoute: React.FC<{ component: React.ComponentType, redirectTo?: string }> = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};
