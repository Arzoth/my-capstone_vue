<template>
  <div class="menu">
    
    <p>time_frame: <input type="text" v-model="newMenuTimeFrame"></p>
    <p>Calorie: <input type="text" v-model="newMenuTargetCalories"></p>
    <p>Diet: <input type="text" v-model="newMenuDiet"></p>
    <p>Exclude: <input type="text" v-model="newMenuExclude"></p>
     <button v-on:click="createMenu()">Show me menu</button>
    <div v-if="newMenuTimeFrame == 'day' ">
    <div v-for=" meal in meals">
      <p>Id: {{meal.id}}</p>
      <p>Title:{{meal.title}}</p>
      <p>Prep_Time:{{meal.readyInMinutes}}</p>
      <p>ServingSize:{{meal.serving}}</p>
      <p>image: {{meal.image_url}}</p>
      <img  v-bind:src="`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`" v-bind:alt="meal.title"/> 
     </div>
      </div>
      <div v-else-if="newMenuTimeFrame == 'week' ">
      <div v-for=" item in items"> 
      <p>day: {{item.day}}</p>
      <p>slot: {{item.slot}}</p>
      <p>type: {{item.type}}</p>
      <p>title: {{item.value.title}}</p>
      <img  v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
      
    </div>
  </div>
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
      items: [],
      newMenuTimeFrame: "week",
      newMenuTargetCalories: "1400",
      newMenuDiet: "hcg",
      newMenuExclude: "olives",
      
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

          console.log(response.data);
          this.meals = response.data;
          console.log(response.data);
          this.items = response.data;

          
    
        })
      }
     }
   };
  

</script>