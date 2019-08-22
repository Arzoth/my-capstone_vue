<template>
  <div class="menu">
    <img src="assets/foodow.png">
    <p>time_frame: <input type="text" v-model="newMenuTimeFrame"></p>
    <p>Calorie: <input type="text" v-model="newMenuTargetCalories"></p>
    <p>Diet: <input type="text" v-model="newMenuDiet"></p>
    <p>Exclude: <input type="text" v-model="newMenuExclude"></p>
     <button v-on:click="createMenu()">Show me menu</button>

    <div v-for=" meal in meals">
      <p>Id: {{meal.id}}</p>
      <p>Title:{{meal.title}}</p>
      <p>Prep_Time:{{meal.readyInMinutes}}</p>
      <p>ServingSize:{{meal.serving}}</p>
      <p>image: {{meal.image_url}}</p>
      <img  v-bind:src="('https://spoonacular.com/recipeImages/`${meal.id}` + 556x370.jpg')" v-bind:alt="meal.title"/> 

      <hr>

  
    </div>
  </div>  
</template>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      message: "Welcome to Foodows",
      meals: [],
      newMenuTimeFrame: "",
      newMenuTargetCalories: '',
      newMenuDiet: "",
      newMenuExclude: "",
      
   };
  },

  methods: {
    createMenu: function() {
      console.log('creating menu');
    
        
      axios.get("api/menus", {
        params: {
          timeFrame: this.newMenuTimeFrame,
          targetCalories: this.newMenuTargetCalories,
          diet: this.newMenuDiet,
          exclude: this.newMenuExclude
        }
      })
  
        .then(response => {

          console.log(response.data.meals);
          this.meals = response.data.meals;
          
    
        })
      }
     }
   };
  

</script>