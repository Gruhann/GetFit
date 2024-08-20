import React, { useState } from 'react';
import './CalorieCalculator.css'; // Import the CSS file for styling

const CalorieCalculator = ({ onClose }) => {
  // State to hold user inputs
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintenance');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  // Constants for activity level multipliers
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  // Function to calculate BMR using the Harris-Benedict equation
  const calculateBMR = () => {
    if (gender === 'male') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  };

  // Function to calculate daily caloric needs
  const calculateCalories = () => {
    const bmr = calculateBMR();
    const tdee = bmr * activityMultipliers[activityLevel];

    let calorieAdjustment = 0;
    if (goal === 'bulk') {
      calorieAdjustment = 500;
    } else if (goal === 'cut') {
      calorieAdjustment = -500;
    }

    return tdee + calorieAdjustment;
  };

  // Function to calculate macronutrient breakdown
  const calculateMacronutrients = () => {
    const totalCalories = calculateCalories();

    // Macronutrient breakdown (assuming typical percentages)
    const protein = (totalCalories * 0.30) / 4; // 30% of calories from protein, 1g protein = 4 calories
    const fats = (totalCalories * 0.25) / 9; // 25% of calories from fats, 1g fat = 9 calories
    const carbs = (totalCalories * 0.45) / 4; // 45% of calories from carbs, 1g carb = 4 calories

    return { protein, fats, carbs };
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!age || !weight || !height) {
      setError('Please fill in all required fields.');
      return;
    }

    setError(null);
    setResults({
      totalCalories: calculateCalories(),
      macronutrients: calculateMacronutrients()
    });
  };

  // Function to reset form fields
  const resetForm = () => {
    setAge('');
    setGender('male');
    setWeight('');
    setHeight('');
    setActivityLevel('sedentary');
    setGoal('maintenance');
    setResults(null);
  };

  return (
    <div className="calorie-calculator-overlay">
      <div className="calorie-calculator-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="calorie-calculator-content">
          <div className="form-container">
            <h2>Calorie and Macronutrient Calculator</h2>
            <form>
              <label>
                Age:
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="0"
                  placeholder="Enter your age"
                />
              </label>
              <label>
                Gender:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label>
                Weight (kg):
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="0"
                  placeholder="Enter your weight"
                />
              </label>
              <label>
                Height (cm):
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="0"
                  placeholder="Enter your height"
                />
              </label>
              <label>
                Activity Level:
                <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly active</option>
                  <option value="moderate">Moderately active</option>
                  <option value="active">Active</option>
                  <option value="veryActive">Very active</option>
                </select>
              </label>
              <label>
                Goal:
                <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                  <option value="maintenance">Maintenance</option>
                  <option value="bulk">Bulk</option>
                  <option value="cut">Cut</option>
                </select>
              </label>
              <button type="button" onClick={handleSubmit}>Calculate</button>
              <button type="button" className="closebutton" onClick={resetForm}>Clear</button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="results-container">
            {results && (
              <>
                <h2>Results</h2>
                <p><strong>Total Calories:</strong> {results.totalCalories.toFixed(2)}</p>
                <p><strong>Protein:</strong> {results.macronutrients.protein.toFixed(2)} g</p>
                <p><strong>Fats:</strong> {results.macronutrients.fats.toFixed(2)} g</p>
                <p><strong>Carbohydrates:</strong> {results.macronutrients.carbs.toFixed(2)} g</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
