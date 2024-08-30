import { SignIn } from '@clerk/clerk-react';

import './SignInPage.css';

export default function SignInPage() {

  return (
    <div className="sign-in-container">
      {/* <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" /> */}
      <SignIn/>
    </div>
  );
}
