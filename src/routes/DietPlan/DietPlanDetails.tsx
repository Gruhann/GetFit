import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dietPlans from "./DietPlans.tsx";
interface DietPlan {
  id: number;
  title: string;
  description: string;
  image: string;
}
function DietPlanDetails() {
  const { id } = useParams<{ id: string }>();
  const [plan, setPlan] = useState<DietPlan | undefined>();

  useEffect(() => {
    const foundPlan = dietPlans.find((p) => p.id === parseInt(id!));
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

export default DietPlanDetails;
