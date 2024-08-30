const workoutPlans= [
  {
    id: 1,
    title: "Full Body",
    description: "Afull-body workout plan that includes strength training, active recovery, and rest days.",
    image: "assets/Workouts/fullbody.jpg",
    days: [
      {
        day: 1,
        title: "Full-Body Strength",
        warmUp: {
          description: "Light Cardio and Dynamic Stretches",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Bodyweight Squats",
            instructions: "Stand with feet shoulder-width apart. Lower your body by bending your knees and hips until your thighs are parallel to the ground. Push through your heels to return to the starting position.",
            tips: "Keep your chest up and knees aligned with your toes. Avoid letting your knees cave in."
          },
          {
            exercise: "Push-Ups (or Knee Push-Ups if needed)",
            instructions: "Place your hands slightly wider than shoulder-width apart on the floor. Lower your body until your chest nearly touches the ground. Push back up to the starting position.",
            tips: "Keep your body in a straight line from head to heels. If standard push-ups are too challenging, perform them on your knees."
          },
          {
            exercise: "Dumbbell Deadlifts (light weight)",
            instructions: "Stand with feet hip-width apart, holding dumbbells in front of your thighs. Hinge at the hips and lower the dumbbells towards the ground, keeping your back flat. Return to the starting position.",
            tips: "Keep the dumbbells close to your legs throughout the movement. Engage your glutes and hamstrings as you lift."
          },
          {
            exercise: "Dumbbell Rows",
            instructions: "Bend at the hips and knees, keeping your back flat. Hold a dumbbell in one hand and row it towards your hip, keeping your elbow close to your body. Lower the dumbbell back to the starting position.",
            tips: "Keep your torso stable and avoid twisting. Perform the exercise with a controlled motion."
          },
          {
            exercise: "Dumbbell Shoulder Press",
            instructions: "Sit or stand with dumbbells at shoulder height. Press the dumbbells overhead until your arms are fully extended. Lower back to shoulder height.",
            tips: "Keep your core engaged to support your lower back. Avoid locking your elbows at the top."
          },
          {
            exercise: "Basic Plank",
            instructions: "Place your forearms on the floor, elbows under shoulders, and extend your legs behind you. Hold the position while keeping your body in a straight line from head to heels.",
            tips: "Engage your core and avoid letting your hips sag. Breathe steadily while holding the position."
          }
        ],
        coolDown: {
          description: "Static Stretching and Gentle Foam Rolling",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Active Recovery",
        warmUp: {
          description: "Light Cardio",
          duration: "20-30 minutes"
        },
        workout: [
          {
            exercise: "Gentle Stretching or Yoga",
            instructions: "Focus on relaxation and stretching to promote flexibility.",
            tips: "Hold each stretch for 15-30 seconds. Breathe deeply and relax."
          }
        ],
        coolDown: {
          description: "Relaxation and Flexibility",
          duration: "15 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 3,
        title: "Full-Body Strength",
        warmUp: {
          description: "Light Cardio and Dynamic Stretches",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Goblet Squats (holding a dumbbell)",
            instructions: "Hold a dumbbell close to your chest with both hands. Lower into a squat position, keeping the dumbbell close to your body. Push through your heels to stand back up.",
            tips: "Maintain an upright torso and push your knees outwards. Keep your weight evenly distributed."
          },
          {
            exercise: "Dumbbell Bench Press (flat or incline)",
            instructions: "Lie on a bench with dumbbells in each hand, elbows bent at 90 degrees. Press the dumbbells upward until your arms are fully extended. Lower them back to starting position.",
            tips: "Keep your feet flat on the ground and maintain a slight arch in your lower back."
          },
          {
            exercise: "Dumbbell Lunges",
            instructions: "Stand with dumbbells at your sides. Step forward with one leg and lower your body until both knees are bent at 90 degrees. Push back to the starting position and switch legs.",
            tips: "Keep your torso upright and avoid letting your front knee extend past your toes."
          },
          {
            exercise: "Dumbbell Bent Over Rows",
            instructions: "Bend at the hips with dumbbells in each hand. Pull the dumbbells towards your hips, keeping your elbows close to your body. Lower them back down.",
            tips: "Maintain a flat back and avoid using momentum. Focus on squeezing your shoulder blades together."
          },
          {
            exercise: "Standing Dumbbell Shoulder Press",
            instructions: "Stand with dumbbells at shoulder height. Press them overhead until your arms are fully extended. Lower back to the starting position.",
            tips: "Keep your core tight and avoid arching your back. Move the weights in a controlled manner."
          },
          {
            exercise: "Bicycle Crunches",
            instructions: "Lie on your back with hands behind your head and legs raised. Alternate bringing one elbow to the opposite knee while extending the other leg.",
            tips: "Keep the movement slow and controlled. Engage your core and avoid pulling on your neck."
          }
        ],
        coolDown: {
          description: "Static Stretching and Gentle Foam Rolling",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Light Activity",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Gentle Stretching",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Full-Body Strength",
        warmUp: {
          description: "Light Cardio and Dynamic Stretches",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Dumbbell Step-Ups (onto a bench or step)",
            instructions: "Place one foot on a bench or step and push through the heel to lift your body up. Step back down and switch legs.",
            tips: "Keep your torso upright and use your leg muscles rather than momentum."
          },
          {
            exercise: "Incline Push-Ups (hands on an elevated surface)",
            instructions: "Place your hands on an elevated surface and perform push-ups as described earlier.",
            tips: "Keep your body straight and your core engaged. Adjust the height of the surface to match your ability."
          },
          {
            exercise: "Dumbbell Deadlifts (focus on form)",
            instructions: "Perform as described earlier, focusing on maintaining proper form and technique.",
            tips: "Engage your core and keep the movement controlled."
          },
          {
            exercise: "One-Arm Dumbbell Rows",
            instructions: "Support your body on a bench with one hand and knee. Row the dumbbell towards your hip with the other arm. Switch sides after completing reps.",
            tips: "Avoid twisting your torso and focus on using your back muscles."
          },
          {
            exercise: "Seated Dumbbell Shoulder Press",
            instructions: "Sit with back support and press dumbbells overhead as described earlier.",
            tips: "Keep your back straight and avoid leaning back."
          },
          {
            exercise: "Leg Raises",
            instructions: "Lie on your back with legs straight. Lift your legs to a 90-degree angle and lower them slowly.",
            tips: "Keep your lower back pressed against the floor. Engage your core throughout the movement."
          }
        ],
        coolDown: {
          description: "Static Stretching and Gentle Foam Rolling",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Active Recovery",
        warmUp: {
          description: "Light Cardio",
          duration: "20-30 minutes"
        },
        workout: [
          {
            exercise: "Mobility Work",
            instructions: "Gentle stretching or yoga to improve flexibility and movement.",
            tips: "Focus on relaxation and slow movements. Hold each stretch for 15-30 seconds."
          }
        ],
        coolDown: {
          description: "Relaxation and Flexibility",
          duration: "15 minutes"
        },
        activity: "Light Activity"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },
  {
    id: 2,
    title: "Cardio Blast",
    description: "An intense cardio workout plan designed to improve cardiovascular fitness and burn calories.",
    image: "assets/Workouts/cardio.jpg",
    days: [
      {
        day: 1,
        title: "HIIT Session",
        warmUp: {
          description: "Dynamic Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Jumping Jacks",
            instructions: "Stand with feet together and jump while spreading your legs and raising your arms. Return to starting position.",
            tips: "Maintain a steady pace and keep your core engaged."
          },
          {
            exercise: "Burpees",
            instructions: "Begin in a standing position, squat down, kick your feet back into a plank, perform a push-up, return to squat position, and jump up.",
            tips: "Perform the movement quickly for maximum cardio benefit."
          },
          {
            exercise: "High Knees",
            instructions: "Run in place while lifting your knees as high as possible, pumping your arms to increase intensity.",
            tips: "Engage your core and maintain a fast pace."
          },
          {
            exercise: "Mountain Climbers",
            instructions: "Start in a plank position and alternate bringing one knee towards your chest while keeping the other leg extended.",
            tips: "Keep your hips stable and move quickly."
          },
          {
            exercise: "Skipping Rope",
            instructions: "Jump over a rope that’s being spun beneath your feet. Maintain a steady rhythm.",
            tips: "Use a light bounce and keep your wrists relaxed."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Light Activity or Full Rest"
      },
      {
        day: 2,
        title: "Steady-State Cardio",
        warmUp: {
          description: "Light Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Jogging or Brisk Walking",
            instructions: "Maintain a consistent, moderate pace. Focus on steady breathing and good posture.",
            tips: "Keep your steps light and your arms swinging naturally."
          },
          {
            exercise: "Cycling",
            instructions: "Ride a stationary or regular bike at a moderate pace. Adjust resistance for a steady workout.",
            tips: "Keep a consistent cadence and engage your core."
          },
          {
            exercise: "Elliptical Trainer",
            instructions: "Use the elliptical machine with moderate resistance. Maintain a steady pace throughout the session.",
            tips: "Use the handlebars for added stability and adjust the resistance as needed."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 3,
        title: "Cardio Intervals",
        warmUp: {
          description: "Dynamic Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Sprint Intervals",
            instructions: "Alternate between sprinting for 30 seconds and walking or jogging for 60 seconds.",
            tips: "Push yourself during the sprints and recover fully during the rest periods."
          },
          {
            exercise: "Rowing Machine Intervals",
            instructions: "Row at high intensity for 500 meters, followed by 1 minute of slow rowing.",
            tips: "Maintain a powerful stroke during high intensity and a steady pace during recovery."
          },
          {
            exercise: "Battle Ropes",
            instructions: "Perform 30 seconds of intense waves or slams with the battle ropes, followed by 1 minute of rest.",
            tips: "Keep your movements powerful and controlled."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Light Activity",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Gentle Stretching",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Cardio Challenge",
        warmUp: {
          description: "Dynamic Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Treadmill Incline Walk",
            instructions: "Walk on the treadmill at a high incline for 20 minutes at a steady pace.",
            tips: "Keep your posture upright and use the incline to increase intensity."
          },
          {
            exercise: "Stair Climbing",
            instructions: "Use the stair climber machine or stairs for 15 minutes at a moderate pace.",
            tips: "Focus on maintaining a steady rhythm and proper form."
          },
          {
            exercise: "Jump Rope",
            instructions: "Jump rope for 2 minutes, followed by 1 minute of rest. Repeat for 5 rounds.",
            tips: "Keep the rope speed consistent and focus on light, quick jumps."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Active Recovery",
        warmUp: {
          description: "Light Cardio",
          duration: "20-30 minutes"
        },
        workout: [
          {
            exercise: "Gentle Yoga or Stretching",
            instructions: "Focus on relaxation and flexibility. Perform various gentle stretches or yoga poses.",
            tips: "Hold each stretch for 15-30 seconds and breathe deeply."
          }
        ],
        coolDown: {
          description: "Relaxation and Flexibility",
          duration: "15 minutes"
        },
        activity: "Light Activity"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },  {
    id: 3,
    title: "CrossFit Challenge",
    description: "A high-intensity CrossFit workout plan combining weightlifting, metabolic conditioning, and gymnastics.",
    image: "assets/Workouts/crossfit.jpg",
    days: [
      {
        day: 1,
        title: "WOD: Full Body Blast",
        warmUp: {
          description: "Dynamic Stretching and Light Cardio",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "AMRAP (As Many Rounds As Possible) - 15 minutes",
            instructions: "Complete as many rounds as possible of the following exercises within 15 minutes: 10 Thrusters, 10 Pull-Ups, 10 Box Jumps.",
            tips: "Maintain a steady pace and focus on form."
          },
          {
            exercise: "Barbell Deadlifts",
            instructions: "Perform 4 sets of 8 reps with moderate to heavy weight. Focus on maintaining proper form and technique.",
            tips: "Engage your core and keep your back flat."
          },
          {
            exercise: "Double-Unders",
            instructions: "Perform 3 rounds of 50 double-unders with a jump rope.",
            tips: "Use your wrists to spin the rope and maintain a steady rhythm."
          }
        ],
        coolDown: {
          description: "Static Stretching and Foam Rolling",
          duration: "10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 2,
        title: "Strength and Skill",
        warmUp: {
          description: "Dynamic Warm-Up and Mobility Work",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Back Squats",
            instructions: "Perform 5 sets of 5 reps with heavy weight. Focus on depth and proper technique.",
            tips: "Keep your chest up and core engaged."
          },
          {
            exercise: "Handstand Push-Ups",
            instructions: "Complete 3 sets of 8-12 reps. Use a wall for support if needed.",
            tips: "Maintain a straight body and engage your shoulders."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 3,
        title: "WOD: MetCon Madness",
        warmUp: {
          description: "Dynamic Warm-Up and Mobility Work",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "For Time: 3 Rounds",
            instructions: "Complete 3 rounds of 400m Run, 21 Kettlebell Swings, 12 Burpees.",
            tips: "Push hard during the runs and maintain a steady pace."
          },
          {
            exercise: "Box Jumps",
            instructions: "Perform 4 sets of 12 reps with a high box. Focus on explosive power.",
            tips: "Land softly and use your arms for momentum."
          }
        ],
        coolDown: {
          description: "Static Stretching and Foam Rolling",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "WOD: Hero Workout",
        warmUp: {
          description: "Dynamic Warm-Up and Mobility Work",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Hero WOD: Murph",
            instructions: "Complete 1 mile run, 100 Pull-Ups, 200 Push-Ups, 300 Air Squats, and another 1 mile run.",
            tips: "Break the workout into manageable sets and stay hydrated."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Skill and Mobility",
        warmUp: {
          description: "Dynamic Warm-Up and Mobility Work",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Olympic Weightlifting Techniques",
            instructions: "Practice snatches and clean & jerks with lighter weights. Focus on technique.",
            tips: "Use a coach or video for form correction."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Light Activity"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },

  // Flexibility Plan (id: 4)
  {
    id: 4,
    title: "Flexibility Focus",
    description: "A comprehensive flexibility and mobility workout plan designed to enhance range of motion and reduce muscle tension.",
    image: "assets/Workouts/flexibility.jpg",
    days: [
      {
        day: 1,
        title: "Full-Body Stretching",
        warmUp: {
          description: "Light Cardio and Dynamic Stretching",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Hamstring Stretch",
            instructions: "Sit on the floor with one leg extended and reach towards your toes. Hold for 30 seconds and switch legs.",
            tips: "Keep your back straight and avoid bouncing."
          },
          {
            exercise: "Quad Stretch",
            instructions: "Stand on one leg and pull the opposite foot towards your glutes. Hold for 30 seconds and switch legs.",
            tips: "Keep your knees close together and avoid arching your back."
          },
          {
            exercise: "Hip Flexor Stretch",
            instructions: "Kneel on one knee with the other foot in front. Push your hips forward gently. Hold for 30 seconds and switch sides.",
            tips: "Engage your core and keep your back straight."
          },
          {
            exercise: "Shoulder Stretch",
            instructions: "Extend one arm across your body and use the opposite arm to pull it closer. Hold for 30 seconds and switch arms.",
            tips: "Keep your shoulder relaxed and avoid rotating your torso."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Light Activity or Full Rest"
      },
      {
        day: 2,
        title: "Yoga Flow",
        warmUp: {
          description: "Gentle Yoga Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Downward Dog to Upward Dog",
            instructions: "Alternate between Downward Dog and Upward Dog poses, holding each for 20-30 seconds.",
            tips: "Focus on lengthening your spine and breathing deeply."
          },
          {
            exercise: "Warrior Sequence",
            instructions: "Perform Warrior I, Warrior II, and Warrior III poses, holding each for 20-30 seconds.",
            tips: "Engage your core and maintain balance."
          },
          {
            exercise: "Seated Forward Bend",
            instructions: "Sit with legs extended and reach towards your toes. Hold for 30 seconds.",
            tips: "Avoid rounding your back and focus on relaxing into the stretch."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 3,
        title: "Dynamic Flexibility",
        warmUp: {
          description: "Dynamic Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Leg Swings",
            instructions: "Stand on one leg and swing the other leg forward and backward. Perform 10-15 swings per leg.",
            tips: "Keep your movements controlled and avoid excessive swinging."
          },
          {
            exercise: "Arm Circles",
            instructions: "Extend your arms to the sides and make small circles, gradually increasing the size. Perform for 30 seconds each direction.",
            tips: "Keep your shoulders relaxed and avoid swinging."
          },
          {
            exercise: "Torso Twists",
            instructions: "Stand with feet shoulder-width apart and twist your torso from side to side. Perform for 30 seconds.",
            tips: "Engage your core and keep movements smooth."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Upper Body Flexibility",
        warmUp: {
          description: "Gentle Cardio and Dynamic Stretching",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Tricep Stretch",
            instructions: "Reach one arm behind your head and use the opposite hand to gently push the elbow. Hold for 30 seconds and switch arms.",
            tips: "Avoid overstretching and keep your shoulders relaxed."
          },
          {
            exercise: "Chest Opener",
            instructions: "Stand with feet shoulder-width apart and clasp your hands behind your back. Lift your arms and open your chest. Hold for 30 seconds.",
            tips: "Keep your shoulders down and avoid arching your back."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Lower Body Flexibility",
        warmUp: {
          description: "Gentle Cardio and Dynamic Stretching",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Butterfly Stretch",
            instructions: "Sit with feet together and gently press your knees towards the floor. Hold for 30 seconds.",
            tips: "Keep your back straight and avoid bouncing."
          },
          {
            exercise: "Figure-Four Stretch",
            instructions: "Lie on your back with one ankle crossed over the opposite knee. Pull the bottom leg towards your chest. Hold for 30 seconds and switch legs.",
            tips: "Keep your movements controlled and avoid straining."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  }, {
    id: 5,
    title: "Bodyweight Conditioning",
    description: "A bodyweight workout plan focusing on strength, endurance, and flexibility without the need for equipment.",
    image: "assets/Workouts/bodyweight.jpg",
    days: [
      {
        day: 1,
        title: "Bodyweight Circuit",
        warmUp: {
          description: "Dynamic Stretching and Light Cardio",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Push-Ups",
            instructions: "Perform 3 sets of 15 reps. Keep your body in a straight line from head to heels.",
            tips: "Engage your core and avoid letting your hips sag."
          },
          {
            exercise: "Bodyweight Squats",
            instructions: "Perform 3 sets of 20 reps. Lower your body by bending your knees and hips.",
            tips: "Push through your heels and keep your chest up."
          },
          {
            exercise: "Lunges",
            instructions: "Perform 3 sets of 12 reps per leg. Step forward and lower your body until both knees are bent at 90 degrees.",
            tips: "Maintain an upright torso and avoid letting your front knee go past your toes."
          },
          {
            exercise: "Plank",
            instructions: "Hold for 60 seconds. Keep your body in a straight line from head to heels.",
            tips: "Engage your core and avoid letting your hips sag."
          },
          {
            exercise: "Burpees",
            instructions: "Perform 3 sets of 10 reps. Include a squat, jump, and push-up.",
            tips: "Move quickly but maintain good form."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 2,
        title: "Upper Body Focus",
        warmUp: {
          description: "Dynamic Warm-Up and Arm Circles",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Tricep Dips (using a chair)",
            instructions: "Perform 3 sets of 15 reps. Keep your back close to the chair and lower your body until your arms are at a 90-degree angle.",
            tips: "Keep your elbows close to your body and avoid locking your elbows."
          },
          {
            exercise: "Incline Push-Ups (hands elevated)",
            instructions: "Perform 3 sets of 12 reps with hands on an elevated surface.",
            tips: "Maintain a straight body and engage your core."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 3,
        title: "Lower Body Focus",
        warmUp: {
          description: "Dynamic Warm-Up and Leg Swings",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Bulgarian Split Squats",
            instructions: "Perform 3 sets of 12 reps per leg using a chair for support.",
            tips: "Keep your torso upright and focus on controlled movements."
          },
          {
            exercise: "Glute Bridges",
            instructions: "Perform 3 sets of 15 reps. Lie on your back with knees bent and lift your hips towards the ceiling.",
            tips: "Squeeze your glutes at the top of the movement."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Core Strength",
        warmUp: {
          description: "Dynamic Warm-Up and Core Activation",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Mountain Climbers",
            instructions: "Perform 3 sets of 20 reps per leg.",
            tips: "Maintain a steady pace and keep your core engaged."
          },
          {
            exercise: "Russian Twists",
            instructions: "Perform 3 sets of 20 reps (10 per side). Sit on the floor with feet elevated and twist your torso from side to side.",
            tips: "Keep your movements controlled and avoid straining your back."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 6,
        title: "Full Body Challenge",
        warmUp: {
          description: "Dynamic Warm-Up and Cardio",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Circuit: 3 Rounds",
            instructions: "Perform 15 reps each of Push-Ups, Squats, Lunges, Plank (45 seconds), and Burpees.",
            tips: "Move quickly between exercises and keep rest to a minimum."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },

  // HIIT Plan (id: 6)
  {
    id: 6,
    title: "HIIT Blast",
    description: "A high-intensity interval training plan designed to maximize calorie burn and improve cardiovascular fitness.",
    image: "assets/Workouts/hiit.jpg",
    days: [
      {
        day: 1,
        title: "HIIT Full Body",
        warmUp: {
          description: "Dynamic Stretching and Light Cardio",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Tabata Intervals: 20s Work, 10s Rest (8 Rounds)",
            instructions: "Perform 20 seconds of intense exercise followed by 10 seconds of rest for 8 rounds each of: Jump Squats, Burpees, Mountain Climbers, and High Knees.",
            tips: "Push hard during the work intervals and use the rest periods to recover."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Core HIIT",
        warmUp: {
          description: "Dynamic Warm-Up and Core Activation",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "HIIT Circuit: 30s Work, 15s Rest (3 Rounds)",
            instructions: "Perform 30 seconds of each exercise with 15 seconds of rest between: Plank Jacks, Bicycle Crunches, Leg Raises, and Russian Twists.",
            tips: "Keep your movements controlled and focus on form."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 3,
        title: "Lower Body HIIT",
        warmUp: {
          description: "Dynamic Warm-Up and Leg Activation",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "HIIT Circuit: 30s Work, 15s Rest (3 Rounds)",
            instructions: "Perform 30 seconds of each exercise with 15 seconds of rest between: Jump Lunges, Squat Jumps, High Knees, and Glute Bridges.",
            tips: "Focus on explosive movements and maintaining good form."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Upper Body HIIT",
        warmUp: {
          description: "Dynamic Warm-Up and Arm Circles",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "HIIT Circuit: 30s Work, 15s Rest (3 Rounds)",
            instructions: "Perform 30 seconds of each exercise with 15 seconds of rest between: Push-Ups, Tricep Dips, Mountain Climbers, and Plank Shoulder Taps.",
            tips: "Keep your core engaged and avoid letting your form slip."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Full Body HIIT",
        warmUp: {
          description: "Dynamic Warm-Up and Cardio",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "HIIT Circuit: 45s Work, 15s Rest (3 Rounds)",
            instructions: "Perform 45 seconds of each exercise with 15 seconds of rest between: Burpees, Jump Squats, Plank Jacks, and Alternating Lunges.",
            tips: "Push yourself during the work intervals and use the rest periods to recover."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },

  // Pilates Plan (id: 7)
  {
    id: 7,
    title: "Pilates Core",
    description: "A Pilates plan focusing on core strength, flexibility, and overall body alignment.",
    image: "assets/Workouts/pilates.jpg",
    days: [
      {
        day: 1,
        title: "Core Strengthening",
        warmUp: {
          description: "Gentle Cardio and Core Activation",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Hundred",
            instructions: "Perform 3 sets of 100 pulses. Lie on your back with legs raised and head lifted, pumping your arms up and down.",
            tips: "Keep your core engaged and avoid letting your lower back arch."
          },
          {
            exercise: "Roll-Up",
            instructions: "Perform 3 sets of 12 reps. Lie on your back with arms overhead and roll up to a seated position, then roll back down.",
            tips: "Move slowly and focus on articulating your spine."
          },
          {
            exercise: "Single Leg Circles",
            instructions: "Perform 3 sets of 10 circles per leg. Lie on your back with one leg extended and draw circles in the air.",
            tips: "Keep your hips stable and avoid letting your leg move too far from your body."
          },
          {
            exercise: "Plank with Leg Lift",
            instructions: "Hold a plank position and lift one leg at a time, performing 3 sets of 10 lifts per leg.",
            tips: "Maintain a straight body and avoid rocking your hips."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Flexibility Focus",
        warmUp: {
          description: "Gentle Cardio and Dynamic Stretching",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Saw",
            instructions: "Perform 3 sets of 10 reps per side. Sit with legs extended and reach one hand towards the opposite foot, alternating sides.",
            tips: "Keep your spine elongated and avoid rounding your back."
          },
          {
            exercise: "Spine Stretch Forward",
            instructions: "Perform 3 sets of 10 reps. Sit with legs extended and reach forward towards your toes.",
            tips: "Move slowly and keep your back flat."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Deep Breathing",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 3,
        title: "Full Body Pilates",
        warmUp: {
          description: "Gentle Cardio and Full Body Stretch",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Double Leg Stretch",
            instructions: "Perform 3 sets of 12 reps. Lie on your back with legs extended and arms reaching towards your feet, then pull them in.",
            tips: "Keep your core engaged and avoid arching your back."
          },
          {
            exercise: "Teaser",
            instructions: "Perform 3 sets of 10 reps. Lie on your back, lift your torso and legs to form a V shape, then lower back down.",
            tips: "Focus on rolling up and down slowly."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Advanced Core",
        warmUp: {
          description: "Gentle Cardio and Core Activation",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Criss-Cross",
            instructions: "Perform 3 sets of 12 reps per side. Lie on your back with hands behind your head and alternate bringing elbows to opposite knees.",
            tips: "Keep your movements controlled and avoid pulling on your neck."
          },
          {
            exercise: "Side Plank",
            instructions: "Hold each side for 30 seconds. Stack your feet and lift your hips off the ground.",
            tips: "Keep your body in a straight line and avoid letting your hips sag."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Pilates Flow",
        warmUp: {
          description: "Gentle Cardio and Flowing Movements",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Pilates Flow: 3 Rounds",
            instructions: "Perform 3 rounds of: Roll-Up, Saw, Spine Stretch Forward, and Teaser.",
            tips: "Focus on smooth, controlled movements and breathing."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "5-10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },
  {
    id: 8,
    title: "Running Endurance",
    description: "A running plan designed to improve endurance and speed with structured running workouts and recovery days.",
    image: "assets/Workouts/running.jpg",
    days: [
      {
        day: 1,
        title: "Long Run",
        warmUp: {
          description: "Gentle Jog and Dynamic Stretching",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Long Run",
            instructions: "Run at a steady pace for 60-90 minutes. Focus on maintaining a consistent pace throughout.",
            tips: "Stay hydrated and listen to your body. Pace yourself to avoid fatigue."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Speed Work",
        warmUp: {
          description: "Dynamic Warm-Up and Strides",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Interval Training",
            instructions: "Perform 6-8 x 400m sprints at high intensity with 2 minutes rest between intervals.",
            tips: "Run at a pace faster than your race pace and focus on recovery between sprints."
          }
        ],
        coolDown: {
          description: "Gentle Jog and Static Stretching",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 3,
        title: "Recovery Run",
        warmUp: {
          description: "Gentle Jog and Light Stretching",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Recovery Run",
            instructions: "Run at an easy pace for 30-45 minutes. Focus on relaxed breathing and form.",
            tips: "Keep the pace slow to aid recovery and avoid any strenuous effort."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Hill Repeats",
        warmUp: {
          description: "Dynamic Warm-Up and Hill Strides",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Hill Repeats",
            instructions: "Run up a hill for 30 seconds at high intensity, then jog or walk back down. Repeat 8-10 times.",
            tips: "Focus on driving your knees up and pumping your arms as you run up."
          }
        ],
        coolDown: {
          description: "Gentle Jog and Static Stretching",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 5,
        title: "Tempo Run",
        warmUp: {
          description: "Dynamic Warm-Up and Easy Jog",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Tempo Run",
            instructions: "Run at a comfortably hard pace for 20-30 minutes, maintaining a pace just below race pace.",
            tips: "Focus on maintaining a consistent effort and proper form."
          }
        ],
        coolDown: {
          description: "Static Stretching and Deep Breathing",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Easy Run or Cross-Training",
        warmUp: {
          description: "Gentle Warm-Up",
          duration: "5-10 minutes"
        },
        workout: [
          {
            exercise: "Easy Run or Cross-Training",
            instructions: "Run at an easy pace for 30 minutes or engage in a cross-training activity like cycling or swimming.",
            tips: "Keep the intensity low and focus on active recovery."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },

  // Strength Plan (id: 9)
  {
    id: 9,
    title: "Strength Training",
    description: "A comprehensive strength training plan focusing on building muscle and increasing overall strength.",
    image: "assets/Workouts/strength.jpg",
    days: [
      {
        day: 1,
        title: "Upper Body Strength",
        warmUp: {
          description: "Dynamic Stretching and Light Cardio",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Bench Press",
            instructions: "Perform 4 sets of 8-12 reps. Use a weight that challenges you but allows for proper form.",
            tips: "Keep your feet flat on the floor and avoid arching your back excessively."
          },
          {
            exercise: "Dumbbell Rows",
            instructions: "Perform 4 sets of 10-12 reps per side. Pull the dumbbell towards your hip while keeping your back flat.",
            tips: "Avoid rotating your torso and focus on engaging your back muscles."
          },
          {
            exercise: "Shoulder Press",
            instructions: "Perform 4 sets of 8-12 reps. Press the dumbbells overhead while keeping your core engaged.",
            tips: "Avoid locking your elbows and keep your movements controlled."
          },
          {
            exercise: "Bicep Curls",
            instructions: "Perform 4 sets of 12-15 reps. Curl the weights towards your shoulders, keeping your elbows stationary.",
            tips: "Focus on squeezing your biceps at the top of the movement."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Lower Body Strength",
        warmUp: {
          description: "Dynamic Warm-Up and Leg Activation",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Squats",
            instructions: "Perform 4 sets of 8-12 reps. Keep your chest up and push through your heels.",
            tips: "Ensure your knees track over your toes and maintain a neutral spine."
          },
          {
            exercise: "Deadlifts",
            instructions: "Perform 4 sets of 8-12 reps. Lift with your legs and hips, keeping your back flat.",
            tips: "Avoid rounding your back and use your legs to drive the movement."
          },
          {
            exercise: "Lunges",
            instructions: "Perform 4 sets of 10-12 reps per leg. Step forward and lower your body until both knees are bent at 90 degrees.",
            tips: "Keep your torso upright and avoid letting your front knee go past your toes."
          },
          {
            exercise: "Calf Raises",
            instructions: "Perform 4 sets of 15-20 reps. Raise your heels off the ground and squeeze your calves at the top.",
            tips: "Move slowly and avoid bouncing."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 3,
        title: "Full Body Strength",
        warmUp: {
          description: "Dynamic Warm-Up and Cardio",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Circuit: 3 Rounds",
            instructions: "Perform 10 reps each of: Squats, Bench Press, Deadlifts, Shoulder Press, and Dumbbell Rows.",
            tips: "Move quickly between exercises and maintain good form."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Upper Body Strength (Alternate Exercises)",
        warmUp: {
          description: "Dynamic Stretching and Light Cardio",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Incline Bench Press",
            instructions: "Perform 4 sets of 8-12 reps. Use an incline bench to target upper chest muscles.",
            tips: "Keep your back flat against the bench and avoid flaring your elbows."
          },
          {
            exercise: "Pull-Ups",
            instructions: "Perform 4 sets of as many reps as possible. Use an overhand grip to engage your back and biceps.",
            tips: "Focus on pulling your chest up towards the bar."
          },
          {
            exercise: "Dumbbell Lateral Raises",
            instructions: "Perform 4 sets of 12-15 reps. Lift the dumbbells to shoulder height while keeping your arms straight.",
            tips: "Avoid using momentum and control the movement."
          },
          {
            exercise: "Tricep Dips",
            instructions: "Perform 4 sets of 12-15 reps. Lower your body until your arms are at 90 degrees, then push back up.",
            tips: "Keep your elbows close to your body."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Lower Body Strength (Alternate Exercises)",
        warmUp: {
          description: "Dynamic Warm-Up and Leg Activation",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Front Squats",
            instructions: "Perform 4 sets of 8-12 reps. Hold the barbell in front of your shoulders and squat down.",
            tips: "Keep your chest up and avoid leaning forward."
          },
          {
            exercise: "Romanian Deadlifts",
            instructions: "Perform 4 sets of 8-12 reps. Keep your legs straight and hinge at the hips.",
            tips: "Maintain a flat back and use your hamstrings to lift the weight."
          },
          {
            exercise: "Step-Ups",
            instructions: "Perform 4 sets of 10-12 reps per leg. Step onto a bench or platform with one leg and drive through your heel.",
            tips: "Keep your torso upright and avoid leaning forward."
          },
          {
            exercise: "Seated Calf Raises",
            instructions: "Perform 4 sets of 15-20 reps. Sit on a bench with weights on your knees and raise your heels.",
            tips: "Move slowly and focus on squeezing your calves."
          }
        ],
        coolDown: {
          description: "Static Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  },

  // Yoga Plan (id: 10)
  {
    id: 10,
    title: "Yoga for Flexibility",
    description: "A yoga plan focusing on increasing flexibility, balance, and relaxation through various poses and flows.",
    image: "assets/Workouts/yoga.jpg",
    days: [
      {
        day: 1,
        title: "Flowing Vinyasa",
        warmUp: {
          description: "Gentle Warm-Up and Breathing Exercises",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Sun Salutations",
            instructions: "Perform 5-10 rounds of Sun Salutations, moving through each pose smoothly and synchronizing with your breath.",
            tips: "Focus on flowing movements and maintain a steady breath."
          },
          {
            exercise: "Warrior Sequence",
            instructions: "Perform 3 rounds of Warrior I, Warrior II, and Warrior III poses on each side.",
            tips: "Engage your core and keep your hips squared."
          }
        ],
        coolDown: {
          description: "Deep Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 2,
        title: "Balance and Alignment",
        warmUp: {
          description: "Gentle Warm-Up and Joint Mobility",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Tree Pose",
            instructions: "Hold the Tree Pose for 30-60 seconds on each side. Focus on balancing on one leg and keeping your hips aligned.",
            tips: "Find a focal point to help with balance and avoid collapsing your supporting leg."
          },
          {
            exercise: "Extended Side Angle",
            instructions: "Hold the Extended Side Angle Pose for 30-60 seconds on each side. Reach your arm over your head and engage your core.",
            tips: "Maintain a long line from your fingertips to your back heel."
          }
        ],
        coolDown: {
          description: "Deep Stretching and Breathing",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 3,
        title: "Full Body Stretch",
        warmUp: {
          description: "Gentle Warm-Up and Stretching",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Full Body Stretch Flow",
            instructions: "Move through a series of stretches including Downward Dog, Pigeon Pose, and Forward Fold, holding each pose for 30-60 seconds.",
            tips: "Breathe deeply into each stretch and avoid pushing yourself too hard."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 4,
        title: "Rest or Active Recovery",
        warmUp: {
          description: "Gentle Stretching",
          duration: "5-10 minutes"
        },
        workout: [],
        coolDown: {
          description: "Full Rest or Light Activity",
          duration: "As needed"
        },
        activity: "Full Rest or Light Activity"
      },
      {
        day: 5,
        title: "Flexibility Focus",
        warmUp: {
          description: "Gentle Warm-Up and Stretching",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Hip Openers",
            instructions: "Perform a series of hip-opening poses including Butterfly Pose and Lizard Pose, holding each for 30-60 seconds.",
            tips: "Keep your movements slow and controlled, and breathe deeply into each stretch."
          },
          {
            exercise: "Backbends",
            instructions: "Perform poses such as Cobra Pose and Bridge Pose, holding each for 30-60 seconds.",
            tips: "Engage your core and avoid overextending your back."
          }
        ],
        coolDown: {
          description: "Deep Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 6,
        title: "Core and Balance",
        warmUp: {
          description: "Gentle Warm-Up and Core Activation",
          duration: "10 minutes"
        },
        workout: [
          {
            exercise: "Boat Pose",
            instructions: "Hold Boat Pose for 30-60 seconds, focusing on engaging your core and keeping your back straight.",
            tips: "Avoid letting your lower back round and keep your breathing steady."
          },
          {
            exercise: "Plank Variations",
            instructions: "Perform a series of plank variations including Forearm Plank and Side Plank, holding each for 30 seconds.",
            tips: "Maintain a straight line from head to heels and avoid sagging your hips."
          }
        ],
        coolDown: {
          description: "Gentle Stretching and Relaxation",
          duration: "10 minutes"
        },
        activity: "Full Rest"
      },
      {
        day: 7,
        title: "Rest",
        warmUp: {description:"", duration: ""},
        workout: [
          {exercise: "",
          instructions: "",
          tips: ""}],
        coolDown: {description:"", duration: ""},
        activity: "Full Rest"
      }
    ]
  }
];

export default workoutPlans;