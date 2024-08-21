import { useNavigate } from "react-router-dom";

import "./WorkoutPlan.css"

interface WorkoutPlanProps {
    plan: {
        id: number;
        title: string;
        description: string;
        image: string;
      };
  }

function WorkoutPlan({ plan }:WorkoutPlanProps ) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/workout/${plan.id}`);
  };

  return (
    <div>
    <div onClick={handleClick} className="workout-plan" style={{ backgroundImage: `url(${plan.image})` }} >
      <h2>{plan.title}</h2>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
    </div>
    
  );
}

export default WorkoutPlan;