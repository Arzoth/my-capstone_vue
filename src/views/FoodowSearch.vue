<template>
  <div class="search">
    <section id="opening" class="parallax-background">
    <div class="container">
        <div class="space-40">&nbsp;</div>
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
         FoodItem: <input class="form-control" type="text" v-model="newMenuItemDiet">
         Carb: <input type="text" class="form-control" v-model="newMenuItemCarb">
         Fat: <input type="text" class="form-control" v-model="newMenuItemFat"> 
         Calorie: <input type="text" class="form-control">
         Protein: <input type="text" class="form-control"  v-model="newMenuItemProtein">
      
        <button type="submit" class="btn btn-primary mb-2" >Show me food</button>
      </div>
        </form>
        <div class="row"></div>
       <div class="col-xs-6 col-md-3 gallery-item">

                <figure>
                    <div class="hovereffect">
                      <div v-for=" menuItem in menuItems">
                     <div>Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
                       <div>image: {{menuItem.image_url}}</div>
                      <img class="img-responsive" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
    
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
                        <div v-for=" menuItem in menuItems">
                     <div>Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
                       <div>image: {{menuItem.image_url}}</div>
                      <img class="img-responsive" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
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
                      <div v-for=" menuItem in menuItems">
                     <div>Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
                       <div>image: {{menuItem.image_url}}</div>
                      <img class="img-responsive" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
    
                            <div class="overlay">
                                <div class="hovereffect-title">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>  
                     
                            </div>
                        
                    </div>
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
      menuItems: "",
      newMenuItemCalorie: "1500",
      newMenuItemProtein: "20",
      newMenuItemFat: "20",
      newMenuItemCarb: "50",
      newMenuItemDiet: "pasta",
   };
  },

  methods: {
    createMenu: function() {
      console.log('creating menu');
        
      axios.get("api/foodows/search", {
        params: {
          diet: this.newMenuItemDiet,
          calorie_max: this.newMenuItemCalorie,
          carb_max: this.newMenuItemCarb,
          fat_max: this.newMenuItemFat,
          protien_max: this.newMenuItemProtein
        }
      })
  
        .then(response => {

          console.log(response.data.menuItems);
          this.menuItems = response.data.menuItems;
    
        })
      }
     }
   };
  

</script>