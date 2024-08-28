const workoutPlans = [
    {
      id: 1,
      title: 'Full Body Workout',
      description: 'Build strength and endurance with this comprehensive routine.',
      image: '/assets/Workouts/fullbody.jpg',
      instructions: [
        {
            step: 1,
            exercise: 'Squats',
            sets: 3,
            reps: "10-12",
            rest: "2-3 minutes",
            image: '/assets/Workouts/squats.jpg',
            description: 'Lower your body as if sitting in a chair, keeping your back straight and knees aligned with your toes.'
        },
    ],
    equipment: ['barbell or dumbbells', 'resistance bands'],
    benefits: ['Increased strength and muscle mass', 'Improved cardiovascular health'],
    targetMuscles: ['Legs', 'Core', 'Back', 'Chest', 'Shoulders', 'Arms'],
    safetyPrecautions: ['Avoid excessive strain on your knees', 'Maintain proper form to prevent injuries'],
    duration: 30-45 ,
    frequency: "2-3 time per week",
    },
    {
      id: 2,
      title: 'Cardio Workout',
      description: 'Improve cardiovascular health and burn calories.',
      image: '/assets/Workouts/cardio.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Running',
          sets: 3,
          reps: "30 - 45 minutes",
          rest: "1 - 2 minutes between sets",
          image: '/assets/Workouts/runnin.jpg',
          description: 'Run at a steady pace, gradually increasing your speed and intensity.'
        },
        {
          step: 2,
          exercise: 'Swimming',
          sets: 4,
          reps: "20 - 30 laps or 30 minutes",
          rest: "30 seconds between sets",
          image: '/assets/Workouts/swimming.jpg',
          description: 'Swim laps using various strokes, such as freestyle, breaststroke, or backstroke.'
        },
        {
          step: 3,
          exercise: 'Cycling',
          sets: 2,
          reps: "30 - 45 minutes",
          rest: "5 minutes between sets",
          image: '/assets/Workouts/cycling.jpg',
          description: 'Cycle at a moderate to high intensity, varying your resistance and speed.'
        },
      ],
      equipment: ['treadmill', 'exercise bike', 'swimming pool'],
      benefits: ['Improved cardiovascular health', 'Weight loss', 'Increased endurance'],
      targetMuscles: ['Legs', 'Heart', 'Lungs'],
      safetyPrecautions: ['Listen to your body and avoid overexertion', 'Stay hydrated'],
      duration: '60 - 90 minutes',
      frequency: '3-5 times per week',
    },
    {
      id: 3,
      title: 'Strength Training',
      description: 'Focus on building muscle and increasing strength.',
      image: '/assets/Workouts/strength.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Bench Press',
          sets: 3,
          reps: "8-12",
          rest: "1-2 minutes",
          image: '/assets/Workouts/bench-press.jpg',
          description: 'Lie on a bench and press a barbell or dumbbells up from your chest.'
        },
        {
          step: 2,
          exercise: 'Squats',
          sets: 3,
          reps: "8-12",
          rest: "1-2 minutes",
          image: '/assets/Workouts/squats.jpg',
          description: 'Lower your body as if sitting in a chair, keeping your back straight and knees aligned with your toes.'
        },
        {
          step: 3,
          exercise: 'Deadlifts',
          sets: 3,
          reps:" 8-12",
          rest: "2-3 minutes",
          image: '/assets/Workouts/deadlifts.jpg',
          description: 'Lift a barbell from the ground to standing, keeping your back straight and core engaged.'
        },
        {
          step: 4,
          exercise: 'Overhead Press',
          sets: 3,
          reps: "8-12",
          rest: "1-2 minutes",
          image: '/assets/Workouts/overhead-press.jpg',
          description: 'Press a barbell or dumbbells overhead from shoulder level.'
        },
        {
          step: 5,
          exercise: 'Rows',
          sets: 3,
          reps: "8-12",
          rest: "1-2 minute",
          image: '/assets/Workouts/rows.jpg',
          description: 'Row a barbell or dumbbells towards your chest, keeping your back straight.'
        },
      ],
      equipment: ['barbell', 'dumbbells', 'weight plates'],
      benefits: ['Increased muscle mass', 'Improved strength', 'Enhanced overall fitness'],
      targetMuscles: ['Chest', 'Back', 'Shoulders', 'Legs', 'Arms', 'Core'],
      safetyPrecautions: ['Use proper form to avoid injuries', 'Start with a weight you can comfortably lift and gradually increase it'],
      duration: "45-60 minutes",
      frequency: '3-4 times per week',
    },
    {
      id: 4,
      title: 'Flexibility Workout',
      description: 'Enhance your flexibility and range of motion.',
      image: '/assets/Workouts/flexibility.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Hamstring Stretch',
          sets: 2,
          reps: "30 seconds each leg",
          rest: '15 seconds between legs',
          image: '/assets/Workouts/hamstring-stretch.jpg',
          description: 'Sit on the floor and reach for your toes, keeping your legs straight.'
        },
        {
          step: 2,
          exercise: 'Quadriceps Stretch',
          sets: 2,
          reps: "30 seconds each leg",
          rest: "15 seconds between legs",
          image: '/assets/Workouts/quadriceps-stretch.jpg',
          description: 'Stand up and grab your ankle behind you, pulling your heel towards your buttocks.'
        },
        {
          step: 3,
          exercise: 'Calf Stretch',
          sets: 2,
          reps: "30 seconds each leg",
          rest: "15 seconds between legs",
          image: '/assets/Workouts/calf-stretch.jpg',
          description: 'Stand facing a wall and place one foot in front of the other. Lean forward until you feel a stretch in your calf.'
        },
        {
          step: 4,
          exercise: 'Hip Flexor Stretch',
          sets: 2,
          reps: "30 seconds each leg",
          rest: "15 seconds between legs",
          image: '/assets/Workouts/hip-flexor-stretch.jpg',
          description: 'Step forward with one leg and kneel down with the other. Lower your body until you feel a stretch in your hip flexor.'
        },
        {
          step: 5,
          exercise: 'Chest Stretch',
          sets: 2,
          reps: "30 seconds each arm",
          rest: "15 seconds between arms",
          image: '/assets/Workouts/chest-stretch.jpg',
          description: 'Stand in a doorway and place your arms against the doorframe. Step forward until you feel a stretch in your chest.'
        },
        {
          step: 6,
          exercise: 'Shoulder Stretch',
          sets: 2,
          reps:" 30 seconds each arm",
          rest: "15 seconds between arms",
          image: '/assets/Workouts/shoulder-stretch.jpg',
          description: 'Reach one arm across your body and use your other hand to gently pull it closer.'
        },
      ],
      equipment: ['none'],
      benefits: ['Increased flexibility', 'Improved range of motion', 'Reduced muscle tension'],
      targetMuscles: ['Hamstrings', 'Quadriceps', 'Calves', 'Hip flexors', 'Chest', 'Shoulders'],
      safetyPrecautions: ['Avoid overstretching and listen to your body', 'Hold each stretch for 30 seconds or longer'],
      duration: '15-20 minutes',
      frequency: '2-3 times per week',
    },
    {
      id: 5,
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Boost your metabolism and burn calories by HIIT.',
      image: '/assets/Workouts/hiit.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Burpees',
          sets: 4,
          reps: 10,
          rest: "30 seconds between sets",
          image: '/assets/Workouts/burpees.jpg',
          description: 'Perform a squat, push-up, jump, and clap your hands overhead.'
        },
        {
          step: 2,
          exercise: 'Mountain Climbers',
          sets: 3,
          reps: '30 seconds',
          rest: '30 seconds between sets',
          image: '/assets/Workouts/mountain-climbers.jpg',
          description: 'Start in a plank position and alternate bringing your knees towards your chest.'
        },
        {
          step: 3,
          exercise: 'Jump Squats',
          sets: 4,
          reps: "12",
          rest: '30 seconds between sets',
          image: '/assets/Workouts/jump-squats.jpg',
          description: 'Perform a squat and jump explosively into the air.'
        },
        {
          step: 4,
          exercise: 'Kettlebell Swings',
          sets: 3,
          reps:" 15",
          rest: '30 seconds between sets',
          image: '/assets/Workouts/kettlebell-swings.jpg',
          description: 'Swing a kettlebell from between your legs to overhead in a continuous motion.'
        },
        {
          step: 5,
          exercise: 'High Knees',
          sets: 2,
          reps: '30 seconds',
          rest: '30 seconds between sets',
          image: '/assets/Workouts/high-knees.jpg',
          description: 'Run in place, bringing your knees up as high as possible.'
        },
      ],
      equipment: ['kettlebell (optional)'],
      benefits: ['Increased metabolism', 'Improved cardiovascular health', 'Enhanced fat burning'],
      targetMuscles: ['Full body'],
      safetyPrecautions: ['Listen to your body and avoid overexertion', 'Use proper form to prevent injuries'],
      duration:' 20-30 minutes',
      frequency: "3-4 times per week",
    },
    {
      id: 6,
      title: 'Yoga',
      description: 'Improve flexibility and reduce stress with yoga.',
      image: '/assets/Workouts/yoga.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Mountain Pose (Tadasana)',
          sets: 1,
          reps: '1 minute',
          rest: '15 seconds',
          image: '/assets/Workouts/mountain-pose.jpg',
          description: 'Stand tall with your feet together and arms by your sides.'
        },
        {
          step: 2,
          exercise: 'Downward-Facing Dog (Adho Mukha Svanasana)',
          sets: 1,
          reps: "1 minute",
          rest:' 15 seconds',
          image: '/assets/Workouts/downward-facing-dog.jpg',
          description: 'Start on your hands and knees, then lift your hips up and back, forming an inverted V shape.'
        },
        {
          step: 3,
          exercise: 'Warrior II Pose (Virabhadrasana II)',
          sets: 2,
          reps: '30 seconds each side',
          rest: '15 seconds between sides',
          image: '/assets/Workouts/warrior-ii-pose.jpg',
          description: 'Step your right foot forward and turn your left foot 90 degrees. Extend your arms out to the sides.'
        },
        {
          step: 4,
          exercise: 'Tree Pose (Vrksasana)',
          sets: 2,
          reps: '30 seconds each side',
          rest:' 15 seconds between sides',
          image: '/assets/Workouts/tree-pose.jpg',
          description: 'Balance on one leg and place the sole of your other foot on your inner thigh.'
        },
        {
          step: 5,
          exercise: 'Warrior III Pose (Virabhadrasana III)',
          sets: 2,
          reps:" 30 seconds each side",
          rest: "15 seconds between sides",
          image: '/assets/Workouts/warrior-iii-pose.jpg',
          description: 'Step your right foot forward and lean forward, extending your arms out in front of you.'
        },
        {
          step: 6,
          exercise: "Child's Pose (Balasana)",
          sets: 1,
          reps: '1 minute',
          rest: '15 seconds',
          image: '/assets/Workouts/childs-pose.jpg',
          description: 'Sit on your knees, lower your torso forward, and rest your forehead on the floor.'
        },
      ],
      equipment: ['yoga mat'],
      benefits: ['Improved flexibility', 'Reduced stress', 'Increased balance', 'Enhanced mindfulness'],
      targetMuscles: ['Full body'],
      safetyPrecautions: ['Listen to your body and avoid overstretching'],
      duration:' 30-45 minutes',
      frequency: '2-3 times per week',
    },
    {
      id: 7,
      title: 'Pilates',
      description: 'Strengthen core muscles and improve posture with Pilates.',
      image: '/assets/Workouts/pilates.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Hundred',
          sets: 2,
          reps:' 100 pumps',
          rest: '30 seconds between sets',
          image: '/assets/Workouts/pilates-hundred.jpg',
          description: 'Lie on your back with your knees bent and feet flat. Pump your arms up and down while lifting your head and shoulders off the mat.'
        },
        {
          step: 2,
          exercise: 'Single Leg Stretch',
          sets: 2,
          reps:' 10 on each leg',
          rest: '30 seconds between sets',
          image: '/assets/Workouts/pilates-single-leg-stretch.jpg',
          description: 'Lie on your back with your knees bent and hands on your thighs. Straighten one leg and reach for the opposite hand.'
        },
        {
          step: 3,
          exercise: 'Roll-Up',
          sets: 2,
          reps: "10",
          rest: '30 seconds between sets',
          image: '/assets/Workouts/pilates-roll-up.jpg',
          description: 'Lie on your back with your legs straight and arms overhead. Curl your upper body up and reach for your toes.'
        },
        {
          step: 4,
          exercise: 'Swan Dive',
          sets: 2,
          reps: "10",
          rest:' 30 seconds between sets',
          image: '/assets/Workouts/pilates-swan-dive.jpg',
          description: 'Lie on your stomach with your arms extended overhead. Lift your chest and upper body off the mat.'
        },
        {
          step: 5,
          exercise: 'Side Plank',
          sets: 2,
          reps: '30 seconds each side',
          rest: "30 seconds between sides",
          image: '/assets/Workouts/pilates-side-plank.jpg',
          description: 'Lie on your side with your forearm on the ground. Lift your hips and extend your legs.'
        },
      ],
      equipment: ['yoga mat'],
      benefits: ['Strengthened core muscles', 'Improved posture', 'Enhanced flexibility'],
      targetMuscles: ['Core', 'Back', 'Shoulders', 'Legs'],
      safetyPrecautions: ['Listen to your body and avoid overexertion', 'Use proper form to prevent injuries'],
      duration: '30-45 minutes',
      frequency: '2-3 times per week',
    },
    {
      id: 8,
      title: 'Bodyweight Exercises',
      description: 'Achieve fitness goals using only your body weight.',
      image: '/assets/Workouts/bodyweight.jpg',
      instructions: [
        {
          step: 1,
          exercise: 'Push-Ups',
          sets: 3,
          reps: "10-12",
          rest:' 1-2 minutes',
          image: '/assets/Workouts/push-ups.jpg',
          description: 'Start in a plank position and lower your body until your chest touches the ground.'
        },
        {
          step: 2,
          exercise: 'Squats',
          sets: 3,
          reps: "15-20",
          rest: '1-2 minutes',
          image: '/assets/Workouts/squats.jpg',
          description: 'Lower your body as if sitting in a chair, keeping your back straight and knees aligned with your toes.'
        },
        {
          step: 3,
          exercise: 'Lunges',
          sets: 3,
          reps: '10-12 per leg',
          rest: '1-2 minutes',
          image: '/assets/Workouts/lunges.jpg',
          description: 'Step forward with one leg and lower your body until both knees are bent at a 90-degree angle.'
        },
        {
          step: 4,
          exercise: 'Crunches',
          sets: 3,
          reps: "15-20",
          rest: '1-2 minutes',
          image: '/assets/Workouts/crunches.jpg',
          description: 'Lie on your back with your knees bent. Place your hands behind your head and lift your upper body.'
        },
        {
          step: 5,
          exercise: 'Plank',
          sets: 3,
          reps:" 30 seconds",
          rest: "30 seconds between sets",
          image: '/assets/Workouts/plank.jpg',
          description: 'Hold a plank position with your forearms on the ground and your body in a straight line.'
        },
      ],
      equipment: ['none'],
      benefits: ['Increased strength and muscle tone', 'Improved balance and coordination'],
      targetMuscles: ['Full body'],
      safetyPrecautions: ['Use proper form to prevent injuries', 'Start with a manageable number of repetitions and gradually increase'],
      duration:" 30-45 minutes",
      frequency: "3-4 times per week",
    },
    {
      id: 9,
      title: 'Running Program',
      description: 'Build stamina and cardiovascular health with running.',
      image: '/assets/Workouts/running.jpg',
      instructions: [
        {
          week: 1,
          day: 1,
          exercise: 'Run',
          distance: "30 minutes",
          intensity: 'Easy pace'
        },
        {
          week: 1,
          day: 3,
          exercise: 'Run',
          distance:" 30 minutes",
          intensity: 'Easy pace'
        },
        {
          week: 2,
          day: 1,
          exercise: 'Run',
          distance: '35 minutes',
          intensity: 'Easy pace'
        },
        {
          week: 2,
          day: 3,
          exercise: 'Run',
          distance: '35 minutes',
          intensity: 'Easy pace'
        },
        // Continue adding weeks and days with gradually increasing distances and intensities
        {
          week: 12,
          day: 1,
          exercise: 'Run',
          distance:' 60 minutes',
          intensity: 'Interval training (e.g., 30 minutes at a moderate pace, 30 minutes at a fast pace)'
        },
      ],
      equipment: ['running shoes'],
      benefits: ['Improved cardiovascular health', 'Increased endurance', 'Weight loss'],
      targetMuscles: ['Legs', 'Heart', 'Lungs'],
      safetyPrecautions: ['Listen to your body and avoid overexertion', 'Warm up and cool down properly'],
      duration:' 30-60 minutes per run',
      frequency: '3-5 times per week',
    },
    {
      id: 10,
      title: 'CrossFit',
      description: 'Engage in high-intensity functional movements for a complete workout.',
      image: '/assets/Workouts/crossfit.jpg',
      instructions: [
        {
          workout: 'Metcon 1: The Girl',
          movements: [
            {
              exercise: 'Air Squats',
              reps: "50"
            },
            {
              exercise: 'Pull-Ups',
              reps: "30"
            },
            {
              exercise: 'Push-Ups',
              reps: "30"
            },
            {
              exercise: 'Sit-Ups',
              reps: "30"
            }
          ],
          rounds: 3,
          rest:' 60 seconds between rounds'
        },
        {
          workout: 'Metcon 2: Grace',
          movements: [
            {
              exercise: 'Clean and Jerk',
              weight:" 315 lbs (or adjust based on your weight and experience)",
              reps: "30"
            }
          ],
          time:" 1 minute"
        },
        {
          workout: 'Metcon 3: Cindy',
          movements: [
            {
              exercise: 'Pull-Ups',
              reps: "10"
            },
            {
              exercise: 'Push-Ups',
              reps: "20"
            },
            {
              exercise: 'Squats',
              reps: "30"
            }
          ],
          time: "20 minutes as many rounds as possible (AMRAP)"
        },
        {
          workout: 'Metcon 4: Diane',
          movements: [
            {
              exercise: 'Deadlifts',
              weight:" 225 lbs (or adjust based on your weight and experience)",
              reps: "21"
            },
            {
              exercise: 'Handstand Push-Ups',
              reps: "15"
            },
            {
              exercise: 'Kettlebell Swings',
              weight:" 53 lbs (or adjust based on your weight and experience)",
              reps: "15"
            }
          ],
          rounds: 3,
          rest: "60 seconds between rounds"
        },
        {
          workout: 'Metcon 5: Fran',
          movements: [
            {
              exercise: 'Pull-Ups',
              reps: "21"
            },
            {
              exercise: 'Thrusters',
              weight: "95 lbs (or adjust based on your weight and experience)",
              reps: "21"
            }
          ],
          time: "21 minutes as many rounds as possible (AMRAP)"
        }
      ],
      equipment: ['barbell', 'dumbbells', 'kettlebell', 'pull-up bar', 'box'],
      benefits: ['Increased strength, power, and endurance', 'Improved functional fitness', 'Weight loss'],
      targetMuscles: ['Full body'],
      safetyPrecautions: ['Listen to your body and avoid overexertion', 'Use proper form to prevent injuries'],
      duration: "30-45 minutes per workout",
      frequency: '3-4 times per week',
    }
  ];

    
export default workoutPlans;