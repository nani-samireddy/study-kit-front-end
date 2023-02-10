import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthProtectionWrapper({ children }) {
  const { currentUser } = useAuth();


  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);


  if (!currentUser || currentUser === undefined) {
    return <Navigate to="/signin" />;
  }
  return children;
}
