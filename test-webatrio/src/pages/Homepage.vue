<template>
  <div class="homepage">
    <h3>Bienvenue sur votre page d'accueil</h3>
    <p>Test technique pour les développeurs Angular, React ou Vuejs</p>
    <b-button @click="$router.push('articles')" variant="warning">Voir la liste des articles</b-button>
  </div>
</template>

<script>


export default {
  name: 'Homepage',
  data(){
    return{
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage {
  padding-top: 50px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
h3, p {
  color: white;
  font-size: 13px;
}
h3 {
 margin-top: 100px;
 margin-bottom: 15px;
}
p {
  opacity: 0.7;
}
button {
  margin-bottom: 100px;
  font-size: 13px;
  font-weight: bold;
}

</style>
