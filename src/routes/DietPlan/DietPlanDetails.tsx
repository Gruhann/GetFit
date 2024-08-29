import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dietPlans from "./DietPlans";
import "./DietPlanDetails.css"
interface DietPlan {
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

  useEffect(() => {
    const foundPlan = dietPlans.find((p) => p.id === parseInt(id!));
    setPlan(foundPlan);
  }, [id]);

  if (!plan) {
    return <div>Plan not found</div>;
  }

  return (
    <div>
      <div className="dietplan">
        <h1>{plan.title}</h1>
      </div>

      <div className="itinerary">
        {plan.itinerary.map((dayPlan) => (
          <div key={dayPlan.day} className="day-plan">
            <h2>Day {dayPlan.day}</h2>
            <div className="meal">
              <h3>Breakfast</h3>
              <p><b>Meal:</b> {dayPlan.meals.breakfast.meal}</p>
              <p><b>Quantity:</b> {dayPlan.meals.breakfast.quantity}</p>
              <p><b>Preparation:</b> {dayPlan.meals.breakfast.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {dayPlan.meals.breakfast.macronutrients.protein}, Fat: {dayPlan.meals.breakfast.macronutrients.fat}, Carbs: {dayPlan.meals.breakfast.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Morning Snack</h3>
              <p><b>Meal:</b> {dayPlan.meals.morningSnack.meal}</p>
              <p><b>Quantity:</b> {dayPlan.meals.morningSnack.quantity}</p>
              <p><b>Preparation:</b> {dayPlan.meals.morningSnack.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {dayPlan.meals.morningSnack.macronutrients.protein}, Fat: {dayPlan.meals.morningSnack.macronutrients.fat}, Carbs: {dayPlan.meals.morningSnack.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Lunch</h3>
              <p><b>Meal:</b> {dayPlan.meals.lunch.meal}</p>
              <p><b>Quantity:</b> {dayPlan.meals.lunch.quantity}</p>
              <p><b>Preparation:</b> {dayPlan.meals.lunch.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {dayPlan.meals.lunch.macronutrients.protein}, Fat: {dayPlan.meals.lunch.macronutrients.fat}, Carbs: {dayPlan.meals.lunch.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Evening Snack</h3>
              <p><b>Meal:</b> {dayPlan.meals.eveSnack.meal}</p>
              <p><b>Quantity:</b> {dayPlan.meals.eveSnack.quantity}</p>
              <p><b>Preparation:</b> {dayPlan.meals.eveSnack.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {dayPlan.meals.eveSnack.macronutrients.protein}, Fat: {dayPlan.meals.eveSnack.macronutrients.fat}, Carbs: {dayPlan.meals.eveSnack.macronutrients.carbs}</p>
            </div>
            <div className="meal">
              <h3>Dinner</h3>
              <p><b>Meal:</b> {dayPlan.meals.dinner.meal}</p>
              <p><b>Quantity:</b> {dayPlan.meals.dinner.quantity}</p>
              <p><b>Preparation:</b> {dayPlan.meals.dinner.preparation}</p>
              <p><b>Macronutrients:</b> Protein: {dayPlan.meals.dinner.macronutrients.protein}, Fat: {dayPlan.meals.dinner.macronutrients.fat}, Carbs: {dayPlan.meals.dinner.macronutrients.carbs}</p>
            </div>
            <div className="average-macronutrients">
              <h3>Average Macronutrients</h3>
              <p><b>Protein:</b> {dayPlan.averageMacronutrients.protein}</p>
              <p><b>Fat:</b> {dayPlan.averageMacronutrients.fat}</p>
              <p><b>Carbs:</b> {dayPlan.averageMacronutrients.carbs}</p>
            </div>
            <div className="tips">
              <h3>Tips</h3>
              <p>{dayPlan.tips}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DietPlanDetails;
