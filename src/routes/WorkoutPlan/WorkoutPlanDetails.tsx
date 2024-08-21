// import { useParams } from "react-router-dom";

// function WorkoutPlanDetails() {
//   const { title } = useParams<{ title: string }>();

//   // Fetch or find the workout plan by ID here
//   // For example, you might fetch data from an API or a global state

//   return (
//     <div>
//       <h1> {title}</h1>
//       {/* Display the details of the workout plan here */}
//     </div>
//   );
// }

// export default WorkoutPlanDetails;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface WorkoutPlan {
  id: number;
  title: string;
  description: string;
  image: string;
}


const workoutPlans : WorkoutPlan[] = [
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
      <h1>{plan.title}</h1>
      {/* <img src={plan.image} alt={plan.title} /> */}
      <p>{plan.description}</p>
    </div>
  );
}

export default WorkoutPlanDetails;
