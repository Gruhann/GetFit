// DietPlan.tsx

import React from 'react';
import './DietPlan.css';

type DietPlanProps = {
  plan: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const DietPlan: React.FC<DietPlanProps> = ({ plan }) => {
  return (
    <div>
    <div className="diet-plan" style={{ backgroundImage: `url(${plan.image})` }} >
      <h2><strong>{plan.title}</strong></h2>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
    </div>
  );
};

export default DietPlan;
