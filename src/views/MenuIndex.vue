<template>
   <div class="menu">

    <section id="opening" class="parallax-background">
    <div class="container">
      
            <div class="space-10">&nbsp;</div>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                </button>
              
           
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

          <form class="form-inline" v-on:submit.prevent="createMenu()">
            <div class="form-group mb-2">
             </div>
             <div class="form-group sm-3 mb-2">
       
         time_frame: <input type="text" class="form-control" v-model="newMenuTimeFrame">
          Calorie: <input type="text" class="form-control" v-model="newMenuTargetCalories">
          Diet: <input type="text" class="form-control" v-model="newMenuDiet">
          Exclude: <input type="text"  class="form-control" v-model="newMenuExclude">
      
        <button type="submit" class="btn btn-primary mb-2" >Show me menu</button>
      </div>
        </form>
        <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
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
                              <p>type: {{item.type}}</p>
                              <p>title: {{item.value.title}}</p>
                              <img  v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
            </div>  
        <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
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
                              <p>type: {{item.type}}</p>
                              <p>title: {{item.value.title}}</p>
                              <img  v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
            </div>
                <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
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
                              <p>type: {{item.type}}</p>
                              <p>title: {{item.value.title}}</p>
                              <img  v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
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