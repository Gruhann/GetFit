import { useNavigate } from "react-router-dom";

import "./WorkoutPlan.css"

interface WorkoutPlanProps {
    plan: {
        id: number;
        title: string;
        description: string;
        image: string;
        instructions: {
            step: number;
            exercise: string;
            sets: number;
            reps: string; // Adjust data type if needed
            rest: string;
            image: string;
            description: string;
        }[];
        equipment: string[];
        benefits: string[];
        targetMuscles: string[];
        safetyPrecautions: string[];
        duration: number; // Adjust data type if needed
        frequency: string; // Adjust data type if needed
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
      <h2><strong>{plan.title}</strong></h2>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
    </div>
    
  );
}

export default WorkoutPlan;