// WorkoutPlansContainer.js

import { useNavigate } from 'react-router-dom';
import WorkoutPlan from './WorkoutPlan';
import './WorkoutPlan.css';
import './index.css'; // Import the CSS file for custom styles
import CalorieButton from './CalorieButton';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  },
  {
    id: 6,
    title: 'Yoga',
    description: 'Improve flexibility and reduce stress with yoga.',
    image: '/assets/yoga.jpg',
  },
  {
    id: 7,
    title: 'Pilates',
    description: 'Strengthen core muscles and improve posture with Pilates.',
    image: '/assets/pilates.jpg',
  },
  {
    id: 8,
    title: 'Bodyweight Exercises',
    description: 'Achieve fitness goals using only your body weight.',
    image: '/assets/bodyweight.jpg',
  },
  {
    id: 9,
    title: 'Running Program',
    description: 'Build stamina and cardiovascular health with running.',
    image: '/assets/running.jpg',
  },
  {
    id: 10,
    title: 'CrossFit',
    description: 'Engage in high-intensity functional movements for a complete workout.',
    image: '/assets/crossfit.jpg',
  },
];

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
    navigate('/calorie-calculator');
  };


  return (
    <>
      <div className="intro-container">
      <h1 className="centered-text">
  <span className="custom-text">GetFit</span> with customised Workout Plans
</h1>
        <h2 className="centered-text">
          Experience personalized fitness with expertly 
          designed workout plans tailored to your goals and fitness level.<br/>
          Track your progress, stay motivated, and adapt plans to your lifestyle.
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
    </>
  );
}

export default WorkoutPlansContainer;