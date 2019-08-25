<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      
     <!--  <router-link to="/index">All</router-link> |   --> 
     <router-link to="/search">Menu Item</router-link> |
     <router-link to="/menu">Meal Planner</router-link> | 
     <router-link to="/recipe">Recipe</router-link> 
     


    </div>
    <router-view/>
  </div>
</template>


