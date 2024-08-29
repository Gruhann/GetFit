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
            reps: string; 
            rest: string;
            image: string;
            description: string;
        }[];
        equipment: string[];
        benefits: string[];
        targetMuscles: string[];
        safetyPrecautions: string[];
        duration: number; 
        frequency: string; 
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
      <h2 ><strong>{plan.title}</strong></h2>
      <p>{plan.description}</p>
    </div>
    </div>
    
  );
}

export default WorkoutPlan;