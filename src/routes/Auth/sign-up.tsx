import { SignUp } from '@clerk/clerk-react';
import './SignInPage.css';

export default function SignUpPage() {
  return (
    <div className="sign-in-container">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
