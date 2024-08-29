// DietPlan.tsx
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate(`/diet/${plan.id}`);
  }
  return (
    <div>
    <div onClick={handleClick} className="diet-plan"  style={{ backgroundImage: `url(${plan.image})` }} >
      <h2><strong>{plan.title}</strong></h2>
      <p>{plan.description}</p>
    </div>
    </div>
  );
};

export default DietPlan;
