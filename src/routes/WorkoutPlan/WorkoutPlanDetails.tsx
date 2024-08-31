import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import workoutPlans from "./WorkoutPlans";
import './WorkoutPlanDetails.css';
import Footer from "../Footer/Footer";
import { Stepper, Step,StepConnector,styled } from "@mui/material"; // Import Stepper

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
  const [curStep, setCurStep] = useState(0); // Current step state

  useEffect(() => {
    const foundPlan = workoutPlans.find((p) => p.id === parseInt(id!));
    setPlan(foundPlan);
  }, [id]);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  const CustomConnector = styled(StepConnector)({
    '& .MuiStepConnector-line': {
      border: 'none', // Removes the connector line
    },
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <h1 className="workout-plan-container">{plan.title}</h1>
      <Stepper activeStep={curStep} alternativeLabel connector={<CustomConnector />}>
        {plan.days.map((day, index) => (
          <Step key={day.day} onClick={() => setCurStep(index)} className={`step-button ${curStep === index ? "active" : ""}`}>
            <span>Day {day.day}</span>
          </Step>
        ))}
      </Stepper>
      <div className="PlanDetails">
        {plan.days[curStep] && (
          <div key={plan.days[curStep].day} className="day-details">
            <h2>Day {plan.days[curStep].day} {plan.days[curStep].title}</h2>
            <div className="workout-box">
              <h3>Warm-Up</h3>
              <p>{plan.days[curStep].warmUp.description}</p>
              <p><b>Duration:</b> {plan.days[curStep].warmUp.duration}</p>
            </div>
            {plan.days[curStep].workout.map((exercise, index) => (
              <div key={index} className="workout-box">
                <h3>{exercise.exercise}</h3>
                <p><b>Instructions:</b> {exercise.instructions}</p>
                <p><b>Tips:</b> {exercise.tips}</p>
              </div>
            ))}
            <div className="workout-box">
              <h3>Cool-Down</h3>
              <p>{plan.days[curStep].coolDown.description}</p>
              <p><b>Duration:</b> {plan.days[curStep].coolDown.duration}</p>
            </div>
            <div className="workout-box">
              <h3>Activity</h3>
              <p>{plan.days[curStep].activity}</p>
            </div>
          </div>
        )}
        
      </div>
      <button className="back-to-top" onClick={scrollToTop}>^ Back to Top</button>

      
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
