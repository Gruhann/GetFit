import "./root.css";
import { Link, Outlet } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'



export default function RootLayout() {
  // const navigate = useNavigate()

  return (
  
      <header className="header">
        <nav className="navbar">
        <div className="logo-container">
          <span className="custom-text">GetFit</span>
        </div>
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
      <main>
        <Outlet />
      </main>
      </header> 
  )
}
