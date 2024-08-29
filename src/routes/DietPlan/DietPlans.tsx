const dietPlans = [
  {
    id: 1,
    title: 'Low Carb Diet',
    description: 'A diet focused on reducing carbohydrate intake.',
    image: '/assets/Diets/low-carb.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Egg Bhurji',
            quantity: '2 eggs',
            preparation: 'Scramble eggs with chopped onions, tomatoes, and green chilies in a pan.',
            macronutrients: { protein: '14g', fat: '10g', carbs: '3g' }
          },
          morningSnack: {
            meal: 'Almonds',
            quantity: '10 almonds',
            preparation: 'Eat raw or lightly toasted.',
            macronutrients: { protein: '2g', fat: '9g', carbs: '2g' }
          },
          lunch: {
            meal: 'Grilled Chicken Salad',
            quantity: '150g chicken breast, 1 cup mixed greens, 1/4 avocado',
            preparation: 'Grill chicken, slice, and mix with greens and avocado.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Cucumber Slices with Hummus',
            quantity: '1 cup cucumber, 2 tbsp hummus',
            preparation: 'Slice cucumber and dip in hummus.',
            macronutrients: { protein: '3g', fat: '6g', carbs: '8g' }
          },
          dinner: {
            meal: 'Baked Salmon with Asparagus',
            quantity: '150g salmon, 1 cup asparagus',
            preparation: 'Bake salmon and asparagus with olive oil and herbs.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '5g' }
          }
        },
        averageMacronutrients: { protein: '74g', fat: '45g', carbs: '28g' },
        tips: 'If you find it hard to stick to low-carb, focus on reducing carbs gradually and include high-fiber vegetables to stay full.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'South Indian Omelette',
            quantity: '2 eggs, 1/4 cup chopped tomatoes, 1/4 cup chopped onions',
            preparation: 'Beat eggs and mix with tomatoes and onions, cook in a pan.',
            macronutrients: { protein: '14g', fat: '10g', carbs: '4g' }
          },
          morningSnack: {
            meal: 'Greek Yogurt with Chia Seeds',
            quantity: '1/2 cup yogurt, 1 tbsp chia seeds',
            preparation: 'Mix chia seeds into yogurt.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '8g' }
          },
          lunch: {
            meal: 'Tandoori Chicken with Mixed Vegetables',
            quantity: '150g chicken, 1 cup mixed vegetables',
            preparation: 'Marinate chicken in tandoori spices and grill. Serve with steamed vegetables.',
            macronutrients: { protein: '30g', fat: '10g', carbs: '12g' }
          },
          eveSnack: {
            meal: 'Celery Sticks with Peanut Butter',
            quantity: '1 cup celery, 2 tbsp peanut butter',
            preparation: 'Dip celery sticks into peanut butter.',
            macronutrients: { protein: '5g', fat: '12g', carbs: '7g' }
          },
          dinner: {
            meal: 'Mutton Curry with Cauliflower Rice',
            quantity: '150g mutton, 1 cup cauliflower rice',
            preparation: 'Cook mutton with spices and serve with cauliflower rice.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '8g' }
          }
        },
        averageMacronutrients: { protein: '84g', fat: '57g', carbs: '39g' },
        tips: 'To make it easier, prepare meals in advance and keep snacks ready. Focus on high-protein and low-carb foods to stay on track.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Paneer Bhurji',
            quantity: '100g paneer',
            preparation: 'Cook crumbled paneer with onions, tomatoes, and spices.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'Boiled Eggs',
            quantity: '2 eggs',
            preparation: 'Boil eggs and eat.',
            macronutrients: { protein: '14g', fat: '10g', carbs: '1g' }
          },
          lunch: {
            meal: 'Spicy Grilled Fish',
            quantity: '150g fish',
            preparation: 'Marinate fish with spices and grill.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '2g' }
          },
          eveSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup',
            preparation: 'Eat raw or roasted.',
            macronutrients: { protein: '4g', fat: '12g', carbs: '5g' }
          },
          dinner: {
            meal: 'Chicken Stew with Spinach',
            quantity: '150g chicken, 1 cup spinach',
            preparation: 'Cook chicken with spices and add spinach.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '88g', fat: '57g', carbs: '23g' },
        tips: 'In case of cravings, opt for high-fat snacks like nuts or cheese. Drinking plenty of water can also help curb hunger.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Moong Dal Chilla',
            quantity: '2 chillas',
            preparation: 'Make batter with soaked moong dal and spices, cook on a griddle.',
            macronutrients: { protein: '12g', fat: '8g', carbs: '15g' }
          },
          morningSnack: {
            meal: 'Coconut Water',
            quantity: '1 cup',
            preparation: 'Drink fresh coconut water.',
            macronutrients: { protein: '1g', fat: '0g', carbs: '9g' }
          },
          lunch: {
            meal: 'Chicken Salad with Avocado',
            quantity: '150g chicken, 1/2 avocado, 1 cup greens',
            preparation: 'Mix grilled chicken with avocado and greens.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Avocado Slices',
            quantity: '1 avocado',
            preparation: 'Slice and eat plain or with a pinch of salt.',
            macronutrients: { protein: '3g', fat: '22g', carbs: '12g' }
          },
          dinner: {
            meal: 'Eggplant Stir-Fry',
            quantity: '1 cup eggplant',
            preparation: 'Stir-fry eggplant with spices and olive oil.',
            macronutrients: { protein: '2g', fat: '10g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '59g', fat: '41g', carbs: '61g' },
        tips: 'Incorporate a variety of high-fiber vegetables and use spices to keep meals flavorful without adding carbs.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Methi Thepla',
            quantity: '2 theplas',
            preparation: 'Make dough with besan and methi, cook on a griddle.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '20g' }
          },
          morningSnack: {
            meal: 'Pumpkin Seeds',
            quantity: '1/4 cup',
            preparation: 'Eat raw or roasted.',
            macronutrients: { protein: '7g', fat: '14g', carbs: '6g' }
          },
          lunch: {
            meal: 'Beef Kheema with Green Beans',
            quantity: '150g beef, 1 cup green beans',
            preparation: 'Cook beef with spices and mix with green beans.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Cheese Slices',
            quantity: '2 slices',
            preparation: 'Eat cheese slices.',
            macronutrients: { protein: '10g', fat: '10g', carbs: '0g' }
          },
          dinner: {
            meal: 'Paneer Tikka',
            quantity: '150g paneer',
            preparation: 'Marinate paneer with spices and grill.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '5g' }
          }
        },
        averageMacronutrients: { protein: '84g', fat: '49g', carbs: '41g' },
        tips: 'For variety, experiment with different spices and herbs to keep meals interesting while maintaining low carbs.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'South Indian Idli',
            quantity: '2 idlis',
            preparation: 'Steam idlis made from fermented rice and urad dal batter.',
            macronutrients: { protein: '6g', fat: '2g', carbs: '16g' }
          },
          morningSnack: {
            meal: 'Boiled Peanuts',
            quantity: '1/2 cup',
            preparation: 'Boil peanuts and eat.',
            macronutrients: { protein: '10g', fat: '12g', carbs: '15g' }
          },
          lunch: {
            meal: 'Chicken Curry with Cauliflower Rice',
            quantity: '150g chicken, 1 cup cauliflower rice',
            preparation: 'Cook chicken with spices and serve with cauliflower rice.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '8g' }
          },
          eveSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup',
            preparation: 'Eat raw or lightly toasted.',
            macronutrients: { protein: '4g', fat: '12g', carbs: '5g' }
          },
          dinner: {
            meal: 'Spicy Prawn Stir-Fry',
            quantity: '150g prawns, 1 cup mixed vegetables',
            preparation: 'Stir-fry prawns with spices and vegetables.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '75g', fat: '56g', carbs: '54g' },
        tips: 'When incorporating traditional foods, focus on low-carb substitutes and balanced portions.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Chia Pudding',
            quantity: '1/2 cup chia seeds, 1 cup almond milk',
            preparation: 'Mix chia seeds with almond milk and let sit overnight.',
            macronutrients: { protein: '8g', fat: '10g', carbs: '20g' }
          },
          morningSnack: {
            meal: 'Fruit Smoothie',
            quantity: '1 cup mixed fruit, 1/2 cup spinach',
            preparation: 'Blend fruit and spinach with water or almond milk.',
            macronutrients: { protein: '3g', fat: '1g', carbs: '25g' }
          },
          lunch: {
            meal: 'Quinoa and Black Bean Salad',
            quantity: '1 cup quinoa, 1/2 cup black beans, 1/2 cup corn',
            preparation: 'Mix cooked quinoa with black beans and corn.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Roasted Chickpeas',
            quantity: '1/2 cup chickpeas',
            preparation: 'Roast chickpeas with olive oil and spices.',
            macronutrients: { protein: '7g', fat: '4g', carbs: '20g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers',
            quantity: '2 bell peppers, 1 cup rice, 1/2 cup beans',
            preparation: 'Stuff bell peppers with rice and beans, bake until tender.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '43g', fat: '25g', carbs: '135g' },
        tips: 'If maintaining a vegan diet is hard, ensure adequate protein intake from legumes and consider a B12 supplement.'
      }
    ]
  },
  {
    id: 2,
    title: 'DASH Diet',
    description: 'A diet designed to prevent and manage high blood pressure through balanced eating.',
    image: '/assets/Diets/dash.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Oatmeal with Fresh Berries',
            quantity: '1 cup oatmeal, 1/2 cup mixed berries',
            preparation: 'Cook oatmeal as per instructions and top with fresh berries.',
            macronutrients: { protein: '6g', fat: '2g', carbs: '35g' }
          },
          morningSnack: {
            meal: 'Apple Slices with Almond Butter',
            quantity: '1 apple, 2 tbsp almond butter',
            preparation: 'Slice apple and dip in almond butter.',
            macronutrients: { protein: '4g', fat: '8g', carbs: '25g' }
          },
          lunch: {
            meal: 'Grilled Chicken Breast with Quinoa Salad',
            quantity: '150g chicken breast, 1 cup quinoa salad',
            preparation: 'Grill chicken and serve with quinoa salad (quinoa, mixed vegetables, lemon juice).',
            macronutrients: { protein: '30g', fat: '6g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Greek Yogurt with Honey and Walnuts',
            quantity: '1 cup Greek yogurt, 1 tbsp honey, 1/4 cup walnuts',
            preparation: 'Mix honey and walnuts into Greek yogurt.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '20g' }
          },
          dinner: {
            meal: 'Baked Cod with Steamed Broccoli',
            quantity: '150g cod, 1 cup broccoli',
            preparation: 'Bake cod with herbs and serve with steamed broccoli.',
            macronutrients: { protein: '25g', fat: '3g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '77g', fat: '29g', carbs: '135g' },
        tips: 'Focus on low-sodium, high-potassium foods, and integrate a variety of fruits and vegetables to support heart health.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Whole Grain Toast with Avocado and Tomato',
            quantity: '2 slices toast, 1/2 avocado, 1 tomato',
            preparation: 'Top whole grain toast with mashed avocado and sliced tomato.',
            macronutrients: { protein: '8g', fat: '12g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Carrot Sticks with Hummus',
            quantity: '1 cup carrot sticks, 3 tbsp hummus',
            preparation: 'Dip carrot sticks into hummus.',
            macronutrients: { protein: '3g', fat: '7g', carbs: '15g' }
          },
          lunch: {
            meal: 'Turkey Wrap with Spinach and Avocado',
            quantity: '1 whole wheat wrap, 100g turkey, 1/2 avocado, 1 cup spinach',
            preparation: 'Wrap turkey, avocado, and spinach in whole wheat wrap.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '35g' }
          },
          eveSnack: {
            meal: 'Mixed Berries Smoothie',
            quantity: '1 cup mixed berries, 1/2 cup almond milk',
            preparation: 'Blend mixed berries with almond milk.',
            macronutrients: { protein: '2g', fat: '3g', carbs: '20g' }
          },
          dinner: {
            meal: 'Stir-Fried Tofu with Mixed Vegetables',
            quantity: '150g tofu, 1 cup mixed vegetables',
            preparation: 'Stir-fry tofu with vegetables in olive oil and soy sauce.',
            macronutrients: { protein: '20g', fat: '10g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '58g', fat: '42g', carbs: '120g' },
        tips: 'Limit saturated fat and added sugars, and incorporate a variety of lean proteins and whole grains into your meals.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Greek Yogurt with Fresh Fruit and Nuts',
            quantity: '1 cup Greek yogurt, 1/2 cup mixed fruit, 1/4 cup nuts',
            preparation: 'Mix fruit and nuts into Greek yogurt.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Banana with Peanut Butter',
            quantity: '1 banana, 1 tbsp peanut butter',
            preparation: 'Slice banana and spread peanut butter on top.',
            macronutrients: { protein: '4g', fat: '8g', carbs: '30g' }
          },
          lunch: {
            meal: 'Salmon Salad with Lemon Vinaigrette',
            quantity: '150g salmon, 1 cup mixed greens, 1/4 cup cherry tomatoes',
            preparation: 'Top greens with grilled salmon, cherry tomatoes, and lemon vinaigrette.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Cottage Cheese with Pineapple',
            quantity: '1/2 cup cottage cheese, 1/2 cup pineapple chunks',
            preparation: 'Mix pineapple chunks into cottage cheese.',
            macronutrients: { protein: '10g', fat: '4g', carbs: '20g' }
          },
          dinner: {
            meal: 'Chicken and Vegetable Stir-Fry',
            quantity: '150g chicken, 1 cup mixed vegetables',
            preparation: 'Stir-fry chicken and vegetables in olive oil and soy sauce.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '84g', fat: '47g', carbs: '115g' },
        tips: 'Opt for lean proteins and fiber-rich vegetables to manage blood pressure effectively.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding with Berries',
            quantity: '1/4 cup chia seeds, 1 cup almond milk, 1/2 cup mixed berries',
            preparation: 'Mix chia seeds with almond milk and refrigerate overnight. Top with berries.',
            macronutrients: { protein: '8g', fat: '12g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Almonds and Fresh Fruit',
            quantity: '1/4 cup almonds, 1 apple',
            preparation: 'Eat almonds with apple slices.',
            macronutrients: { protein: '6g', fat: '12g', carbs: '25g' }
          },
          lunch: {
            meal: 'Lentil Soup with Whole Wheat Bread',
            quantity: '1 cup lentil soup, 1 slice whole wheat bread',
            preparation: 'Serve lentil soup with a slice of whole wheat bread.',
            macronutrients: { protein: '18g', fat: '5g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Greek Yogurt with Granola',
            quantity: '1 cup Greek yogurt, 1/4 cup granola',
            preparation: 'Top Greek yogurt with granola.',
            macronutrients: { protein: '15g', fat: '8g', carbs: '30g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers',
            quantity: '2 bell peppers, 1 cup brown rice, 1/2 cup black beans',
            preparation: 'Stuff bell peppers with rice and beans, bake until tender.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '72g', fat: '42g', carbs: '145g' },
        tips: 'Include legumes and whole grains to increase fiber intake and improve heart health.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Smoothie Bowl',
            quantity: '1 cup smoothie base (banana, spinach, almond milk), 1/4 cup granola',
            preparation: 'Blend base ingredients and top with granola.',
            macronutrients: { protein: '6g', fat: '5g', carbs: '40g' }
          },
          morningSnack: {
            meal: 'Fresh Fruit Salad',
            quantity: '1 cup mixed fruit',
            preparation: 'Mix a variety of fresh fruits.',
            macronutrients: { protein: '2g', fat: '0g', carbs: '30g' }
          },
          lunch: {
            meal: 'Quinoa and Chickpea Salad',
            quantity: '1 cup quinoa, 1/2 cup chickpeas, mixed vegetables',
            preparation: 'Mix quinoa, chickpeas, and vegetables with a light vinaigrette.',
            macronutrients: { protein: '12g', fat: '7g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Trail Mix',
            quantity: '1/4 cup trail mix',
            preparation: 'Combine nuts, seeds, and dried fruit.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '15g' }
          },
          dinner: {
            meal: 'Baked Chicken Thighs with Roasted Vegetables',
            quantity: '150g chicken thighs, 1 cup roasted vegetables',
            preparation: 'Bake chicken thighs and serve with roasted vegetables.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '50g', fat: '37g', carbs: '145g' },
        tips: 'Incorporate a variety of fruits and vegetables, and opt for whole grains to support overall health.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Whole Grain Pancakes with Blueberries',
            quantity: '2 pancakes, 1/2 cup blueberries',
            preparation: 'Top whole grain pancakes with fresh blueberries.',
            macronutrients: { protein: '8g', fat: '5g', carbs: '40g' }
          },
          morningSnack: {
            meal: 'Edamame',
            quantity: '1 cup edamame',
            preparation: 'Boil edamame and season lightly.',
            macronutrients: { protein: '17g', fat: '8g', carbs: '15g' }
          },
          lunch: {
            meal: 'Turkey and Avocado Salad',
            quantity: '100g turkey, 1/2 avocado, mixed greens',
            preparation: 'Combine turkey, avocado, and mixed greens with a light dressing.',
            macronutrients: { protein: '25g', fat: '12g', carbs: '20g' }
          },
          eveSnack: {
            meal: 'Apple with Almonds',
            quantity: '1 apple, 1/4 cup almonds',
            preparation: 'Eat almonds with apple slices.',
            macronutrients: { protein: '4g', fat: '10g', carbs: '25g' }
          },
          dinner: {
            meal: 'Grilled Shrimp with Asparagus',
            quantity: '150g shrimp, 1 cup asparagus',
            preparation: 'Grill shrimp and serve with steamed asparagus.',
            macronutrients: { protein: '25g', fat: '2g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '75g', fat: '35g', carbs: '120g' },
        tips: 'Focus on lean proteins and include a variety of colorful vegetables to ensure a range of nutrients.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Breakfast Burrito',
            quantity: '1 whole wheat tortilla, scrambled eggs, black beans, salsa',
            preparation: 'Fill tortilla with scrambled eggs, beans, and salsa.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup mixed nuts',
            preparation: 'Eat mixed nuts.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '10g' }
          },
          lunch: {
            meal: 'Chicken Caesar Salad',
            quantity: '150g chicken, 1 cup romaine lettuce, 1 tbsp Caesar dressing',
            preparation: 'Toss lettuce with chicken and Caesar dressing.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '20g' }
          },
          eveSnack: {
            meal: 'Cucumber Slices with Hummus',
            quantity: '1 cup cucumber slices, 3 tbsp hummus',
            preparation: 'Dip cucumber slices into hummus.',
            macronutrients: { protein: '4g', fat: '5g', carbs: '10g' }
          },
          dinner: {
            meal: 'Beef and Vegetable Stir-Fry',
            quantity: '150g beef, 1 cup mixed vegetables',
            preparation: 'Stir-fry beef and vegetables with a light sauce.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '79g', fat: '40g', carbs: '90g' },
        tips: 'Choose whole, minimally processed foods and balance protein, fat, and carbohydrates throughout the day.'
      }
    ]
  },
  {
    id: 3,
    title: 'Intermittent Fasting Diet',
    description: 'A diet plan based on the 16/8 intermittent fasting method, promoting weight management and metabolic health.',
    image: '/assets/Diets/intermittent-fasting.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: "Avocado Toast with Eggs",
            quantity: "2 slices whole grain toast, 1/2 avocado, 2 eggs",
            preparation: "Mash avocado and spread on toast. Top with scrambled or poached eggs.",
            macronutrients: {
              protein: "14g",
              fat: "22g",
              carbs: "30g"
            }
          },
          morningSnack: {
            meal: "Greek Yogurt with Almonds",
            quantity: "1 cup Greek yogurt, 1/4 cup almonds",
            preparation: "Mix almonds into Greek yogurt.",
            macronutrients: {
              protein: "15g",
              fat: "12g",
              carbs: "15g"
            }
          },
          lunch: {
            meal: "Chicken Salad with Quinoa",
            quantity: "150g chicken breast, 1 cup mixed greens, 1/2 cup quinoa",
            preparation: "Combine grilled chicken, mixed greens, and quinoa. Dress with olive oil and lemon.",
            macronutrients: {
              protein: "30g",
              fat: "10g",
              carbs: "35g"
            }
          },
          eveSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          dinner: {
            meal: "Baked Salmon with Asparagus",
            quantity: "150g salmon, 1 cup asparagus",
            preparation: "Bake salmon and serve with steamed asparagus.",
            macronutrients: {
              protein: "25g",
              fat: "15g",
              carbs: "10g"
            }
          }
        },
        averageMacronutrients: {
          protein: "84g",
          fat: "59g",
          carbs: "90g"
        },
        tips: "Stay hydrated during fasting hours. Focus on nutrient-dense meals during eating windows."
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: "Smoothie with Spinach and Berries",
            quantity: "1 cup almond milk, 1 cup spinach, 1/2 cup mixed berries, 1 tbsp chia seeds",
            preparation: "Blend all ingredients until smooth.",
            macronutrients: {
              protein: "4g",
              fat: "8g",
              carbs: "30g"
            }
          },
          morningSnack: {
            meal: "Mixed Nuts",
            quantity: "1/4 cup mixed nuts",
            preparation: "Eat mixed nuts.",
            macronutrients: {
              protein: "5g",
              fat: "15g",
              carbs: "10g"
            }
          },
          lunch: {
            meal: "Turkey and Avocado Wrap",
            quantity: "1 whole wheat wrap, 100g turkey, 1/2 avocado, 1 cup spinach",
            preparation: "Wrap turkey, avocado, and spinach in whole wheat tortilla.",
            macronutrients: {
              protein: "25g",
              fat: "12g",
              carbs: "35g"
            }
          },
          eveSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          dinner: {
            meal: "Stuffed Bell Peppers",
            quantity: "2 bell peppers, 1 cup brown rice, 1/2 cup black beans",
            preparation: "Stuff bell peppers with rice and beans, bake until tender.",
            macronutrients: {
              protein: "15g",
              fat: "5g",
              carbs: "40g"
            }
          }
        },
        averageMacronutrients: {
          protein: "49g",
          fat: "40g",
          carbs: "115g"
        },
        tips: "Incorporate a balance of protein, fats, and carbs to maintain energy levels during fasting."
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: "Chia Seed Pudding",
            quantity: "1/4 cup chia seeds, 1 cup almond milk, 1/2 cup fresh berries",
            preparation: "Mix chia seeds with almond milk and let sit overnight. Top with berries.",
            macronutrients: {
              protein: "8g",
              fat: "12g",
              carbs: "30g"
            }
          },
          morningSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          lunch: {
            meal: "Grilled Chicken with Sweet Potato",
            quantity: "150g chicken, 1 medium sweet potato",
            preparation: "Grill chicken and serve with baked sweet potato.",
            macronutrients: {
              protein: "30g",
              fat: "8g",
              carbs: "30g"
            }
          },
          eveSnack: {
            meal: "Apple Slices with Peanut Butter",
            quantity: "1 apple, 1 tbsp peanut butter",
            preparation: "Slice apple and dip in peanut butter.",
            macronutrients: {
              protein: "4g",
              fat: "8g",
              carbs: "25g"
            }
          },
          dinner: {
            meal: "Stir-Fried Tofu with Broccoli",
            quantity: "150g tofu, 1 cup broccoli",
            preparation: "Stir-fry tofu and broccoli with soy sauce and ginger.",
            macronutrients: {
              protein: "20g",
              fat: "10g",
              carbs: "20g"
            }
          }
        },
        averageMacronutrients: {
          protein: "62g",
          fat: "38g",
          carbs: "105g"
        },
        tips: "Focus on whole foods and balanced meals to support your fasting routine."
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: "Oatmeal with Nuts and Berries",
            quantity: "1 cup oatmeal, 1/4 cup mixed nuts, 1/2 cup berries",
            preparation: "Cook oatmeal and top with nuts and berries.",
            macronutrients: {
              protein: "8g",
              fat: "10g",
              carbs: "45g"
            }
          },
          morningSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          lunch: {
            meal: "Quinoa Salad with Chickpeas",
            quantity: "1 cup quinoa, 1/2 cup chickpeas, mixed vegetables",
            preparation: "Combine quinoa, chickpeas, and vegetables with a vinaigrette.",
            macronutrients: {
              protein: "12g",
              fat: "7g",
              carbs: "45g"
            }
          },
          eveSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          dinner: {
            meal: "Grilled Shrimp with Zucchini Noodles",
            quantity: "150g shrimp, 1 cup zucchini noodles",
            preparation: "Grill shrimp and serve with sautéed zucchini noodles.",
            macronutrients: {
              protein: "25g",
              fat: "5g",
              carbs: "10g"
            }
          }
        },
        averageMacronutrients: {
          protein: "60g",
          fat: "30g",
          carbs: "120g"
        },
        tips: "Integrate a mix of protein, carbs, and fats in each meal to maintain balanced energy levels."
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: "Smoothie with Spinach and Banana",
            quantity: "1 cup almond milk, 1 banana, 1 cup spinach",
            preparation: "Blend all ingredients until smooth.",
            macronutrients: {
              protein: "4g",
              fat: "5g",
              carbs: "35g"
            }
          },
          morningSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          lunch: {
            meal: "Turkey Salad with Avocado",
            quantity: "150g turkey, 1/2 avocado, mixed greens",
            preparation: "Combine turkey, avocado, and mixed greens with a light dressing.",
            macronutrients: {
              protein: "30g",
              fat: "12g",
              carbs: "15g"
            }
          },
          eveSnack: {
            meal: "Celery Sticks with Hummus",
            quantity: "1 cup celery sticks, 3 tbsp hummus",
            preparation: "Dip celery sticks into hummus.",
            macronutrients: {
              protein: "4g",
              fat: "7g",
              carbs: "10g"
            }
          },
          dinner: {
            meal: "Baked Cod with Brussels Sprouts",
            quantity: "150g cod, 1 cup Brussels sprouts",
            preparation: "Bake cod and serve with roasted Brussels sprouts.",
            macronutrients: {
              protein: "25g",
              fat: "3g",
              carbs: "15g"
            }
          }
        },
        averageMacronutrients: {
          protein: "63g",
          fat: "27g",
          carbs: "75g"
        },
        tips: "Choose nutrient-dense foods that support energy and satiety during eating windows."
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: "Egg and Veggie Scramble",
            quantity: "2 eggs, 1 cup mixed vegetables",
            preparation: "Scramble eggs with mixed vegetables.",
            macronutrients: {
              protein: "14g",
              fat: "10g",
              carbs: "15g"
            }
          },
          morningSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          lunch: {
            meal: "Chickpea and Sweet Potato Salad",
            quantity: "1 cup chickpeas, 1 medium sweet potato, mixed greens",
            preparation: "Combine chickpeas, roasted sweet potato, and greens with a light vinaigrette.",
            macronutrients: {
              protein: "15g",
              fat: "7g",
              carbs: "45g"
            }
          },
          eveSnack: {
            meal: "Cottage Cheese with Pineapple",
            quantity: "1 cup cottage cheese, 1/2 cup pineapple",
            preparation: "Mix pineapple into cottage cheese.",
            macronutrients: {
              protein: "15g",
              fat: "5g",
              carbs: "20g"
            }
          },
          dinner: {
            meal: "Tofu Stir-Fry with Vegetables",
            quantity: "150g tofu, 1 cup mixed vegetables",
            preparation: "Stir-fry tofu and vegetables with soy sauce.",
            macronutrients: {
              protein: "20g",
              fat: "10g",
              carbs: "20g"
            }
          }
        },
        averageMacronutrients: {
          protein: "64g",
          fat: "32g",
          carbs: "100g"
        },
        tips: "Maintain a balanced intake of nutrients and hydrate well during fasting hours."
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: "Berry Smoothie with Protein Powder",
            quantity: "1 cup almond milk, 1/2 cup berries, 1 scoop protein powder",
            preparation: "Blend all ingredients until smooth.",
            macronutrients: {
              protein: "20g",
              fat: "5g",
              carbs: "25g"
            }
          },
          morningSnack: {
            meal: "N/A",
            quantity: "N/A",
            preparation: "N/A",
            macronutrients: {
              protein: "N/A",
              fat: "N/A",
              carbs: "N/A"
            }
          },
          lunch: {
            meal: "Salmon and Avocado Salad",
            quantity: "150g salmon, 1/2 avocado, mixed greens",
            preparation: "Combine salmon, avocado, and greens with a light dressing.",
            macronutrients: {
              protein: "30g",
              fat: "15g",
              carbs: "15g"
            }
          },
          eveSnack: {
            meal: "Nut Butter with Apple Slices",
            quantity: "1 apple, 1 tbsp almond butter",
            preparation: "Dip apple slices in almond butter.",
            macronutrients: {
              protein: "4g",
              fat: "8g",
              carbs: "25g"
            }
          },
          dinner: {
            meal: "Grilled Chicken with Cauliflower Rice",
            quantity: "150g chicken, 1 cup cauliflower rice",
            preparation: "Grill chicken and serve with cauliflower rice.",
            macronutrients: {
              protein: "25g",
              fat: "8g",
              carbs: "10g"
            }
          }
        },
        averageMacronutrients: {
          protein: "79g",
          fat: "36g",
          carbs: "75g"
        },
        tips: "Ensure to get a good mix of macronutrients and keep portion sizes in check to support intermittent fasting."
      }
    ]
  },
  {
    id: 4,
    title: 'Keto Diet',
    description: 'A high-fat, low-carb diet that aims to put the body into a state of ketosis, where fat is used as the primary energy source.',
    image: '/assets/Diets/keto.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Scrambled Eggs with Avocado',
            quantity: '3 eggs, 1/2 avocado',
            preparation: 'Scramble eggs in butter and serve with sliced avocado.',
            macronutrients: { protein: '18g', fat: '30g', carbs: '8g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken Caesar Salad',
            quantity: '150g grilled chicken, 2 cups romaine lettuce, 1/4 cup Parmesan cheese, 2 tbsp Caesar dressing',
            preparation: 'Combine chicken, lettuce, cheese, and dressing.',
            macronutrients: { protein: '35g', fat: '25g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Cheese and Olives',
            quantity: '1 oz cheese, 10 olives',
            preparation: 'Enjoy cheese with olives.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '2g' }
          },
          dinner: {
            meal: 'Grilled Salmon with Asparagus',
            quantity: '150g salmon, 1 cup asparagus',
            preparation: 'Grill salmon and serve with sautéed asparagus in olive oil.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '8g' }
          }
        },
        averageMacronutrients: { protein: '86g', fat: '90g', carbs: '28g' },
        tips: 'Focus on high-fat, low-carb foods and monitor ketone levels to ensure you are in ketosis.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Keto Smoothie',
            quantity: '1 cup almond milk, 1 scoop protein powder, 1 tbsp coconut oil',
            preparation: 'Blend all ingredients until smooth.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Egg Salad Lettuce Wraps',
            quantity: '2 eggs, 2 tbsp mayonnaise, 2 large lettuce leaves',
            preparation: 'Mix chopped eggs with mayonnaise and serve in lettuce wraps.',
            macronutrients: { protein: '15g', fat: '20g', carbs: '5g' }
          },
          eveSnack: {
            meal: 'Avocado Smoothie',
            quantity: '1/2 avocado, 1 cup unsweetened almond milk',
            preparation: 'Blend avocado with almond milk.',
            macronutrients: { protein: '3g', fat: '20g', carbs: '10g' }
          },
          dinner: {
            meal: 'Beef Stir-Fry with Broccoli',
            quantity: '150g beef, 1 cup broccoli',
            preparation: 'Stir-fry beef with broccoli in coconut oil.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '68g', fat: '55g', carbs: '30g' },
        tips: 'Keep your carbs very low and focus on eating plenty of fats and moderate proteins.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Greek Yogurt with Nuts',
            quantity: '1 cup Greek yogurt, 1/4 cup mixed nuts',
            preparation: 'Top Greek yogurt with mixed nuts.',
            macronutrients: { protein: '15g', fat: '15g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Zucchini Noodles with Pesto',
            quantity: '1 cup zucchini noodles, 2 tbsp pesto',
            preparation: 'Toss zucchini noodles with pesto.',
            macronutrients: { protein: '5g', fat: '20g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Hard-Boiled Eggs',
            quantity: '2 eggs',
            preparation: 'Boil eggs and enjoy.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '1g' }
          },
          dinner: {
            meal: 'Chicken Thighs with Green Beans',
            quantity: '150g chicken thighs, 1 cup green beans',
            preparation: 'Roast chicken thighs and serve with steamed green beans.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '57g', fat: '65g', carbs: '31g' },
        tips: 'Ensure to include plenty of healthy fats and keep an eye on your carb intake.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding',
            quantity: '1/4 cup chia seeds, 1 cup coconut milk, 1 tbsp flaxseeds',
            preparation: 'Mix chia seeds and flaxseeds with coconut milk and let sit overnight.',
            macronutrients: { protein: '10g', fat: '20g', carbs: '15g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Tuna Salad with Avocado',
            quantity: '1 can tuna, 1/2 avocado, 1 cup mixed greens',
            preparation: 'Mix tuna with avocado and serve over mixed greens.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Celery with Cream Cheese',
            quantity: '2 celery stalks, 2 tbsp cream cheese',
            preparation: 'Spread cream cheese on celery stalks.',
            macronutrients: { protein: '3g', fat: '10g', carbs: '5g' }
          },
          dinner: {
            meal: 'Pork Chops with Cauliflower Rice',
            quantity: '150g pork chops, 1 cup cauliflower rice',
            preparation: 'Grill pork chops and serve with sautéed cauliflower rice.',
            macronutrients: { protein: '30g', fat: '25g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '68g', fat: '65g', carbs: '40g' },
        tips: 'Incorporate a variety of keto-friendly snacks and meals to maintain interest and adherence.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Egg Muffins',
            quantity: '3 egg muffins (made with 6 eggs, spinach, and cheese)',
            preparation: 'Bake eggs with spinach and cheese in a muffin tin.',
            macronutrients: { protein: '18g', fat: '25g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Keto Cobb Salad',
            quantity: '1 cup mixed greens, 100g chicken breast, 2 boiled eggs, 1/4 avocado, 1/4 cup bacon bits',
            preparation: 'Combine all ingredients in a bowl and add keto dressing.',
            macronutrients: { protein: '35g', fat: '25g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Almond Butter and Celery',
            quantity: '2 tbsp almond butter, 2 celery stalks',
            preparation: 'Spread almond butter on celery.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '5g' }
          },
          dinner: {
            meal: 'Shrimp and Avocado Salad',
            quantity: '150g shrimp, 1/2 avocado, 1 cup mixed greens',
            preparation: 'Cook shrimp and mix with avocado and greens.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '83g', fat: '65g', carbs: '30g' },
        tips: 'Experiment with different keto-friendly recipes to find what you enjoy the most.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Keto Pancakes',
            quantity: '2 pancakes (made with almond flour, eggs, and butter)',
            preparation: 'Cook pancakes with almond flour and eggs in butter.',
            macronutrients: { protein: '15g', fat: '20g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken and Broccoli Alfredo',
            quantity: '150g chicken, 1 cup broccoli, 1/4 cup Alfredo sauce',
            preparation: 'Cook chicken and broccoli, then mix with Alfredo sauce.',
            macronutrients: { protein: '30g', fat: '25g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Pepperoni Chips',
            quantity: '20 slices pepperoni',
            preparation: 'Bake pepperoni slices until crisp.',
            macronutrients: { protein: '12g', fat: '20g', carbs: '1g' }
          },
          dinner: {
            meal: 'Stuffed Portobello Mushrooms',
            quantity: '2 portobello mushrooms, 1/4 cup cream cheese, 1/4 cup grated cheese',
            preparation: 'Stuff mushrooms with cream cheese and bake.',
            macronutrients: { protein: '15g', fat: '25g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '82g', fat: '70g', carbs: '26g' },
        tips: 'Maintain a balance of protein and fats, and keep your carb intake minimal.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Avocado and Bacon',
            quantity: '1/2 avocado, 2 slices bacon',
            preparation: 'Cook bacon and serve with sliced avocado.',
            macronutrients: { protein: '12g', fat: '25g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Cauliflower Pizza',
            quantity: '1 slice cauliflower pizza (topped with cheese and pepperoni)',
            preparation: 'Bake cauliflower crust with toppings.',
            macronutrients: { protein: '15g', fat: '20g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Cucumber Slices with Guacamole',
            quantity: '1/2 cucumber, 1/4 cup guacamole',
            preparation: 'Dip cucumber slices in guacamole.',
            macronutrients: { protein: '2g', fat: '10g', carbs: '5g' }
          },
          dinner: {
            meal: 'Beef and Mushroom Stir-Fry',
            quantity: '150g beef, 1 cup mushrooms',
            preparation: 'Stir-fry beef and mushrooms in olive oil.',
            macronutrients: { protein: '30g', fat: '25g', carbs: '8g' }
          }
        },
        averageMacronutrients: { protein: '59g', fat: '60g', carbs: '28g' },
        tips: 'End the week with a mix of your favorite keto-friendly foods to stay motivated.'
      }
    ]
  },
  {
    id: 5,
    title: 'Mediterranean Diet',
    description: 'A diet rich in fruits, vegetables, whole grains, and healthy fats, promoting heart health and longevity.',
    image: '/assets/Diets/mediterranean.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Greek Yogurt with Honey and Walnuts',
            quantity: '1 cup Greek yogurt, 1 tbsp honey, 1/4 cup walnuts',
            preparation: 'Mix honey and walnuts into Greek yogurt.',
            macronutrients: { protein: '15g', fat: '15g', carbs: '20g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Mediterranean Quinoa Salad',
            quantity: '1 cup quinoa, 1/2 cup cherry tomatoes, 1/4 cup feta cheese, olives',
            preparation: 'Combine cooked quinoa with tomatoes, feta cheese, and olives.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '35g' }
          },
          eveSnack: {
            meal: 'Hummus with Vegetable Sticks',
            quantity: '1/2 cup hummus, 1 cup vegetable sticks',
            preparation: 'Dip vegetables into hummus.',
            macronutrients: { protein: '6g', fat: '10g', carbs: '15g' }
          },
          dinner: {
            meal: 'Grilled Salmon with Lemon and Herbs',
            quantity: '150g salmon, 1 tbsp olive oil, lemon juice, herbs',
            preparation: 'Grill salmon with olive oil, lemon juice, and herbs.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '5g' }
          }
        },
        averageMacronutrients: { protein: '58g', fat: '50g', carbs: '75g' },
        tips: 'Emphasize healthy fats, lean proteins, and a variety of fresh vegetables in your meals.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Avocado Toast with Tomato',
            quantity: '2 slices whole grain toast, 1/2 avocado, 1 tomato',
            preparation: 'Top toast with mashed avocado and sliced tomato.',
            macronutrients: { protein: '8g', fat: '12g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Mediterranean Chickpea Salad',
            quantity: '1 cup chickpeas, 1/2 cup cucumber, 1/4 cup red onion, olives, feta',
            preparation: 'Mix chickpeas with cucumber, onion, olives, and feta cheese.',
            macronutrients: { protein: '15g', fat: '12g', carbs: '30g' }
          },
          eveSnack: {
            meal: 'Greek Yogurt with Fresh Fruit',
            quantity: '1 cup Greek yogurt, 1/2 cup fresh fruit',
            preparation: 'Top Greek yogurt with fresh fruit.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '20g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers',
            quantity: '2 bell peppers, 1/2 cup rice, 1/2 cup ground turkey',
            preparation: 'Stuff bell peppers with rice and turkey, bake until tender.',
            macronutrients: { protein: '20g', fat: '10g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '53g', fat: '39g', carbs: '85g' },
        tips: 'Include a variety of fresh, seasonal produce and whole grains in your diet.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Oatmeal with Almonds and Berries',
            quantity: '1 cup oatmeal, 1/4 cup almonds, 1/2 cup berries',
            preparation: 'Cook oatmeal and top with almonds and berries.',
            macronutrients: { protein: '10g', fat: '12g', carbs: '45g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Grilled Chicken and Vegetable Skewers',
            quantity: '150g chicken, 1 cup mixed vegetables',
            preparation: 'Skewer and grill chicken and vegetables.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '20g' }
          },
          eveSnack: {
            meal: 'Mixed Nuts and Fresh Fruit',
            quantity: '1/4 cup mixed nuts, 1 apple',
            preparation: 'Enjoy nuts with a fresh apple.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '25g' }
          },
          dinner: {
            meal: 'Baked Cod with a Side of Roasted Vegetables',
            quantity: '150g cod, 1 cup roasted vegetables',
            preparation: 'Bake cod and serve with roasted vegetables.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '63g', fat: '42g', carbs: '85g' },
        tips: 'Balance your meals with proteins, healthy fats, and a variety of fruits and vegetables.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Spinach and Feta Omelet',
            quantity: '3 eggs, 1/2 cup spinach, 1/4 cup feta cheese',
            preparation: 'Cook eggs with spinach and feta cheese.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Mediterranean Tuna Salad',
            quantity: '1 can tuna, 1/2 cup olives, 1/4 cup cherry tomatoes, 1 tbsp olive oil',
            preparation: 'Mix tuna with olives, tomatoes, and olive oil.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Stuffed Grape Leaves',
            quantity: '4 grape leaves, 1/4 cup rice, 2 tbsp pine nuts',
            preparation: 'Stuff grape leaves with rice and pine nuts, then steam.',
            macronutrients: { protein: '5g', fat: '8g', carbs: '20g' }
          },
          dinner: {
            meal: 'Lentil Soup',
            quantity: '1 cup lentils, 1 cup mixed vegetables',
            preparation: 'Cook lentils and vegetables into a hearty soup.',
            macronutrients: { protein: '18g', fat: '5g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '68g', fat: '43g', carbs: '75g' },
        tips: 'Incorporate legumes and a variety of greens for balanced nutrition.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding with Berries',
            quantity: '1/4 cup chia seeds, 1 cup almond milk, 1/2 cup berries',
            preparation: 'Mix chia seeds with almond milk and refrigerate overnight. Top with berries.',
            macronutrients: { protein: '10g', fat: '15g', carbs: '20g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Falafel Wrap',
            quantity: '1 whole grain wrap, 4 falafel balls, 1/2 cup tzatziki',
            preparation: 'Wrap falafel and tzatziki in whole grain wrap.',
            macronutrients: { protein: '15g', fat: '12g', carbs: '30g' }
          },
          eveSnack: {
            meal: 'Greek Yogurt with Almonds',
            quantity: '1 cup Greek yogurt, 1/4 cup almonds',
            preparation: 'Top Greek yogurt with almonds.',
            macronutrients: { protein: '15g', fat: '15g', carbs: '15g' }
          },
          dinner: {
            meal: 'Grilled Shrimp with Couscous',
            quantity: '150g shrimp, 1/2 cup couscous',
            preparation: 'Grill shrimp and serve with cooked couscous.',
            macronutrients: { protein: '25g', fat: '8g', carbs: '35g' }
          }
        },
        averageMacronutrients: { protein: '65g', fat: '50g', carbs: '100g' },
        tips: 'Use whole grains and lean proteins to create balanced, satisfying meals.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Tomato and Basil Frittata',
            quantity: '3 eggs, 1/2 cup cherry tomatoes, fresh basil',
            preparation: 'Cook eggs with tomatoes and basil in a skillet.',
            macronutrients: { protein: '18g', fat: '15g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Roasted Vegetable and Hummus Wrap',
            quantity: '1 whole grain wrap, 1/2 cup roasted vegetables, 1/4 cup hummus',
            preparation: 'Wrap roasted vegetables and hummus in a whole grain wrap.',
            macronutrients: { protein: '10g', fat: '10g', carbs: '30g' }
          },
          eveSnack: {
            meal: 'Apple Slices with Almond Butter',
            quantity: '1 apple, 2 tbsp almond butter',
            preparation: 'Dip apple slices in almond butter.',
            macronutrients: { protein: '5g', fat: '12g', carbs: '20g' }
          },
          dinner: {
            meal: 'Baked Chicken with Sweet Potatoes',
            quantity: '150g chicken, 1 cup sweet potatoes',
            preparation: 'Bake chicken and serve with roasted sweet potatoes.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '58g', fat: '47g', carbs: '100g' },
        tips: 'Incorporate a variety of vegetables and lean proteins for balanced nutrition.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Fruit Smoothie with Spinach',
            quantity: '1 cup almond milk, 1/2 cup spinach, 1/2 cup mixed fruit',
            preparation: 'Blend almond milk, spinach, and mixed fruit.',
            macronutrients: { protein: '6g', fat: '5g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Mediterranean Pasta Salad',
            quantity: '1 cup whole grain pasta, 1/2 cup cherry tomatoes, 1/4 cup olives, 2 tbsp feta',
            preparation: 'Combine cooked pasta with tomatoes, olives, and feta.',
            macronutrients: { protein: '15g', fat: '12g', carbs: '45g' }
          },
          eveSnack: {
            meal: 'Fresh Fruit and Yogurt Parfait',
            quantity: '1 cup Greek yogurt, 1/2 cup fresh fruit, 1 tbsp honey',
            preparation: 'Layer Greek yogurt with fruit and honey.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '30g' }
          },
          dinner: {
            meal: 'Lentil and Spinach Stew',
            quantity: '1 cup lentils, 1 cup spinach, 1/2 cup tomatoes',
            preparation: 'Cook lentils with spinach and tomatoes into a stew.',
            macronutrients: { protein: '18g', fat: '5g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '54g', fat: '27g', carbs: '95g' },
        tips: 'End the week with a mix of fresh fruits, vegetables, and whole grains for a satisfying finish.'
      }
    ]
  },
  {
    id: 6,
    title: 'Paleo Diet',
    description: 'A diet focusing on whole, unprocessed foods that resemble what our ancestors ate, including lean meats, fish, fruits, vegetables, nuts, and seeds.',
    image: '/assets/Diets/paleo.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Paleo Smoothie',
            quantity: '1 cup almond milk, 1 banana, 1 tbsp almond butter, 1/2 cup spinach',
            preparation: 'Blend all ingredients until smooth.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken Salad with Avocado',
            quantity: '150g grilled chicken, 1 avocado, 2 cups mixed greens',
            preparation: 'Combine grilled chicken, avocado, and mixed greens.',
            macronutrients: { protein: '30g', fat: '25g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup',
            preparation: 'Enjoy mixed nuts as a snack.',
            macronutrients: { protein: '6g', fat: '15g', carbs: '5g' }
          },
          dinner: {
            meal: 'Beef Stir-Fry with Vegetables',
            quantity: '150g beef, 1 cup mixed vegetables',
            preparation: 'Stir-fry beef with vegetables in coconut oil.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '69g', fat: '65g', carbs: '60g' },
        tips: 'Focus on whole, unprocessed foods and avoid grains, dairy, and legumes.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Egg and Veggie Scramble',
            quantity: '3 eggs, 1/2 cup spinach, 1/2 cup bell peppers',
            preparation: 'Scramble eggs with spinach and bell peppers.',
            macronutrients: { protein: '18g', fat: '15g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Paleo Turkey Lettuce Wraps',
            quantity: '150g ground turkey, 4 large lettuce leaves, 1/4 cup diced tomatoes',
            preparation: 'Wrap cooked ground turkey and tomatoes in lettuce leaves.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '8g' }
          },
          eveSnack: {
            meal: 'Apple Slices with Almond Butter',
            quantity: '1 apple, 2 tbsp almond butter',
            preparation: 'Dip apple slices in almond butter.',
            macronutrients: { protein: '5g', fat: '12g', carbs: '20g' }
          },
          dinner: {
            meal: 'Grilled Salmon with Asparagus',
            quantity: '150g salmon, 1 cup asparagus',
            preparation: 'Grill salmon and serve with steamed asparagus.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '8g' }
          }
        },
        averageMacronutrients: { protein: '73g', fat: '52g', carbs: '46g' },
        tips: 'Ensure to include a variety of vegetables and lean proteins in your diet.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Chia Pudding with Berries',
            quantity: '1/4 cup chia seeds, 1 cup coconut milk, 1/2 cup mixed berries',
            preparation: 'Mix chia seeds with coconut milk and refrigerate overnight. Top with berries.',
            macronutrients: { protein: '10g', fat: '15g', carbs: '20g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Paleo Chicken Soup',
            quantity: '1 cup chicken broth, 100g chicken, 1 cup mixed vegetables',
            preparation: 'Simmer chicken and vegetables in chicken broth.',
            macronutrients: { protein: '20g', fat: '10g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Cucumber and Guacamole',
            quantity: '1 cucumber, 1/2 cup guacamole',
            preparation: 'Dip cucumber slices in guacamole.',
            macronutrients: { protein: '3g', fat: '10g', carbs: '10g' }
          },
          dinner: {
            meal: 'Baked Pork Chops with Sweet Potatoes',
            quantity: '150g pork chops, 1 cup sweet potatoes',
            preparation: 'Bake pork chops and sweet potatoes until cooked through.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '25g' }
          }
        },
        averageMacronutrients: { protein: '58g', fat: '50g', carbs: '70g' },
        tips: 'Focus on incorporating a range of protein sources and healthy fats.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Smoothie Bowl with Nuts',
            quantity: '1 cup almond milk, 1/2 cup mixed berries, 1/4 cup nuts',
            preparation: 'Blend almond milk and berries. Top with nuts.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '25g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Paleo Beef Salad',
            quantity: '150g beef, 2 cups mixed greens, 1/4 cup cherry tomatoes',
            preparation: 'Combine beef with mixed greens and tomatoes.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Celery Sticks with Almond Butter',
            quantity: '1 cup celery sticks, 2 tbsp almond butter',
            preparation: 'Dip celery sticks in almond butter.',
            macronutrients: { protein: '5g', fat: '12g', carbs: '5g' }
          },
          dinner: {
            meal: 'Roasted Chicken with Carrots',
            quantity: '150g chicken, 1 cup carrots',
            preparation: 'Roast chicken and carrots until tender.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '63g', fat: '52g', carbs: '55g' },
        tips: 'Incorporate a variety of vegetables and lean meats to maintain nutritional balance.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Egg Muffins with Spinach and Mushrooms',
            quantity: '3 eggs, 1/2 cup spinach, 1/4 cup mushrooms',
            preparation: 'Mix eggs with spinach and mushrooms, bake in muffin tin.',
            macronutrients: { protein: '18g', fat: '15g', carbs: '5g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Grilled Shrimp Salad',
            quantity: '150g shrimp, 2 cups mixed greens, 1/4 avocado',
            preparation: 'Grill shrimp and combine with greens and avocado.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Paleo Trail Mix',
            quantity: '1/4 cup mixed nuts and dried fruit',
            preparation: 'Enjoy mixed nuts and dried fruit as a snack.',
            macronutrients: { protein: '6g', fat: '15g', carbs: '15g' }
          },
          dinner: {
            meal: 'Baked Cod with Broccoli',
            quantity: '150g cod, 1 cup broccoli',
            preparation: 'Bake cod and serve with steamed broccoli.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '68g', fat: '50g', carbs: '40g' },
        tips: 'Keep meals simple with unprocessed ingredients to stay true to the Paleo principles.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Fruit Salad with Nuts',
            quantity: '1 cup mixed fruit, 1/4 cup nuts',
            preparation: 'Mix fruit and nuts together.',
            macronutrients: { protein: '4g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken and Veggie Stir-Fry',
            quantity: '150g chicken, 1 cup mixed vegetables',
            preparation: 'Stir-fry chicken with vegetables in coconut oil.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Paleo Energy Balls',
            quantity: '2 energy balls',
            preparation: 'Mix dates, nuts, and cocoa powder into small balls.',
            macronutrients: { protein: '4g', fat: '10g', carbs: '20g' }
          },
          dinner: {
            meal: 'Pork Tenderloin with Sweet Potato Mash',
            quantity: '150g pork tenderloin, 1 cup sweet potatoes',
            preparation: 'Bake pork tenderloin and serve with sweet potato mash.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '58g', fat: '50g', carbs: '60g' },
        tips: 'Focus on nutrient-dense foods and maintain variety to prevent monotony.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Avocado and Egg Breakfast Bowl',
            quantity: '1 avocado, 2 eggs',
            preparation: 'Top sliced avocado with poached or fried eggs.',
            macronutrients: { protein: '14g', fat: '25g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Beef and Veggie Stir-Fry',
            quantity: '150g beef, 1 cup mixed vegetables',
            preparation: 'Stir-fry beef with vegetables in coconut oil.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Fresh Fruit',
            quantity: '1 cup mixed fruit',
            preparation: 'Enjoy fresh fruit as a snack.',
            macronutrients: { protein: '2g', fat: '1g', carbs: '25g' }
          },
          dinner: {
            meal: 'Grilled Chicken with Cauliflower Rice',
            quantity: '150g chicken, 1 cup cauliflower rice',
            preparation: 'Grill chicken and serve with cauliflower rice.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '10g' }
          }
        },
        averageMacronutrients: { protein: '66g', fat: '51g', carbs: '60g' },
        tips: 'End the week with a variety of fresh, wholesome foods to support overall health.'
      }
    ]
  },
  {
    id: 7,
    title: 'Vegan Diet',
    description: 'A plant-based diet that excludes all animal products, focusing on fruits, vegetables, grains, nuts, and seeds for optimal health and nutrition.',
    image: '/assets/Diets/vegan.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Berry Smoothie Bowl',
            quantity: '1 cup almond milk, 1/2 cup mixed berries, 1/4 cup granola, 1 tbsp chia seeds',
            preparation: 'Blend almond milk and berries. Top with granola and chia seeds.',
            macronutrients: { protein: '8g', fat: '10g', carbs: '40g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chickpea Salad Wraps',
            quantity: '1 cup chickpeas, 1/4 cup diced cucumber, 1/4 cup diced bell pepper, 4 large lettuce leaves',
            preparation: 'Mix chickpeas with cucumber and bell pepper. Serve in lettuce leaves.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '30g' }
          },
          eveSnack: {
            meal: 'Apple Slices with Almond Butter',
            quantity: '1 apple, 2 tbsp almond butter',
            preparation: 'Dip apple slices in almond butter.',
            macronutrients: { protein: '5g', fat: '12g', carbs: '20g' }
          },
          dinner: {
            meal: 'Lentil and Vegetable Stew',
            quantity: '1 cup lentils, 1 cup mixed vegetables, 2 cups vegetable broth',
            preparation: 'Simmer lentils and vegetables in vegetable broth until tender.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '45g' }
          }
        },
        averageMacronutrients: { protein: '48g', fat: '32g', carbs: '135g' },
        tips: 'Include a variety of plant-based proteins and healthy fats to ensure balanced nutrition.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Tofu Scramble with Spinach',
            quantity: '1/2 cup tofu, 1 cup spinach, 1/4 cup tomatoes',
            preparation: 'Sauté tofu with spinach and tomatoes.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Quinoa and Black Bean Salad',
            quantity: '1 cup quinoa, 1/2 cup black beans, 1/4 cup corn, 1/4 cup diced bell peppers',
            preparation: 'Combine quinoa with black beans, corn, and bell peppers.',
            macronutrients: { protein: '18g', fat: '8g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Carrot Sticks with Hummus',
            quantity: '1 cup carrot sticks, 1/2 cup hummus',
            preparation: 'Dip carrot sticks in hummus.',
            macronutrients: { protein: '6g', fat: '10g', carbs: '15g' }
          },
          dinner: {
            meal: 'Stuffed Sweet Potatoes',
            quantity: '2 medium sweet potatoes, 1/2 cup black beans, 1/4 cup salsa',
            preparation: 'Bake sweet potatoes and stuff with black beans and salsa.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '60g' }
          }
        },
        averageMacronutrients: { protein: '49g', fat: '33g', carbs: '125g' },
        tips: 'Ensure to consume a variety of legumes, nuts, and seeds for adequate protein intake.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Overnight Oats with Almonds and Berries',
            quantity: '1/2 cup oats, 1 cup almond milk, 1/4 cup almonds, 1/2 cup mixed berries',
            preparation: 'Mix oats with almond milk and refrigerate overnight. Top with almonds and berries.',
            macronutrients: { protein: '12g', fat: '15g', carbs: '45g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Vegan Buddha Bowl',
            quantity: '1/2 cup brown rice, 1/2 cup chickpeas, 1/2 cup steamed broccoli, 1/4 avocado',
            preparation: 'Combine brown rice, chickpeas, broccoli, and avocado in a bowl.',
            macronutrients: { protein: '15g', fat: '12g', carbs: '50g' }
          },
          eveSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup',
            preparation: 'Enjoy mixed nuts as a snack.',
            macronutrients: { protein: '6g', fat: '15g', carbs: '5g' }
          },
          dinner: {
            meal: 'Vegetable Stir-Fry with Tofu',
            quantity: '150g tofu, 1 cup mixed vegetables',
            preparation: 'Stir-fry tofu and vegetables in sesame oil.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '53g', fat: '47g', carbs: '120g' },
        tips: 'Incorporate a mix of grains, legumes, and nuts to ensure a balanced diet.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding',
            quantity: '1/4 cup chia seeds, 1 cup coconut milk, 1/2 cup mango',
            preparation: 'Mix chia seeds with coconut milk and refrigerate overnight. Top with mango.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Vegan Lentil Soup',
            quantity: '1 cup lentils, 1 cup diced tomatoes, 1 cup carrots',
            preparation: 'Simmer lentils with tomatoes and carrots.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Fresh Fruit Salad',
            quantity: '1 cup mixed fruit',
            preparation: 'Mix various fresh fruits together.',
            macronutrients: { protein: '2g', fat: '1g', carbs: '25g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers',
            quantity: '2 bell peppers, 1/2 cup quinoa, 1/2 cup black beans',
            preparation: 'Stuff bell peppers with quinoa and black beans. Bake until tender.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '50g' }
          }
        },
        averageMacronutrients: { protein: '45g', fat: '31g', carbs: '145g' },
        tips: 'Make sure to include a variety of fruits and vegetables to meet your nutritional needs.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Vegan Pancakes',
            quantity: '1 cup flour, 1 cup almond milk, 1 tbsp flaxseed meal',
            preparation: 'Mix ingredients and cook on a griddle.',
            macronutrients: { protein: '8g', fat: '8g', carbs: '50g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Quinoa and Roasted Vegetable Bowl',
            quantity: '1 cup quinoa, 1 cup roasted vegetables',
            preparation: 'Combine cooked quinoa with roasted vegetables.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '60g' }
          },
          eveSnack: {
            meal: 'Roasted Chickpeas',
            quantity: '1/2 cup',
            preparation: 'Roast chickpeas with spices.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '20g' }
          },
          dinner: {
            meal: 'Vegan Chili',
            quantity: '1 cup kidney beans, 1 cup tomatoes, 1/2 cup corn',
            preparation: 'Simmer beans, tomatoes, and corn with chili spices.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '53g', fat: '28g', carbs: '170g' },
        tips: 'Balance your meals with a good mix of protein, carbs, and healthy fats from plant sources.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Green Smoothie',
            quantity: '1 cup spinach, 1 banana, 1 cup almond milk, 1 tbsp flaxseeds',
            preparation: 'Blend all ingredients until smooth.',
            macronutrients: { protein: '6g', fat: '10g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Vegan Burrito Bowl',
            quantity: '1/2 cup rice, 1/2 cup black beans, 1/2 cup corn, 1/4 cup salsa',
            preparation: 'Combine rice, beans, corn, and salsa.',
            macronutrients: { protein: '12g', fat: '5g', carbs: '50g' }
          },
          eveSnack: {
            meal: 'Trail Mix',
            quantity: '1/4 cup',
            preparation: 'Mix nuts, seeds, and dried fruit.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '20g' }
          },
          dinner: {
            meal: 'Roasted Cauliflower with Tahini Sauce',
            quantity: '1 cup cauliflower, 2 tbsp tahini',
            preparation: 'Roast cauliflower and drizzle with tahini sauce.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '31g', fat: '40g', carbs: '120g' },
        tips: 'Ensure your diet includes a variety of fruits, vegetables, and legumes for balanced nutrition.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Almond Butter Toast',
            quantity: '2 slices whole grain toast, 2 tbsp almond butter',
            preparation: 'Spread almond butter on toast.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Spinach and Lentil Salad',
            quantity: '1 cup spinach, 1/2 cup lentils, 1/4 cup cherry tomatoes',
            preparation: 'Mix spinach, lentils, and tomatoes with a light vinaigrette.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '35g' }
          },
          eveSnack: {
            meal: 'Banana with Peanut Butter',
            quantity: '1 banana, 2 tbsp peanut butter',
            preparation: 'Slice banana and dip in peanut butter.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '30g' }
          },
          dinner: {
            meal: 'Stuffed Acorn Squash',
            quantity: '1 acorn squash, 1/2 cup quinoa, 1/4 cup cranberries',
            preparation: 'Bake acorn squash and stuff with quinoa and cranberries.',
            macronutrients: { protein: '10g', fat: '8g', carbs: '45g' }
          }
        },
        averageMacronutrients: { protein: '38g', fat: '38g', carbs: '140g' },
        tips: 'Incorporate a variety of foods to cover all nutritional needs and prevent deficiencies.'
      }
    ]
  },
  {
    id: 8,
    title: 'Vegetarian Diet',
    description: 'A diet that includes plant-based foods along with dairy products and eggs, focusing on a balanced intake of nutrients while avoiding meat and fish.',
    image: '/assets/Diets/vegetarian.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Vegetarian Breakfast Burrito',
            quantity: '1 whole wheat tortilla, 1/2 cup scrambled eggs, 1/4 cup black beans, 1/4 cup salsa',
            preparation: 'Fill tortilla with scrambled eggs, black beans, and salsa.',
            macronutrients: { protein: '18g', fat: '12g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Spinach and Feta Salad',
            quantity: '2 cups spinach, 1/4 cup feta cheese, 1/2 cup cherry tomatoes, 1 tbsp olive oil',
            preparation: 'Toss spinach with feta cheese, cherry tomatoes, and olive oil.',
            macronutrients: { protein: '12g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Vegetable Stir-Fry with Tofu',
            quantity: '1 cup mixed vegetables, 150g tofu, 2 tbsp soy sauce',
            preparation: 'Stir-fry tofu and vegetables with soy sauce.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '25g' }
          }
        },
        averageMacronutrients: { protein: '65g', fat: '47g', carbs: '90g' },
        tips: 'Combine a variety of plant proteins and dairy to ensure a balanced intake of essential nutrients.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Oatmeal with Almonds and Fruit',
            quantity: '1 cup oatmeal, 1/4 cup almonds, 1/2 cup diced apple',
            preparation: 'Cook oatmeal and top with almonds and diced apple.',
            macronutrients: { protein: '8g', fat: '12g', carbs: '45g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Vegetarian Chili',
            quantity: '1 cup mixed beans, 1 cup diced tomatoes, 1/2 cup corn',
            preparation: 'Simmer beans with tomatoes and corn.',
            macronutrients: { protein: '18g', fat: '5g', carbs: '45g' }
          },
          eveSnack: {
            meal: 'Veggie Sticks with Hummus',
            quantity: '1 cup vegetable sticks, 1/2 cup hummus',
            preparation: 'Dip vegetable sticks in hummus.',
            macronutrients: { protein: '6g', fat: '10g', carbs: '15g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers',
            quantity: '2 bell peppers, 1/2 cup quinoa, 1/2 cup black beans, 1/4 cup cheese',
            preparation: 'Stuff bell peppers with quinoa, black beans, and cheese. Bake until tender.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '50g' }
          }
        },
        averageMacronutrients: { protein: '47g', fat: '37g', carbs: '155g' },
        tips: 'Incorporate a variety of vegetables and legumes to enhance flavor and nutritional diversity.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Greek Yogurt Parfait',
            quantity: '1 cup Greek yogurt, 1/2 cup granola, 1/2 cup berries',
            preparation: 'Layer Greek yogurt with granola and berries.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '35g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Caprese Salad',
            quantity: '2 cups mixed greens, 1/4 cup mozzarella, 1/2 cup cherry tomatoes, 1 tbsp balsamic glaze',
            preparation: 'Combine greens, mozzarella, tomatoes, and drizzle with balsamic glaze.',
            macronutrients: { protein: '12g', fat: '12g', carbs: '20g' }
          },
          eveSnack: {
            meal: 'Apple with Peanut Butter',
            quantity: '1 apple, 2 tbsp peanut butter',
            preparation: 'Slice apple and dip in peanut butter.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '30g' }
          },
          dinner: {
            meal: 'Eggplant Parmesan',
            quantity: '1 cup breaded eggplant slices, 1/2 cup marinara sauce, 1/4 cup Parmesan cheese',
            preparation: 'Bake breaded eggplant and top with marinara sauce and Parmesan cheese.',
            macronutrients: { protein: '18g', fat: '15g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '50g', fat: '47g', carbs: '125g' },
        tips: 'Combine protein sources with vegetables to ensure a balanced diet and proper nutrient intake.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Smoothie Bowl',
            quantity: '1 cup almond milk, 1 banana, 1/2 cup spinach, 1/4 cup granola',
            preparation: 'Blend almond milk, banana, and spinach. Top with granola.',
            macronutrients: { protein: '6g', fat: '8g', carbs: '40g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Veggie Wrap',
            quantity: '1 whole wheat tortilla, 1/2 cup hummus, 1 cup mixed vegetables',
            preparation: 'Spread hummus on tortilla and fill with mixed vegetables.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '35g' }
          },
          eveSnack: {
            meal: 'Trail Mix',
            quantity: '1/4 cup',
            preparation: 'Mix nuts and dried fruits.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '20g' }
          },
          dinner: {
            meal: 'Vegetable Curry',
            quantity: '1 cup mixed vegetables, 1/2 cup chickpeas, 1/2 cup coconut milk',
            preparation: 'Cook vegetables and chickpeas in coconut milk with curry spices.',
            macronutrients: { protein: '15g', fat: '15g', carbs: '40g' }
          }
        },
        averageMacronutrients: { protein: '38g', fat: '48g', carbs: '135g' },
        tips: 'Use a variety of spices to add flavor and nutrients to your vegetarian meals.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding with Fruit',
            quantity: '1/4 cup chia seeds, 1 cup almond milk, 1/2 cup diced mango',
            preparation: 'Mix chia seeds with almond milk and refrigerate overnight. Top with mango.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Vegetarian Sushi Rolls',
            quantity: '1 cup sushi rice, 1/2 avocado, 1/2 cup cucumber, 4 nori sheets',
            preparation: 'Prepare sushi rolls with rice, avocado, and cucumber.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '50g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Stuffed Zucchini',
            quantity: '2 zucchinis, 1/2 cup quinoa, 1/4 cup cheese',
            preparation: 'Stuff zucchinis with quinoa and cheese. Bake until tender.',
            macronutrients: { protein: '15g', fat: '10g', carbs: '35g' }
          }
        },
        averageMacronutrients: { protein: '38g', fat: '35g', carbs: '145g' },
        tips: 'Incorporate a variety of fruits, vegetables, and whole grains to maintain a balanced diet.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Almond Butter and Banana Toast',
            quantity: '2 slices whole grain bread, 2 tbsp almond butter, 1 banana',
            preparation: 'Spread almond butter on toast and top with banana slices.',
            macronutrients: { protein: '10g', fat: '15g', carbs: '40g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Lentil Soup',
            quantity: '1 cup lentils, 1 cup diced tomatoes, 1/2 cup carrots',
            preparation: 'Simmer lentils with tomatoes and carrots.',
            macronutrients: { protein: '18g', fat: '5g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Vegetarian Lasagna',
            quantity: '1 cup lasagna noodles, 1/2 cup ricotta cheese, 1/2 cup spinach, 1/2 cup marinara sauce',
            preparation: 'Layer noodles with ricotta cheese, spinach, and marinara sauce. Bake until bubbly.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '50g' }
          }
        },
        averageMacronutrients: { protein: '56g', fat: '40g', carbs: '150g' },
        tips: 'Include legumes and whole grains to ensure a rich source of protein and fiber.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Fruit Salad with Yogurt',
            quantity: '1 cup mixed fruit, 1/2 cup Greek yogurt',
            preparation: 'Combine fruit with Greek yogurt.',
            macronutrients: { protein: '10g', fat: '5g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Quinoa Salad',
            quantity: '1 cup quinoa, 1/2 cup chickpeas, 1/4 cup red bell pepper',
            preparation: 'Mix quinoa with chickpeas and red bell pepper.',
            macronutrients: { protein: '15g', fat: '5g', carbs: '45g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Vegetable Paella',
            quantity: '1 cup paella rice, 1 cup mixed vegetables',
            preparation: 'Cook rice with mixed vegetables and spices.',
            macronutrients: { protein: '12g', fat: '10g', carbs: '50g' }
          }
        },
        averageMacronutrients: { protein: '42g', fat: '35g', carbs: '145g' },
        tips: 'Balance meals with a variety of vegetables and whole grains for optimal health.'
      }
    ]
  },
  {
    id: 9,
    title: 'Whole30 Diet',
    description: 'A 30-day diet that eliminates sugar, alcohol, grains, legumes, soy, and dairy to reset eating habits and identify food sensitivities.',
    image: '/assets/Diets/whole30.png',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Sweet Potato Hash with Eggs',
            quantity: '1 cup sweet potato, 2 eggs, 1/2 cup bell peppers, 1/4 cup onions',
            preparation: 'Cook sweet potato, bell peppers, and onions in a skillet. Top with fried eggs.',
            macronutrients: { protein: '16g', fat: '15g', carbs: '35g' }
          },
          morningSnack: {
            meal: 'Apple Slices with Almond Butter',
            quantity: '1 apple, 2 tbsp almond butter',
            preparation: 'Dip apple slices in almond butter.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '25g' }
          },
          lunch: {
            meal: 'Grilled Chicken Salad',
            quantity: '1 cup mixed greens, 150g grilled chicken, 1/2 avocado, 1 tbsp olive oil',
            preparation: 'Top mixed greens with grilled chicken, avocado, and olive oil.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Baked Salmon with Roasted Vegetables',
            quantity: '150g salmon, 1 cup mixed roasted vegetables',
            preparation: 'Bake salmon and serve with roasted vegetables.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '71g', fat: '70g', carbs: '90g' },
        tips: 'Focus on whole, unprocessed foods and avoid common allergens and additives.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Avocado and Egg Stuffed Sweet Potato',
            quantity: '1 large sweet potato, 1/2 avocado, 2 eggs',
            preparation: 'Bake sweet potato, scoop out some flesh, and top with mashed avocado and poached eggs.',
            macronutrients: { protein: '14g', fat: '20g', carbs: '45g' }
          },
          morningSnack: {
            meal: 'Carrot Sticks with Guacamole',
            quantity: '1 cup carrot sticks, 1/2 cup guacamole',
            preparation: 'Dip carrot sticks into guacamole.',
            macronutrients: { protein: '2g', fat: '15g', carbs: '20g' }
          },
          lunch: {
            meal: 'Beef and Broccoli Stir-Fry',
            quantity: '150g beef, 1 cup broccoli, 1 tbsp coconut aminos',
            preparation: 'Stir-fry beef and broccoli with coconut aminos.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Zucchini Noodles with Tomato Sauce',
            quantity: '1 cup zucchini noodles, 1/2 cup tomato sauce, 1/4 cup ground turkey',
            preparation: 'Cook zucchini noodles and top with tomato sauce and ground turkey.',
            macronutrients: { protein: '20g', fat: '10g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '61g', fat: '60g', carbs: '95g' },
        tips: 'Use herbs and spices to add flavor to your meals without using processed ingredients.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Spinach and Mushroom Omelette',
            quantity: '2 eggs, 1/2 cup spinach, 1/4 cup mushrooms',
            preparation: 'Make an omelette with spinach and mushrooms.',
            macronutrients: { protein: '14g', fat: '12g', carbs: '8g' }
          },
          morningSnack: {
            meal: 'Mixed Nuts',
            quantity: '1/4 cup',
            preparation: 'Enjoy mixed nuts as a snack.',
            macronutrients: { protein: '6g', fat: '15g', carbs: '10g' }
          },
          lunch: {
            meal: 'Chicken and Avocado Lettuce Wraps',
            quantity: '150g grilled chicken, 1/2 avocado, 4 lettuce leaves',
            preparation: 'Wrap chicken and avocado in lettuce leaves.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Coconut Curry Shrimp',
            quantity: '150g shrimp, 1/2 cup coconut milk, 1 cup mixed vegetables',
            preparation: 'Cook shrimp and vegetables in coconut milk with curry spices.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '65g', fat: '57g', carbs: '48g' },
        tips: 'Focus on nutrient-dense foods and avoid added sugars and grains to stay compliant with Whole30 guidelines.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Fruit Smoothie',
            quantity: '1 cup almond milk, 1 banana, 1/2 cup berries',
            preparation: 'Blend almond milk, banana, and berries.',
            macronutrients: { protein: '5g', fat: '5g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Apple with Cashew Butter',
            quantity: '1 apple, 2 tbsp cashew butter',
            preparation: 'Dip apple slices in cashew butter.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '25g' }
          },
          lunch: {
            meal: 'Turkey and Vegetable Skillet',
            quantity: '150g ground turkey, 1 cup mixed vegetables',
            preparation: 'Cook ground turkey and vegetables in a skillet.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Roasted Chicken with Cauliflower Rice',
            quantity: '150g roasted chicken, 1 cup cauliflower rice',
            preparation: 'Serve roasted chicken with cauliflower rice.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '60g', fat: '55g', carbs: '85g' },
        tips: "Include a variety of proteins and vegetables to ensure you're getting a broad range of nutrients."
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Egg Muffins',
            quantity: '3 egg muffins (made with eggs, spinach, and bell peppers)',
            preparation: 'Bake a mixture of eggs, spinach, and bell peppers in muffin tins.',
            macronutrients: { protein: '18g', fat: '15g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Grilled Steak with Sweet Potato Fries',
            quantity: '150g steak, 1 medium sweet potato',
            preparation: 'Grill steak and serve with baked sweet potato fries.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '40g' }
          },
          eveSnack: {
            meal: 'Cucumber Slices with Guacamole',
            quantity: '1 cup cucumber slices, 1/2 cup guacamole',
            preparation: 'Dip cucumber slices into guacamole.',
            macronutrients: { protein: '2g', fat: '15g', carbs: '10g' }
          },
          dinner: {
            meal: 'Stuffed Acorn Squash',
            quantity: '1 acorn squash, 1/2 cup ground turkey, 1/2 cup cranberries',
            preparation: 'Stuff acorn squash with ground turkey and cranberries. Bake until tender.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '70g', fat: '65g', carbs: '90g' },
        tips: 'Make sure to vary your vegetables and protein sources to keep meals interesting and nutritious.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Chia Seed Pudding with Fresh Berries',
            quantity: '1/4 cup chia seeds, 1 cup almond milk, 1/2 cup mixed berries',
            preparation: 'Mix chia seeds with almond milk and refrigerate overnight. Top with berries.',
            macronutrients: { protein: '8g', fat: '15g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'Celery Sticks with Almond Butter',
            quantity: '1 cup celery sticks, 2 tbsp almond butter',
            preparation: 'Dip celery sticks into almond butter.',
            macronutrients: { protein: '5g', fat: '15g', carbs: '10g' }
          },
          lunch: {
            meal: 'Salmon and Asparagus',
            quantity: '150g salmon, 1 cup asparagus',
            preparation: 'Bake salmon and asparagus together.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Pork Tenderloin with Brussels Sprouts',
            quantity: '150g pork tenderloin, 1 cup Brussels sprouts',
            preparation: 'Roast pork tenderloin and Brussels sprouts.',
            macronutrients: { protein: '25g', fat: '20g', carbs: '15g' }
          }
        },
        averageMacronutrients: { protein: '63g', fat: '60g', carbs: '65g' },
        tips: 'Plan meals ahead of time to avoid falling back on non-compliant foods.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Baked Egg in Avocado',
            quantity: '1 avocado, 2 eggs',
            preparation: 'Bake eggs in avocado halves.',
            macronutrients: { protein: '12g', fat: '20g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'Fruit and Nut Energy Balls',
            quantity: '3 energy balls (made with dates, nuts, and cocoa)',
            preparation: 'Blend dates, nuts, and cocoa into balls.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '20g' }
          },
          lunch: {
            meal: 'Cobb Salad',
            quantity: '1 cup mixed greens, 100g grilled chicken, 1/2 avocado, 2 boiled eggs',
            preparation: 'Top mixed greens with grilled chicken, avocado, and sliced boiled eggs.',
            macronutrients: { protein: '30g', fat: '25g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Chicken Stir-Fry with Vegetables',
            quantity: '150g chicken, 1 cup mixed vegetables',
            preparation: 'Stir-fry chicken with vegetables.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '72g', fat: '70g', carbs: '65g' },
        tips: 'Adhere strictly to Whole30 rules and explore new recipes to keep meals exciting and compliant.'
      }
    ]
  },
  {
    id: 10,
    title: 'Zone Diet',
    description: 'A diet that focuses on balancing macronutrients (40% carbs, 30% protein, 30% fat) to manage inflammation and promote optimal health.',
    image: '/assets/Diets/zone.jpg',
    itinerary: [
      {
        day: 1,
        meals: {
          breakfast: {
            meal: 'Scrambled Eggs with Spinach and Oatmeal',
            quantity: '2 eggs, 1 cup spinach, 1/2 cup oatmeal',
            preparation: 'Scramble eggs with spinach. Serve with cooked oatmeal.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '35g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken Breast Salad with Olive Oil',
            quantity: '150g chicken breast, 1 cup mixed greens, 1 tbsp olive oil',
            preparation: 'Top mixed greens with grilled chicken and drizzle with olive oil.',
            macronutrients: { protein: '30g', fat: '10g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Apple with Almonds',
            quantity: '1 apple, 1/4 cup almonds',
            preparation: 'Enjoy apple slices with almonds.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '20g' }
          },
          dinner: {
            meal: 'Grilled Salmon with Quinoa and Broccoli',
            quantity: '150g salmon, 1/2 cup quinoa, 1 cup broccoli',
            preparation: 'Grill salmon and serve with quinoa and steamed broccoli.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '80g', fat: '50g', carbs: '100g' },
        tips: 'Aim to balance each meal with the correct macronutrient ratio and avoid high-glycemic index foods.'
      },
      {
        day: 2,
        meals: {
          breakfast: {
            meal: 'Greek Yogurt with Berries and Nuts',
            quantity: '1 cup Greek yogurt, 1/2 cup berries, 1/4 cup nuts',
            preparation: 'Top Greek yogurt with berries and nuts.',
            macronutrients: { protein: '20g', fat: '10g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Turkey and Avocado Wrap',
            quantity: '150g turkey, 1/2 avocado, 1 whole wheat wrap',
            preparation: 'Wrap turkey and avocado in a whole wheat wrap.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '30g' }
          },
          eveSnack: {
            meal: 'Cucumber Slices with Hummus',
            quantity: '1 cup cucumber slices, 1/4 cup hummus',
            preparation: 'Dip cucumber slices into hummus.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '10g' }
          },
          dinner: {
            meal: 'Stir-Fried Beef with Bell Peppers and Brown Rice',
            quantity: '150g beef, 1 cup bell peppers, 1/2 cup brown rice',
            preparation: 'Stir-fry beef with bell peppers and serve with brown rice.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '35g' }
          }
        },
        averageMacronutrients: { protein: '80g', fat: '50g', carbs: '105g' },
        tips: 'Balance your meals by including a mix of protein, carbohydrates, and fats to keep hunger at bay and maintain stable blood sugar levels.'
      },
      {
        day: 3,
        meals: {
          breakfast: {
            meal: 'Smoothie with Spinach, Banana, and Protein Powder',
            quantity: '1 cup spinach, 1 banana, 1 scoop protein powder',
            preparation: 'Blend spinach, banana, and protein powder with water or almond milk.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Tuna Salad with Mixed Greens',
            quantity: '1 can tuna, 1 cup mixed greens, 1 tbsp olive oil',
            preparation: 'Mix tuna with greens and drizzle with olive oil.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'Orange with Walnuts',
            quantity: '1 orange, 1/4 cup walnuts',
            preparation: 'Enjoy orange segments with walnuts.',
            macronutrients: { protein: '4g', fat: '10g', carbs: '25g' }
          },
          dinner: {
            meal: 'Baked Chicken Thighs with Sweet Potato and Green Beans',
            quantity: '150g chicken thighs, 1 cup sweet potato, 1 cup green beans',
            preparation: 'Bake chicken thighs and serve with roasted sweet potato and green beans.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '79g', fat: '45g', carbs: '95g' },
        tips: 'Ensure that each meal has a balanced ratio of macronutrients to support overall health and energy levels.'
      },
      {
        day: 4,
        meals: {
          breakfast: {
            meal: 'Egg White Omelette with Tomatoes and Mushrooms',
            quantity: '4 egg whites, 1/2 cup tomatoes, 1/2 cup mushrooms',
            preparation: 'Cook egg whites with tomatoes and mushrooms.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '10g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken and Vegetable Soup',
            quantity: '1 cup chicken, 1 cup mixed vegetables',
            preparation: 'Cook chicken and vegetables in a broth.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Strawberries with Coconut Flakes',
            quantity: '1/2 cup strawberries, 1/4 cup coconut flakes',
            preparation: 'Top strawberries with coconut flakes.',
            macronutrients: { protein: '2g', fat: '10g', carbs: '20g' }
          },
          dinner: {
            meal: 'Grilled Pork Chops with Cauliflower Mash',
            quantity: '150g pork chops, 1 cup cauliflower mash',
            preparation: 'Grill pork chops and serve with cauliflower mash.',
            macronutrients: { protein: '30g', fat: '20g', carbs: '20g' }
          }
        },
        averageMacronutrients: { protein: '77g', fat: '45g', carbs: '65g' },
        tips: 'Incorporate a variety of lean proteins and fresh vegetables to maintain a balanced intake of nutrients.'
      },
      {
        day: 5,
        meals: {
          breakfast: {
            meal: 'Overnight Oats with Almonds and Chia Seeds',
            quantity: '1/2 cup oats, 1/4 cup almonds, 1 tbsp chia seeds',
            preparation: 'Mix oats with almond milk and chia seeds. Refrigerate overnight. Top with almonds.',
            macronutrients: { protein: '15g', fat: '15g', carbs: '35g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Salmon Salad with Avocado and Lemon Dressing',
            quantity: '150g salmon, 1 cup mixed greens, 1/2 avocado, 1 tbsp lemon dressing',
            preparation: 'Combine salmon with mixed greens and avocado. Drizzle with lemon dressing.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '15g' }
          },
          eveSnack: {
            meal: 'Baby Carrots with Hummus',
            quantity: '1 cup baby carrots, 1/4 cup hummus',
            preparation: 'Dip baby carrots in hummus.',
            macronutrients: { protein: '5g', fat: '10g', carbs: '15g' }
          },
          dinner: {
            meal: 'Stuffed Bell Peppers with Ground Turkey',
            quantity: '2 bell peppers, 150g ground turkey, 1/2 cup brown rice',
            preparation: 'Stuff bell peppers with ground turkey and brown rice. Bake until tender.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '70g', fat: '55g', carbs: '95g' },
        tips: 'Focus on achieving the ideal macronutrient ratio in every meal for optimal energy and health.'
      },
      {
        day: 6,
        meals: {
          breakfast: {
            meal: 'Berry Smoothie with Protein Powder',
            quantity: '1 cup mixed berries, 1 scoop protein powder, 1 cup almond milk',
            preparation: 'Blend berries, protein powder, and almond milk.',
            macronutrients: { protein: '20g', fat: '5g', carbs: '30g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Tuna and Avocado Salad',
            quantity: '1 can tuna, 1/2 avocado, 1 cup mixed greens',
            preparation: 'Mix tuna with avocado and greens.',
            macronutrients: { protein: '25g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Baked Chicken with Sweet Potato and Asparagus',
            quantity: '150g chicken, 1 cup sweet potato, 1 cup asparagus',
            preparation: 'Bake chicken and serve with roasted sweet potato and asparagus.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '90g', fat: '45g', carbs: '85g' },
        tips: 'Maintain portion control and keep track of your macronutrient ratios for balanced energy throughout the day.'
      },
      {
        day: 7,
        meals: {
          breakfast: {
            meal: 'Egg and Veggie Breakfast Muffins',
            quantity: '3 egg muffins (made with eggs and mixed vegetables)',
            preparation: 'Bake eggs with vegetables in muffin tins.',
            macronutrients: { protein: '20g', fat: '15g', carbs: '15g' }
          },
          morningSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          lunch: {
            meal: 'Chicken Caesar Salad',
            quantity: '150g grilled chicken, 1 cup Romaine lettuce, 1/4 cup Parmesan cheese, Caesar dressing',
            preparation: 'Combine chicken with lettuce, Parmesan, and dressing.',
            macronutrients: { protein: '30g', fat: '15g', carbs: '10g' }
          },
          eveSnack: {
            meal: 'N/A',
            quantity: 'N/A',
            preparation: 'N/A',
            macronutrients: { protein: 'N/A', fat: 'N/A', carbs: 'N/A' }
          },
          dinner: {
            meal: 'Grilled Shrimp with Quinoa and Spinach',
            quantity: '150g shrimp, 1/2 cup quinoa, 1 cup spinach',
            preparation: 'Grill shrimp and serve with quinoa and sautéed spinach.',
            macronutrients: { protein: '25g', fat: '10g', carbs: '30g' }
          }
        },
        averageMacronutrients: { protein: '85g', fat: '45g', carbs: '80g' },
        tips: 'Adjust portions as needed to maintain the correct macronutrient balance and stay satisfied.'
      }
    ]
  },
];

export default dietPlans;