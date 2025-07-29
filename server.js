const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sampleFoodData = [
  { id: 1, title: "Spaghetti Carbonara", restaurantChain: "Italian Kitchen", servingSize: "1 plate", image: "https://via.placeholder.com/300x200?text=Pasta", calories: 650, protein: 25, fat: 30, carbs: 70, diet: "pasta" },
  { id: 2, title: "Chicken Salad", restaurantChain: "Healthy Bites", servingSize: "1 bowl", image: "https://via.placeholder.com/300x200?text=Salad", calories: 350, protein: 35, fat: 15, carbs: 20, diet: "salad" },
  { id: 3, title: "Beef Burger", restaurantChain: "Burger House", servingSize: "1 burger", image: "https://via.placeholder.com/300x200?text=Burger", calories: 800, protein: 40, fat: 45, carbs: 60, diet: "burger" },
  { id: 4, title: "Veggie Stir Fry", restaurantChain: "Asian Fusion", servingSize: "1 plate", image: "https://via.placeholder.com/300x200?text=Stir+Fry", calories: 400, protein: 15, fat: 20, carbs: 45, diet: "vegetarian" },
  { id: 5, title: "Salmon Rice", restaurantChain: "Seafood Delight", servingSize: "1 plate", image: "https://via.placeholder.com/300x200?text=Salmon", calories: 550, protein: 45, fat: 25, carbs: 50, diet: "seafood" }
];

app.get('/api/foodows/search', (req, res) => {
  const { diet, calorie_max, carb_max, fat_max, protien_max } = req.query;
  console.log('Search request:', req.query);
  
  let filteredItems = sampleFoodData;
  
  if (diet && diet.trim() !== '') {
    filteredItems = filteredItems.filter(item => 
      item.diet.toLowerCase().includes(diet.toLowerCase()) ||
      item.title.toLowerCase().includes(diet.toLowerCase())
    );
  }
  
  if (calorie_max) {
    filteredItems = filteredItems.filter(item => item.calories <= parseInt(calorie_max));
  }
  
  res.json({ menuItems: filteredItems, count: filteredItems.length });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Foodows API running' });
});

app.listen(port, () => {
  console.log(`Foodows API server running on http://localhost:${port}`);
});
