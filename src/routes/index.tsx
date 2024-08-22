// WorkoutPlansContainer.js

import { useNavigate } from 'react-router-dom';
import WorkoutPlan from './WorkoutPlan/WorkoutPlan';
import './WorkoutPlan/WorkoutPlan.css';
import './index.css'; // Import the CSS file for custom styles
import CalorieButton from './CalorieCalculator/CalorieButton';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import workoutPlans from "./WorkoutPlan/WorkoutPlans.tsx"; 
import Footer from './Footer/Footer.tsx';


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
          slidesToShow: 1, // Show 2 slides on mobile view
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


  return (
    <>
      <div className="intro-container">
      <h1 className="centered-text">
  <span className="custom-text">GetFit</span> <br/>with customised Workout Plans
</h1>
        <h2 className="centered-text">
        Personalized workouts tailored to your goals. Track progress, stay motivated, and adapt plans.
        </h2>
        <p className="centered-text">Enjoy complementary nutrition guidance and connect with a supportive community.</p>
        <h3 className='left-text'>Explore workouts</h3>
        <Slider {...settings} className="workout-cards">
          {workoutPlans.map(plan => (
            <div key={plan.id}>
              <WorkoutPlan plan={plan} />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <h2 className="centered-text" ><span className='calcCal'>Calculate Calories and Macro nutrients</span></h2>
        <div className="calculator-button-container">
        <CalorieButton onClick={handleShowCalculator} />
        </div>
      </div>
      <div>
      {/* Your website content here */}
      <Footer
        email="GetFit@gmail.com"
        phoneNumber="99999-99999"
        instagramLink="https://www.instagram.com/yourbusiness"
        twitterLink="https://www.twitter.com/yourbusiness"
      />
    </div>
    </>
  );
}

export default WorkoutPlansContainer;