<template>
  <div class="Nutritions">

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
       
    </section>

<!-- / header -->

<!-- content -->
<div class="container">
  <form class="form-inline" v-on:submit.prevent="createNutrition()">
            
             <div class="form-group sm-3 mb-2 text-black">
        
          Title: <input type="text" class="form-control" v-model="newNutrition">
          <button class="btn btn-primary mb-2"> Submit</button>
      </div>
    </form>
    <section id="opening" class="parallax-background">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 opening-box">
                <div class="page-header wsub dark text-center">
                   
                    <div class="separator-line-center medium-spacing">&nbsp;</div>
                </div><!-- / page-header -->
                <div class="row">
                    <div class="col-md-6 opening-center">
                       
      
                     
                        
                    </div><!-- / opening-left -->
                    <div class="col-md-6 opening">
                         <h3 class="text-primary opening-title space-bottom-30">Here is the Nutrition info</h3>
                        <p class="opening-hours"></p>
                        
                        <h3 class="text-primary opening-title space-bottom-30">Carbs: {{recipesUsed.carbs.value }} <span v-if="completed"> gram </span> </h3>
                        <h3 class="text-primary opening-title space-bottom-30">Fat: {{recipesUsed.fat.value}} <span v-if="completed"> gram </span></h3>
                        <h3 class="text-primary opening-title space-bottom-30">Calories:{{recipesUsed.calories.value}} <span v-if="completed"> gram </span> </h3>
                        <h3 class="text-primary opening-title space-bottom-30">Protein:{{recipesUsed.protein.value}} <span v-if="completed"> gram </span> </h3>
                    </div><!-- / opening-right -->
                    <div class="col-xs-12">
                       
                    </div>
                </div><!-- / row -->
            </div><!-- / opening-box -->
        </div><!-- / row -->
    </div><!-- / container -->
</section>
<!-- / opening -->
  
  

  </div>  
</div>
 
  

 

   
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to index!",
      recipesUsed: {protein: {value: ""}, carbs: {value: ""}, calories: {value: ""}, fat: {value: ""}},
      newNutrition: "",
      completed: false,

    };
  },
  methods: {
  createNutrition: function() {
    console.log('i am in created');
    axios.get("/api/foodows/nutritions", {
      params: {
        title: this.newNutrition
      }
    })

      .then(response => {
      console.log(response.data);
      this.recipesUsed = response.data;
      this.completed = true
    })
  }
}  
};
</script>