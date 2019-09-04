

<template>
  <div class="home">
    <div id="slider" class="carousel slide has-top-menu dark-slider">  
        <div class="carousel-inner">

            <!-- slide 1 -->
            <div class="item active slide1">
                <div class="container">
                    <div class="carousel-caption">
                        <div class="row">
                            <div class="col-md-12 slider-content">
                                <img src="images/brand.jpg" alt="" class="animated fadeInDown first">
                                <h2 class="slide-title fadeInUp animated second space-top-30"><span class="text-primary">Foodow</span></h2>
                                <div class="separator-line-center-2x primary-bg-color animated fadeInDown third"></div>
                                <span class="slide-text flipInX animated third">
                                    <h1>{{ text.text }}</h1>
                                    <!-- <div v-for=" text in text"> -->
                                    <p class="text-primary">{{text}}</p>
                                  </span>
                            </div><!-- slider-content -->
                        </div><!-- / row -->
                    </div><!-- / carousel-caption -->
                </div><!-- / container -->
            </div><!-- / slide 1 -->

         </div>   <!-- slide 2 -->
            
        <!-- controls -->
        <a class="left carousel-control" href="#slider" data-slide="prev"><span class="fa fa-angle-left"></span></a>
        <a class="right carousel-control" href="#slider" data-slide="next"><span class="fa fa-angle-right"></span></a>
        <!-- / controls -->

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
