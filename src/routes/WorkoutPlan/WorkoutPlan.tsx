import "./WorkoutPlan.css"
interface WorkoutPlanProps {
    plan: {
        title: string;
        description: string;
        image: string;
      };
  }

function WorkoutPlan({ plan }:WorkoutPlanProps ) {
  return (
    <div>
    <div className="workout-plan" style={{ backgroundImage: `url(${plan.image})` }} >
      <h2>{plan.title}</h2>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
    </div>
    
  );
}

export default WorkoutPlan;