import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import workoutPlans from "./WorkoutPlans";
interface WorkoutPlan {
  id: number;
  title: string;
  description: string;
  image: string;
}
function WorkoutPlanDetails() {
  const { id } = useParams<{ id: string }>();
  const [plan, setPlan] = useState<WorkoutPlan | undefined>();

  useEffect(() => {
    const foundPlan = workoutPlans.find((p) => p.id === parseInt(id!));
    setPlan(foundPlan);
  }, [id]);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  return (
    <div>
      <h1>{plan.title}</h1>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
  );
}

export default WorkoutPlanDetails;
