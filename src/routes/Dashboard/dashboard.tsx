import { useState, useEffect } from "react";
import './DashboardPage.css'; // Make sure to create this CSS file for styles
import { useNavigate } from "react-router-dom";
import { useAuth } from '@clerk/clerk-react';

interface Plan {
  id: number;
  title: string;
  description: string;
  image: string; // Added the image field
  type: 'workout' | 'diet'; // Added type field
}

export default function DashboardPage() {
  const navigate = useNavigate();
  const { userId } = useAuth();

  const [dashboardPlans, setDashboardPlans] = useState<Plan[]>([]);

  useEffect(() => {
    if (!userId) return; // Ensure userId is available
    const plans = JSON.parse(localStorage.getItem(`dashboardPlans_${userId}`) || '[]');
    console.log('Plans in Dashboard:', plans);
    setDashboardPlans(plans);
  }, [userId]);
  

  const removePlan = (id: number) => {
    const updatedPlans = dashboardPlans.filter(plan => plan.id !== id);
    setDashboardPlans(updatedPlans);
    localStorage.setItem(`dashboardPlans_${userId}`, JSON.stringify(updatedPlans));
  };

  const handleClick = (id: number, type: 'workout' | 'diet') => {
    if (type === 'workout') {
      navigate(`/workout/${id}`);
    } else if (type === 'diet') {
      navigate(`/diet/${id}`);
    }
  };

  return (
    <>
      {dashboardPlans.length > 0 ? (
        <>
          <h1 className="centered-text">Your Plans</h1>
          <div className="dashboard-plans-container">
            {dashboardPlans.map((plan) => (
              <div key={plan.id} className="dashboard-plan-box">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="dashboard-plan-image" 
                  onClick={() => handleClick(plan.id, plan.type)}
                />
                <div className="dashboard-plan-content">
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                  <button className="remove-button" onClick={() => removePlan(plan.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="centered-text">No plans added to the dashboard yet.</p>
      )}
    </>
  );
}
