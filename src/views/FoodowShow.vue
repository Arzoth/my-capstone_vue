<template>
  <div class="Show">
    <h1>id: {{ menuItem.id }}</h1>
    <h1>title: {{ menuItem.title }}</h1>
    <h1>restaurantChain: {{ menuItem.restaurantChain }}</h1>
    <h1>servingSize: {{ menuItem.servingSize }}</h1>
    <h1>image: {{ menuItem.image }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to Show!",
      menuItem: {}
    };
  },
  created: function() {
    // console.log(this.$route.params.id);
    axios.get(`/api/foodows/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.menuItem = response.data;
    })
  }
};
</script>