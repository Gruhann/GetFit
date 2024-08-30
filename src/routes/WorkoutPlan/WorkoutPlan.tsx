import { useNavigate } from "react-router-dom";
import "./WorkoutPlan.css";

// Adjusted interface to match the new data structure
interface WorkoutPlanProps {
  plan: {
    id: number;
    title: string;
    description: string;
    image: string;
    days: {
      day: number;
      title: string;
      warmUp: {
        description: string;
        duration: string;
      };
      workout: {
        exercise: string;
        instructions: string;
        tips: string;
      }[];
      coolDown: {
        description: string;
        duration: string;
      };
      activity: string;
    }[];
  };
}

function WorkoutPlan({ plan }: WorkoutPlanProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/workout/${plan.id}`);
  };

  return (
    <div onClick={handleClick} className="workout-plan" style={{ backgroundImage: `url(${plan.image})` }}>
      <h2><strong>{plan.title}</strong></h2>
      <p>{plan.description}</p>
    </div>
  );
}

export default WorkoutPlan;
