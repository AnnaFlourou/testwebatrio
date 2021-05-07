<template>
  <div class="navbar-all">
      
      <router-link to="/"><h1>RobotDemoApp</h1></router-link>
      <router-link to="/"><h2>Accueil</h2></router-link>
      <router-link to="/articles/"><h2>Liste des articles</h2></router-link>
  </div>
</template>

<script>


export default {
  name: 'Navbar',
  data(){
    return{
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar-all {
        position: fixed;
        width: 100%;
        display: flex;
        background-color: black;
        align-items: center;
        min-height: 50px;
        z-index: 1;

    }
    h1, h2 {
        color: white;
        margin: 5px 25px;
    }
    h1 {
        font-size: 18px;
    }
    h2 {
        font-size: 15px;
    }
    a {
        text-decoration: none;
    }
</style>
