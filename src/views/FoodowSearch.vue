<template>
  <div class="Search">
     <h1>{{ dietPlans }}</h1>
  <form v-on:submit.prevent="FindMenu()">
   

    <p>Diet: <input type="text" v-model="newDietPlanDiet"></p>
    <p>Calorie: <input type="text" v-model="newDietPlanCalorie"></p>
    <p>Protein: <input type="text" v-model="newDietPlanProtein"></p>
    <p>Fat: <input type="text" v-model="newDietPlanFat"></p>
    <p>Carb: <input type="text" v-model="newDietPlanCarb"></p>
     <!-- <input type="submit" value="Submit"></input> -->
     button v-on:
      </form>

     <div v-for=" dietPlan in dietPlans">
      <p>Title:{{dietPlan.title}}</p>
      <p>RestaurantChain:{{dietPlan.restaurantChain}}</p>
      <p>ServingSize:{{dietPlan.servingSize}}</p>
      <p>image: {{dietPlan.image_url}}</p>
      <img width="150px" v-bind:src="dietPlan.image_url" v-bind:alt="dietPlan.image"/> 
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
      dietPlans: "",
      newDietPlanCalorie: "",
      newDietPlanProtein: "",
      newDietPlanFat: "",
      newDietPlanCarb: "",
      newDietPlanDiet: "",
    };
  },
  // created: function() { 
  //   console.log('i am in created');
  //   axios.get("/api/foodows/").then(response => {
  //   console.log(response.data);
  //   this.newDietPlan = response.data.restaurantChain;
  //   this.newDietPlanCarb = response.data.carb_max;
  //   this.newDietPlanCalorie = response.data.calorie_max;
  //   this.newDietPlanFat = response.data.fat_max;
  //   this.newDietPlanProtein = response.data.protien_max;
  
  //   })
  // },
  methods: {
    FindMenu: function() {
      console.log('searching');
      // get some data
      var FindMenu = {
        diet: this.newDietPlanDiet,
        Calorie: this.newDietPlanCalorie,
        Carb: this.newDietPlanCarb,
        Fat: this.newDietPlanFat,
        Protein: this.newDietPlanProtein
      }
        axios.get('/api/foodows/search', FindMenu).then(response => {
        console.log('hello')
        console.log(response.data);
        // this.$router.push('/search');
      })
      }
     }
   };
  

</script>