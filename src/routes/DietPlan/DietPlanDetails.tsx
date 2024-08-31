import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dietPlans from "./DietPlans";
import "./DietPlanDetails.css"
import { Stepper, Step, StepConnector, styled } from "@mui/material";
import Footer from "../Footer/Footer"; interface DietPlan {
  id: number;
  title: string;
  description: string;
  image: string;
  itinerary: {
    day: number;
    meals: {
      breakfast: {
        meal: string;
        quantity: string;
        preparation: string;
        macronutrients: {
          protein: string;
          fat: string;
          carbs: string;
        };
      };
      morningSnack: {
        meal: string;
        quantity: string;
        preparation: string;
        macronutrients: {
          protein: string;
          fat: string;
          carbs: string;
        };
      };
      lunch: {
        meal: string;
        quantity: string;
        preparation: string;
        macronutrients: {
          protein: string;
          fat: string;
          carbs: string;
        };
      };
      eveSnack: {
        meal: string;
        quantity: string;
        preparation: string;
        macronutrients: {
          protein: string;
          fat: string;
          carbs: string;
        };
      };
      dinner: {
        meal: string;
        quantity: string;
        preparation: string;
        macronutrients: {
          protein: string;
          fat: string;
          carbs: string;
        };
      };
    };
    averageMacronutrients: {
      protein: string;
      fat: string;
      carbs: string;
    };
    tips: string;
  }[];
}

function DietPlanDetails() {
  const { id } = useParams<{ id: string }>();
  const [plan, setPlan] = useState<DietPlan | undefined>();
  const [curStep, setCurStep] = useState(0); // Current step state

  useEffect(() => {
    const foundPlan = dietPlans.find((p) => p.id === parseInt(id!));
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
      <h1 className="diet-plan-container">{plan.title}</h1>
      <div className="stepper-container">
      <Stepper activeStep={curStep} alternativeLabel connector={<CustomConnector />}>
        {plan.itinerary.map((dayPlan, index) => (
          <Step key={dayPlan.day} onClick={() => setCurStep(index)} className={`step-button ${curStep === index ? "active" : ""}`}>
            <span>Day {dayPlan.day}</span>
          </Step>
        ))}
      </Stepper>
      </div>
      <div className="PlanDetails">
        {plan.itinerary[curStep] && (
          <div key={plan.itinerary[curStep].day} className="day-details">
            <h2>Day {plan.itinerary[curStep].day}</h2>
            <div className="meal">
              <h3>Breakfast</h3>
              <p><b>Meal:</b> {plan.itinerary[curStep].meals.breakfast.meal}</p>
              <p><b>Quantity:</b> {plan.itinerary[curStep].meals.breakfast.quantity}</p>
              <p><b>Preparation:</b> {plan.itinerary[curStep].meals.breakfast.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {plan.itinerary[curStep].meals.breakfast.macronutrients.protein}, Fat: {plan.itinerary[curStep].meals.breakfast.macronutrients.fat}, Carbs: {plan.itinerary[curStep].meals.breakfast.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Morning Snack</h3>
              <p><b>Meal:</b> {plan.itinerary[curStep].meals.morningSnack.meal}</p>
              <p><b>Quantity:</b> {plan.itinerary[curStep].meals.morningSnack.quantity}</p>
              <p><b>Preparation:</b> {plan.itinerary[curStep].meals.morningSnack.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {plan.itinerary[curStep].meals.morningSnack.macronutrients.protein}, Fat: {plan.itinerary[curStep].meals.morningSnack.macronutrients.fat}, Carbs: {plan.itinerary[curStep].meals.morningSnack.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Lunch</h3>
              <p><b>Meal:</b> {plan.itinerary[curStep].meals.lunch.meal}</p>
              <p><b>Quantity:</b> {plan.itinerary[curStep].meals.lunch.quantity}</p>
              <p><b>Preparation:</b> {plan.itinerary[curStep].meals.lunch.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {plan.itinerary[curStep].meals.lunch.macronutrients.protein}, Fat: {plan.itinerary[curStep].meals.lunch.macronutrients.fat}, Carbs: {plan.itinerary[curStep].meals.lunch.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Evening Snack</h3>
              <p><b>Meal:</b> {plan.itinerary[curStep].meals.eveSnack.meal}</p>
              <p><b>Quantity:</b> {plan.itinerary[curStep].meals.eveSnack.quantity}</p>
              <p><b>Preparation:</b> {plan.itinerary[curStep].meals.eveSnack.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {plan.itinerary[curStep].meals.eveSnack.macronutrients.protein}, Fat: {plan.itinerary[curStep].meals.eveSnack.macronutrients.fat}, Carbs: {plan.itinerary[curStep].meals.eveSnack.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Dinner</h3>
              <p><b>Meal:</b> {plan.itinerary[curStep].meals.dinner.meal}</p>
              <p><b>Quantity:</b> {plan.itinerary[curStep].meals.dinner.quantity}</p>
              <p><b>Preparation:</b> {plan.itinerary[curStep].meals.dinner.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {plan.itinerary[curStep].meals.dinner.macronutrients.protein}, Fat: {plan.itinerary[curStep].meals.dinner.macronutrients.fat}, Carbs: {plan.itinerary[curStep].meals.dinner.macronutrients.carbs}</p>
            </div>
            <div className="average-macronutrients">
              <h3>Average Macronutrients</h3>
              <p><b>Protein:</b> {plan.itinerary[curStep].averageMacronutrients.protein}</p>
              <p><b>Fat:</b> {plan.itinerary[curStep].averageMacronutrients.fat}</p>
              <p><b>Carbs:</b> {plan.itinerary[curStep].averageMacronutrients.carbs}</p>
            </div>
            <div className="tips">
              <h3>Tips</h3>
              <p>{plan.itinerary[curStep].tips}</p>
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

export default DietPlanDetails;
