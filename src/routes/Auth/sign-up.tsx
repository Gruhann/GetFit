import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="sign-up-container">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
