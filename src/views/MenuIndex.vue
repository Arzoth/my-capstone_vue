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
       </div>
    </section>
    <div class="container">

          <form class="form-inline" v-on:submit.prevent="createMenu()">
            <div class="form-group mb-2">
             </div>
             <div class="form-group sm-3 mb-2 text-black">
       
         Time Frame: <input type="text" class="form-control" v-model="newMenuTimeFrame">
          Calorie: <input type="text" class="form-control" v-model="newMenuTargetCalories">
          Diet: <input type="text" class="form-control" v-model="newMenuDiet">
          Exclude: <input type="text"  class="form-control" v-model="newMenuExclude">
    
        <button type="submit" class="btn btn-primary mb-2" >Create Menu</button>
      </div>

        </form>
         </div>
         <div class="container">
         <div>
            <div class="col-xs-6 col-md-3 gallery-item text-black ">

                <figure>
                    <div class="hovereffect">
                       <div v-if="newMenuTimeFrame == 'day' ">
                            <div v-for=" meal in breakfastMeals">
                              
                            
                              
                              <img class="rounded img-thumbnail" v-bind:src="`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`" v-bind:alt="meal.title"/> 
                                <p>Title:{{meal.title}}</p>
                              <p>Prep_Time:{{meal.readyInMinutes}}</p>
                             </div>
                              </div>
                              <div v-else-if="newMenuTimeFrame == 'week' ">
                              <div v-for=" item in breakfastItems"> 
                              
                              <img class="rounded img-thumbnail" v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              <p>day: {{item.day}}</p>
                              
                              <p>Title: {{item.value.title}}</p>
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
            </div>  

        <div class="col-xs-6 col-md-3 gallery-item text-black">

                <figure>
                    <div class="hovereffect">
                       <div v-if="newMenuTimeFrame == 'day' ">
                            <div v-for=" meal in lunchMeals">
                              
                              
                              <img class="rounded img-thumbnail" v-bind:src="`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`" v-bind:alt="meal.title"/> 
                              <p>Title:{{meal.title}}</p>
                              <p>Prep_Time:{{meal.readyInMinutes}}</p>  
                             </div>
                              </div>
                              <div v-else-if="newMenuTimeFrame == 'week' ">
                              <div v-for=" item in lunchItems"> 
                              
                              <img  class="rounded img-thumbnail" v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              <p>day: {{item.day}}</p>
                             
                              <p>title: {{item.value.title}}</p>
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
        </div>
        <div class="col-xs-6 col-md-3 gallery-item text-black">

                <figure>
                    <div class="hovereffect">
                       <div v-if="newMenuTimeFrame == 'day' ">
                            <div v-for=" meal in dinnerMeals">
                              
                             
                          
                              <img  class="rounded img-thumbnail" v-bind:src="`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`" v-bind:alt="meal.title"/> 
                               <p>Title:{{meal.title}}</p>
                              <p>Prep_Time:{{meal.readyInMinutes}}</p>
                             </div>
                              </div>
                              <div v-else-if="newMenuTimeFrame == 'week' ">
                              <div v-for=" item in dinnerItems"> 
                              
                              <img class="rounded img-thumbnail"  v-bind:src="`https://spoonacular.com/recipeImages/${item.value.id}-556x370.jpg`"/> 
                              <p>day: {{item.day}}</p>
                             
                              <p>title: {{item.value.title}}</p>
                            </div>
                          </div>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                        </div>
                    </div>
                </figure>
        </div>

        </form>
 </div>
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
      breakfastItems: [],
      lunchItems: [],
      dinnerItems: [],
      lunchMeals: [],
      breakfastMeals: [],
      dinnerMeals: [],
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
          this.breakfastItems.push(this.items[0])
          this.breakfastItems.push(this.items[3])
          this.breakfastItems.push(this.items[6])
          this.breakfastItems.push(this.items[9])
          this.breakfastItems.push(this.items[12])
          this.breakfastItems.push(this.items[15])
          this.breakfastItems.push(this.items[18])
          this.lunchItems.push(this.items[1])
          this.lunchItems.push(this.items[4])
          this.lunchItems.push(this.items[7])
          this.lunchItems.push(this.items[10])
          this.lunchItems.push(this.items[13])
          this.lunchItems.push(this.items[16])
          this.lunchItems.push(this.items[19])
          this.dinnerItems.push(this.items[2])
          this.dinnerItems.push(this.items[5])
          this.dinnerItems.push(this.items[8])
          this.dinnerItems.push(this.items[11])
          this.dinnerItems.push(this.items[14])
          this.dinnerItems.push(this.items[17])
          this.dinnerItems.push(this.items[20])
          this.breakfastMeals.push(this.items[0])
          this.lunchMeals.push(this.items[1])
          this.dinnerMeals.push(this.items[2])
          
      
          
          
    
        })
      }
     }
   };
  
  

</script>