import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children }) {
    const { isAuth } = useAuth();
  
    if (!isAuth) {
      return <Navigate to="/login" />;
    }
  
    return children;
}