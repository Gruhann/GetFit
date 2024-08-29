import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layouts
import RootLayout from './layouts/root-layout';
import AuthWrapper from './layouts/AuthWrapper';

// Import the components
import IndexPage from './routes/index';
import ContactPage from './routes/Contact/contact';
import SignInPage from './routes/Auth/sign-in';
import SignUpPage from './routes/Auth/sign-up';
import DashboardPage from './routes/Dashboard/dashboard';
import CalorieCalculatorPage from './routes/CalorieCalculator/CalorieCalculatorPage';
import WorkoutPlanDetails from './routes/WorkoutPlan/WorkoutPlanDetails';
import { ClerkProvider } from '@clerk/clerk-react';
import DietPlanDetails from './routes/DietPlan/DietPlanDetails';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      

      // Wrapped routes
      {
        path: '/dashboard',
        element: (
          <AuthWrapper>
            <DashboardPage />
          </AuthWrapper>
        ),
      },
      {
        path: '/calculator',
        element: (
          <AuthWrapper>
            <CalorieCalculatorPage />
          </AuthWrapper>
        ),
      },
      {
        path: '/workout/:id',
        element: (
          <AuthWrapper>
            <WorkoutPlanDetails />
          </AuthWrapper>
        ),
      },
      {
        path: '/diet/:id',
        element: (
          <AuthWrapper>
            <DietPlanDetails />
          </AuthWrapper>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);
