<template>
  <div class="Recipe">

    <section id="opening" class="parallax-background">
    
    
            <div class="space-20"></div>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <!-- <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> -->
                </button>
                <!-- <a class="navbar-brand" href="#"><img src="images/logo-inline.png" alt="logo" class="inline-logo"> <img src="images/logo-collapsed.png" alt="logo" class="collapsed-logo"></a> -->
            
            <div class="navbar-collapse collapse">
               <!--  <ul class="nav navbar-nav">
                    <li><a href="home">HOME</a></li>
                    <li><a href="search">ABOUT</a></li>
                    <li><a href="menu">MENU</a></li>
                    <li><a href="menu">SEARCH</a></li> -->
                  <!--   <li class="active"><a href="gallery.html">GALLERY</a></li> -->
                   
                
              <!--   </ul> -->
            </div><!--/.nav-collapse -->
       <!-- / container -->
    </section>
<!-- / header -->

<!-- content -->
<div class="container">
  <form class="form-inline" v-on:submit.prevent="createRecipe()">
            <div class="form-group mb-2">
             </div>
             <div class="form-group sm-3 mb-2 text-black">
        
               user_recipes: <input type="text" class="form-control" v-model="newRecipe">
              <button class="btn btn-primary mb-2"> Recipes </button>
           </div>
    </form>
  
  <div class="col-xs-6 col-md-3 gallery-item">

             <figure>
                    <div class="hovereffect">
                       <div v-for=" media in recipe1">

                          <p>Title:{{media.title}}</p>
                          
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                          <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-rounded" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                           
                        </div>
                    </div>
                    <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
                        
             </figure>
            </div>  

  </div>  

 
  <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
                       <div v-for=" media in recipe3">

                          <p>Title:{{media.title}}</p>
                          <p>link:{{media.link}}</p> 
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                           <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-rounded" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                           
                        </div>
                    </div>
                    <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
                        
                </figure>
            </div>  

<div class="col-xs-6 col-md-3 gallery-item text-black">

                <figure>
                    <div class="hovereffect">
                       <div v-for=" media in recipe3">
                          <div>Title:{{media.title}}</div>
                          <div>link:{{media.link}}</div> 
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                           <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-rounded" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                        </div>
                    </div>
                    <div class="overlay">
                    <div class="hovereffect-title">
                                    
                    </div>
                    </div>
                       
                </figure>
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
      recipe1: [],
      recipe2: [],
      recipe3: [],
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
      this.recipe1.push(this.media[0])
      this.recipe2.push(this.media[1])
      this.recipe3.push(this.media[2])
      this.recipe1.push(this.media[3])
      this.recipe2.push(this.media[4])
      this.recipe3.push(this.media[5])
      this.recipe1.push(this.media[6])
      this.recipe2.push(this.media[7])
      this.recipe3.push(this.media[8])
      
      
    })
  }
}  
};
</script>