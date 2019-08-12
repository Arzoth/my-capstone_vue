<template>
  <div class="index">
    <h1>{{ menuItems.menuItems }}</h1>
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

<style>
</style>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to index!",
      menuItems: "",
    };
  },
  created: function() {
    console.log('i am in created');
    axios.get("/api/foodows").then(response => {
      console.log(response.data);
      this.menuItems = response.data.menuItems;
    })
  },
  methods: {}
};
</script>