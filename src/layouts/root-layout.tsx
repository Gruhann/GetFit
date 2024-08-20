import "./root.css";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <SignedOut>
              <li><Link to="/sign-in">Sign In</Link></li>
            </SignedOut>
            <SignedIn>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><UserButton /></li>
            </SignedIn>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}
