import { useEffect } from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignInPage.css';

export default function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the path user attempted to visit before being redirected to sign-in
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate(from, { replace: true }); // Redirect to the intended page after successful sign-in
    }
  }, [isLoaded, isSignedIn, navigate, from]);

  return (
    <div className="sign-in-container">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
