

<template>
  <div class="home">
    <h1>{{ text.text }}</h1>
    <!-- <div v-for=" text in text"> -->
    <p>text:{{text}}</p>
  </div>
</div>


</template>


<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to Foodows",
      joke: [],
      text: ""
     
   };
  },

 created: function() {
    console.log('i am in created');
    axios.get("/api/foodows").then(response => {
      console.log(response.data);
      this.text = response.data.text;
    })
  },
  
  
   
  
  } 
 

</script>
