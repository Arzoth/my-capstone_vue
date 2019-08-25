<template>
  <div class="search">
    
    <!-- <h1>{{ menuItems.menuItems }}</h1> -->
    <p>FoodItem: <input type="text" v-model="newMenuItemDiet"></p>
    <p>Calorie: <input type="text" v-model="newMenuItemCalorie"></p>
    <p>Protein: <input type="text" v-model="newMenuItemProtein"></p>
    <p>Fat: <input type="text" v-model="newMenuItemFat"></p>
    <p>Carb: <input type="text" v-model="newMenuItemCarb"></p>
     <button v-on:click="createMenu()">Show me Options</button>

    <div v-for=" menuItem in menuItems">
      <p>Title:{{menuItem.title}}</p>
      <p>RestaurantChain:{{menuItem.restaurantChain}}</p>
      <p>ServingSize:{{menuItem.servingSize}}</p>
      <p>image: {{menuItem.image_url}}</p>
      <img width="150px" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/> 
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
      menuItems: "",
      newMenuItemCalorie: "",
      newMenuItemProtein: '',
      newMenuItemFat: "",
      newMenuItemCarb: "",
      newMenuItemDiet: "",
   };
  },

  methods: {
    createMenu: function() {
      console.log('creating menu');
        
      axios.get("api/foodows/search", {
        params: {
          FoodItem: this.newMenuItemDiet,
          calorie_max: this.newMenuItemCalorie,
          carb_max: this.newMenuItemCarb,
          fat_max: this.newMenuItemFat,
          protien_max: this.newMenuItemProtein
        }
      })
  
        .then(response => {

          console.log(response.data.menuItems);
          this.menuItems = response.data.menuItems;
    
        })
      }
     }
   };
  

</script>