<template>
  <div class="Recipe">

    <section id="opening" class="parallax-background">
    <div class="container">
    
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
        </div><!-- / container -->
    </section>

<!-- / header -->

<!-- content -->

  <form class="form-inline" v-on:submit.prevent="createRecipe()">
            <div class="form-group mb-2">
             </div>
             <div class="form-group sm-3 mb-2">
        
          user_recipes: <input type="text" class="form-control" v-model="newRecipe">
                           <button class="form-control"> Show me recipe</button>
      </div>
    </form>
    
  <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
                       <div v-for=" media in media">
                          <p>Title:{{media.title}}</p>
                          <p>link:{{media.link}}</p> 
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                           <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-responsive" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>  

    

 
  <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
                       <div v-for=" media in media">
                          <p>Title:{{media.title}}</p>
                          <p>link:{{media.link}}</p> 
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                           <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-responsive" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>  


  <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
                       <div v-for=" media in media">
                          <p>Title:{{media.title}}</p>
                          <p>link:{{media.link}}</p> 
                         <router-link v-bind:to="`/media/${media.id}/`"></router-link> 
                           <a class="open-gallery" v-bind:href="media.link"> {{media.title}} </a>
                          <p>image: {{media.image_url}}</p>
                           <img class="img-responsive" width="150px" v-bind:src="media.image" v-bind:alt="media.title"/> 
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
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