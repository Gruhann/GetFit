// WorkoutPlansContainer.js

import { useNavigate } from 'react-router-dom';
import WorkoutPlan from './WorkoutPlan/WorkoutPlan.tsx';
import './WorkoutPlan/WorkoutPlan.css';
import './index.css'; // Import the CSS file for custom styles
import CalorieButton from './CalorieCalculator/CalorieButton.tsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import workoutPlans from "./WorkoutPlan/WorkoutPlans.tsx"; 
import Footer from './Footer/Footer.tsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import dietPlans from "./DietPlan/DietPlans.tsx";
import DietPlan from './DietPlan/DietPlan.tsx';

function WorkoutPlansContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides visible at one time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
    cssEase: 'ease-in-out',
    responsive:  [
      {
        breakpoint: 1024, // Large tablets and small desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile view
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Very small mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller mobile devices
          slidesToScroll: 1
        }
      }
    ]
  };

  const navigate = useNavigate();

  const handleShowCalculator = () => {
    navigate('/calculator');
  };

  const handleSignInRedirect = () => {
    navigate('/sign-up');
  };
  const handleSignin = () => {
    navigate('/sign-in');
  };

  return (
    <>
     <div className="intro-container">
  <SignedOut>
    <div className="header-container">
      <h1 className="centered-text">
        <span className="customtext">GetFit</span> <br/>with customised Workout Plans
      </h1>
      <h2 className="centered-text">
        Personalized workouts tailored to your goals. Track progress, stay motivated, and adapt plans.
      </h2>
      <p className="centered-text">Enjoy complementary nutrition guidance and connect with a supportive community.</p>
      <button className="get_started" onClick={handleSignInRedirect}>Get started</button>
      <p>If you already have an account login <u><b onClick={handleSignin}>here</b></u></p>
    </div>
    <br/>
    
    <h1>Steps to <strong className="highlighted-text">GetFit</strong></h1>
    <div className="fitness-steps-container">
      <div className="fitness-step-box">
        <strong className="highlighted-text">Set Goals & Assess:</strong> Define clear goals and assess current fitness level.
      </div>
      <div className="fitness-step-box">
        <strong className="highlighted-text">Workout & Diet:</strong> Create a balanced workout plan with cardio, strength training, and flexibility. Follow a nutrient-dense diet.
      </div>
      <div className="fitness-step-box">
        <strong className="highlighted-text">Track & Adjust:</strong> Monitor progress, adjust workouts and diet as needed.
      </div>
      <div className="fitness-step-box">
        <strong className="highlighted-text">Consistency & Recovery:</strong> Stay consistent, prioritize rest, and mental health.
      </div>
    </div>
  </SignedOut>
</div>

      <SignedIn>
      <div>
        <h2 className="centered-text"><span className='calcCal'>Calculate Calories and Macro nutrients</span></h2>
        <div className="calculator-button-container">
          <CalorieButton onClick={handleShowCalculator} />
        </div>
      </div>
      <div>
      <h3 className='header-container'>Explore Workout Plans</h3>
        <Slider {...settings} className="workout-cards">
          {workoutPlans.map(plan => (
            <div key={plan.id} className="slick-slide">
              <WorkoutPlan plan={plan} />
            </div>
          ))}
        </Slider>

        <h3 className='header-container'>Explore Diet Plans</h3>
        
        <Slider {...settings} className="workout-cards">
          {dietPlans.map(plan => (
            <div key={plan.id} className="slick-slide">
              <DietPlan plan={plan} />
            </div>
          ))}
        </Slider>
      </div>
      </SignedIn>
      
      
      <Footer
        email="GetFit@gmail.com"
        phoneNumber="99999-99999"
      />
    </>
  );
}

export default WorkoutPlansContainer;
