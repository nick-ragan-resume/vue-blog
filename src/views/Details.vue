<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-if="!post && !error">
    <Spinner /> 
  </div>
  <div v-if="post" class="directional-nav">
    <button @click="goHome">Find More Posts</button>
  </div>

</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import goHomeWrapper from '../composables/goHome'

export default {
  // pass id as props
  props: ['id'],
  // use Spinner component
  components: { Spinner },
  // pass id in as props
  setup() {

    // useRoute method from vue-router
    const route = useRoute() 
    console.log(route)

    // goHome route
    const { goHome } = goHomeWrapper()

    // pass route params id into getPost composable   // deconstruct function and grab values
    const { post, error, load } = getPost(route.params.id)
    // run load function
    load()
    // return values: post and error
    return { post, error, goHome }
  }
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
.directional-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
}
</style>