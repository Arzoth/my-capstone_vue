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
<div class="container" >
          <form class="form-inline" v-on:submit.prevent="createMenu()">
            
             <div class="form-group sm-3 mb-3 text-black">
               FoodItem: <input class="form-control" type="text" v-model="newMenuItemDiet">
               Carbs: <input type="text" class="form-control" v-model="newMenuItemCarb">
               Fat: <input type="text" class="form-control" v-model="newMenuItemFat"> 
               Calories: <input type="text" class="form-control" v-model="newMenuItemCalorie">
               Proteins: <input type="text" class="form-control "  v-model="newMenuItemProtein">
            
              <button type="submit" class="btn btn-primary mb-4" >Submit</button>
            </div>
        </form>
        
       <div class="col-xs-6 col-md-3 gallery-item text-black">

                <figure>
                    <div class="hovereffect">
                      <div v-for=" menuItem in column1MenuItems">
                    
                      
                      <img class="rounded img-thumbnail" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
                      <div class="text-block ">
                      <div >Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
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
                  <div v-for=" menuItem in column2MenuItems"> 
                      
                         
                              
                              
                              <img class="rounded img-thumbnail" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
                              <div class="text-block">
                      <div>Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
                      </div>
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
                     
                        <div v-for=" menuItem in column3MenuItems">
                          
  

                    
                       
                      <img class="rounded img-thumbnail" v-bind:src="menuItem.image" v-bind:alt="menuItem.title"/>
                      <div class="text-block">
                      <div>Title:{{menuItem.title}}</div>
                      <div>RestaurantChain:{{menuItem.restaurantChain}}</div>
                      <div>ServingSize:{{menuItem.servingSize}}</div>
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
      menuItems: [],
      column1MenuItems: [],
      column2MenuItems: [],
      column3MenuItems: [],
      title: "",
      firstItems: {},
      secondItems: "",
      thirdItems: "",
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
          this.menuItems = response.data.menuItems
          this.column1MenuItems.push(this.menuItems[0])
          this.column1MenuItems.push(this.menuItems[1])
          this.column1MenuItems.push(this.menuItems[2])
          this.column2MenuItems.push(this.menuItems[3])
          this.column2MenuItems.push(this.menuItems[4])
          this.column2MenuItems.push(this.menuItems[5])
          this.column3MenuItems.push(this.menuItems[6])
          this.column3MenuItems.push(this.menuItems[7])
          this.column3MenuItems.push(this.menuItems[8])
          this.column1MenuItems.push(this.menuItems[9])
          this.column1MenuItems.push(this.menuItems[10])
          this.column1MenuItems.push(this.menuItems[11])
          this.column2MenuItems.push(this.menuItems[12])
          this.column2MenuItems.push(this.menuItems[13])
          this.column2MenuItems.push(this.menuItems[14])
          this.column3MenuItems.push(this.menuItems[15])
          this.column3MenuItems.push(this.menuItems[16])
          this.column3MenuItems.push(this.menuItems[17])
          this.column3MenuItems.push(this.menuItems[18])
          this.column3MenuItems.push(this.menuItems[19])
          
          
    
        })
      }
     }
   };
  

</script>