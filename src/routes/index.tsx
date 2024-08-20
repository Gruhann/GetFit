// WorkoutPlansContainer.js
import { useState } from 'react';
import CalorieCalculator from './CalorieCalculator';
import WorkoutPlan from './WorkoutPlan';
import './WorkoutPlan.css';
import './index.css'; // Import the CSS file for custom styles
import CalorieButton from './CalorieButton';

const workoutPlans = [
  {
    id: 1,
    title: 'Full Body Workout',
    description: 'Build strength and endurance with this comprehensive routine.',
    image: '/assets/fullbody.jpg',
  },
  {
    id: 2,
    title: 'Cardio Workout',
    description: 'Improve cardiovascular health and burn calories.',
    image: '/assets/cardio.jpg',
  },
  {
    id: 3,
    title: 'Strength Training',
    description: 'Focus on building muscle and increasing strength.',
    image: '/assets/strength.jpg',
  },
  {
    id: 4,
    title: 'Flexibility Workout',
    description: 'Enhance your flexibility and range of motion.',
    image: '/assets/flexibility.jpg',
  },
  {
    id: 5,
    title: 'High-Intensity Interval Training (HIIT)',
    description: 'Boost your metabolism and burn calories by HIIT.',
    image: '/assets/hiit.jpg',
  }
];

function WorkoutPlansContainer() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleShowCalculator = () => setShowCalculator(true);
  const handleHideCalculator = () => setShowCalculator(false);

  return (
    <>
      <div className="intro-container">
        <h1 className="centered-text">GetFit with Customised Workout Plans</h1>
        <h2 className="centered-text">
          Experience personalized fitness with expertly <br />
          designed workout plans tailored to your goals and fitness level.<br />
          Track your progress, stay motivated, and adapt plans to your lifestyle.<br />
        </h2>
        <p className="centered-text">Enjoy complementary nutrition guidance and connect with a supportive community.</p>
        <div className="workout-cards">
          {workoutPlans.map(plan => (
            <div key={plan.id}>
              <WorkoutPlan plan={plan} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="centered-text">Calculate Calories and Macro nutrients</h1>
        <div className="calculator-button-container">
          <CalorieButton onClick={handleShowCalculator} />
        </div>
        {showCalculator && (
          <CalorieCalculator onClose={handleHideCalculator} />
        )}
      </div>
    </>
  );
}

export default WorkoutPlansContainer;
