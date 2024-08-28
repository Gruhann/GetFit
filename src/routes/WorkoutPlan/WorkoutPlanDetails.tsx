import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import workoutPlans from "./WorkoutPlans";

interface WorkoutPlan {
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
      <p>{plan.description}</p>
      <div>
        <h2>Instructions</h2>
        <ol>
          {plan.instructions.map((instruction, index) => (
            <li key={index}>
              <strong>Step {instruction.step}</strong>: {instruction.exercise}
              <br />
              Sets: {instruction.sets}, Reps: {instruction.reps}, Rest: {instruction.rest} seconds
              <br />
              <img src={instruction.image} alt={instruction.exercise} />
              <p>{instruction.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Equipment</h2>
        <ul>
          {plan.equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Benefits</h2>
        <ul>
          {plan.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Target Muscles</h2>
        <ul>
          {plan.targetMuscles.map((muscle, index) => (
            <li key={index}>{muscle}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Safety Precautions</h2>
        <ul>
          {plan.safetyPrecautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Duration</h2>
        <p>{plan.duration} minutes</p>
      </div>
      <div>
        <h2>Frequency</h2>
        <p>{plan.frequency}</p>
      </div>
    </div>
  );
}

export default WorkoutPlanDetails;