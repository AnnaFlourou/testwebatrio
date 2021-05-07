<template>
  <div id="app" class="overall">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
  Navbar
}
}
</script>

<style>
 .overall {
   background-color: black;
   min-height: 100vh;
 }
</style>
