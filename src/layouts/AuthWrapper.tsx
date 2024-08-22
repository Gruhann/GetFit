import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // Redirect to sign-in and save the intended destination
      navigate('/sign-in', { state: { from: location }, replace: true });
    }
  }, [isLoaded, isSignedIn, navigate, location]);

  if (!isLoaded || !isSignedIn) {
    return null; // Or a loading spinner
  }

  return children; // Render the wrapped content
}