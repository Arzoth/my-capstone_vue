<template>
  <div class="Recipe">
    <p>user_recipes: <input type="text" v-model="newRecipe"></p>
     <button v-on:click="createRecipe()">Show me recipe</button>
    <h1>{{ media.media }}</h1>
    <div v-for=" media in media">
      <p>Title:{{media.title}}</p>
      <p>link:{{media.link}}</p> 
     <!--  <router-link v-bind:to=`/media/${media.id}/`></router-link> -->
       <a v-bind:href="media.link"> {{media.title}} </a>
      <p>image: {{media.image_url}}</p>
      <img width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
      <hr>
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to index!",
      media: "",
      newRecipe: "",
    };
  },
  methods: {
  createRecipe: function() {
    console.log('i am in created');
    axios.get("/api/recipes", {
      params: {
        user_recipes: this.newRecipe
      }
    })

      .then(response => {
      console.log(response.data.media);
      this.media = response.data.media;
    })
  }
}  
};
</script>