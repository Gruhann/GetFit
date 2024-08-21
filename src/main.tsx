import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layouts
import RootLayout from './layouts/root-layout';
import DashboardLayout from './layouts/dashboard-layout';
import CalculatorLayout from './layouts/Calculator-layout';

// Import the components
import IndexPage from './routes';
import ContactPage from './routes/contact';
import SignInPage from './routes/Auth/sign-in';
import SignUpPage from './routes/Auth/sign-up';
import DashboardPage from './routes/Dashboard/dashboard';
import CalorieCalculatorPage from './routes/CalorieCalculator/CalorieCalculatorPage';
import WorkoutPlanDetails from './routes/WorkoutPlan/WorkoutPlanDetails';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      { path: "/workout/:id" ,element:<WorkoutPlanDetails />},

      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '', element: <DashboardPage /> }, // Empty string for relative path
        ],
      },
      {
        element: <CalculatorLayout />,
        path: 'calculator',
        children: [
          { path: 'calorie-calculator', element: <CalorieCalculatorPage /> }, // Path relative to 'calculator'
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
