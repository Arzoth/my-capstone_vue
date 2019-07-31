
<template>
 <div id="menuItems">
  <div v-for="(menuItems, index) in menuItems" :key="menuItems.id">
  </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
  return {
   menuItems: [],
   title: [],
   chain: [],
   };
  },
 
 created: function() {
   console.log("i am in created");
   axios.get("/api/index").then(response => {
     console.log(response.data);
     this.menuItems = response.data;
   });
 },
 // .catch(e => {
 //  this.error.push(e)
 //  })
 }

</script>
