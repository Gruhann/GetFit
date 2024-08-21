import React, { useState } from 'react';
import './CalorieCalculator.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
const CalorieCalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'sedentary',
    goal: 'maintenance',
  });
  const [results, setResults] = useState<{ totalCalories: number; macronutrients: { protein: number; fats: number; carbs: number; } } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const steps = [
    { label: 'Hi, what is your age?', field: 'age', type: 'number' },
    { label: 'What is your weight (kg)?', field: 'weight', type: 'number' },
    { label: 'What is your height (cm)?', field: 'height', type: 'number' },
    { label: 'Activity Level:', field: 'activityLevel', type: 'select', options: ['sedentary', 'light', 'moderate', 'active', 'veryActive'] },
    { label: 'Goal:', field: 'goal', type: 'select', options: ['maintenance', 'bulk', 'cut'] },
  ];

  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const calculateBMR = () => {
    const { age, weight, height, gender } = formData;
    const ageNum = Number(age);
    const weightNum = Number(weight);
    const heightNum = Number(height);

    if (gender === 'male') {
      return 88.362 + 13.397 * weightNum + 4.799 * heightNum - 5.677 * ageNum;
    } else {
      return 447.593 + 9.247 * weightNum + 3.098 * heightNum - 4.330 * ageNum;
    }
  };

  const calculateCalories = () => {
    const bmr = calculateBMR();
    const tdee = bmr * activityMultipliers[formData.activityLevel];

    let calorieAdjustment = 0;
    if (formData.goal === 'bulk') {
      calorieAdjustment = 500;
    } else if (formData.goal === 'cut') {
      calorieAdjustment = -500;
    }

    return tdee + calorieAdjustment;
  };

  const calculateMacronutrients = () => {
    const totalCalories = calculateCalories();

    const protein = (totalCalories * 0.30) / 4; // 30% of calories from protein
    const fats = (totalCalories * 0.25) / 9; // 25% of calories from fats
    const carbs = (totalCalories * 0.45) / 4; // 45% of calories from carbs

    return { protein, fats, carbs };
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // Last step, calculate results
      if (!formData.age || !formData.weight || !formData.height) {
        setError('Please fill in all required fields.');
        return;
      }

      setError(null);
      const calculatedResults = {
        totalCalories: calculateCalories(),
        macronutrients: calculateMacronutrients(),
      };
      setResults(calculatedResults);
    } else {
      // Go to next step
      setCurrentStep(currentStep + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const renderStepContent = () => {
    const step = steps[currentStep];
    return (
      <div className="question-container">
        <label>
          {step.label}
          {step.type === 'select' && step.options ? (
            <select name={step.field} value={formData[step.field]} onChange={handleChange}>
              {step.options.map(option => (
                <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
              ))}
            </select>
          ) : (
            <input
              type={step.type}
              name={step.field}
              value={formData[step.field]}
              onChange={handleChange}
              min="0"
              required
            />
          )}
        </label>
      </div>
    );
  };

  return (
    <div className="calorie-calculator-page">
      <div className='calcCalHeader'>{(
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Go to Home page
        </button>
      )}
      </div>
      <h2>Calorie and Macronutrient Calculator</h2>
      
      <div className={`questionnaire ${results ? 'hidden' : ''}`}>
        {renderStepContent()}
        {error && <div className="error-message">{error}</div>}
        <div className="button-container">
          <button onClick={handleNext}>{currentStep === steps.length - 1 ? 'Calculate' : 'Next'}</button>
        </div>
      </div>
      {results && (
        <div className="results-container">
          <h2>Results</h2>
          <div className="result-item">
            <span>Total Calories:</span>
            <span className="value">{results.totalCalories.toFixed(0)} kcal/day</span>
          </div>
          <div className="result-item">
            <span>Protein:</span>
            <span className="value">{results.macronutrients.protein.toFixed(0)} g/day</span>
          </div>
          <div className="result-item">
            <span>Fats:</span>
            <span className="value">{results.macronutrients.fats.toFixed(0)} g/day</span>
          </div>
          <div className="result-item">
            <span>Carbs:</span>
            <span className="value">{results.macronutrients.carbs.toFixed(0)} g/day</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculatorPage;
