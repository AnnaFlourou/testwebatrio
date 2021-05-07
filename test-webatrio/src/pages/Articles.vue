<template>
  <div class="articles row">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <b-card
          :title="post.label"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 card-article"
        >
          <b-card-text>
            {{post.content}}
          </b-card-text>
          <div class="btn">
            <b-button  @click="$router.push('/article/'+`${post.id}`)" href="#" variant="warning">Découvrir</b-button>
          </div>
         
        </b-card>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Articles',
  data(){
    return{
        posts: [
            { id: 1, label: "Titre 1", content: "content 1" },
            { id: 2, label: "Titre 2", content: "content 2" },
            { id: 3, label: "Titre 3", content: "content 3" },
            { id: 4, label: "Titre 4", content: "content 4" },
            { id: 5, label: "Titre 5", content: "content 5" },
            { id: 6, label: "Titre 6", content: "content 6" },
            { id: 7, label: "Titre 7", content: "content 7" },

        ]
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articles {
    padding-top: 50px;
    background-color: black;
    width: 100%;
}
.card-article {
  padding: 30px;
}
</style>
