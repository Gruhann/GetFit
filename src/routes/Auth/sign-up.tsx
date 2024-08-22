import { useEffect } from 'react';
import { SignUp, useAuth } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SignUpPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the path user attempted to visit before being redirected to sign-up
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate(from, { replace: true }); // Redirect to the intended page after successful sign-up
    }
  }, [isLoaded, isSignedIn, navigate, from]);

  return (
    <div className="sign-up-container">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
