import { SignIn } from '@clerk/clerk-react';
import './SignInPage.css'; // Import the CSS file

export default function SignInPage() {
  return (
    <div className="sign-in-container">
      <SignIn path="/sign-in" />
    </div>
  );
}