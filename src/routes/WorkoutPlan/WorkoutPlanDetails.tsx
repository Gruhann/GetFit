import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import workoutPlans from "./WorkoutPlans";
import './WorkoutPlanDetails.css';
import Footer from "../Footer/Footer";

interface WorkoutPlan {
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
      <h1 className="workout-plan-container">{plan.title}</h1>
      <div className="PlanDetails">
        {plan.days.map((day) => (
          <div key={day.day} className="day-details">
            <h2>Day {day.day} {day.title}</h2>
            <div className="workout-box">
              <h3>Warm-Up</h3>
              <p>{day.warmUp.description}</p>
              <p><b>Duration:</b> {day.warmUp.duration}</p>
            </div>
            {day.workout.map((exercise, index) => (
              <div key={index} className="workout-box">
                <h3>{exercise.exercise}</h3>
                <p><b>Instructions:</b> {exercise.instructions}</p>
                <p><b>Tips:</b> {exercise.tips}</p>
              </div>
            ))}
            <div className="workout-box">
              <h3>Cool-Down</h3>
              <p>{day.coolDown.description}</p>
              <p><b>Duration:</b> {day.coolDown.duration}</p>
            </div>
            <div className="workout-box">
              <h3>Activity</h3>
              <p>{day.activity}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer 
      email="GetFit@gmail.com"
      phoneNumber="99999-99999"
      instagramLink="https://www.instagram.com/yourbusiness"
      twitterLink="https://www.twitter.com/yourbusiness"
      />
    </div>
  );
}

export default WorkoutPlanDetails;
