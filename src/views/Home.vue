<template>
  <div class="home">
    <!-- Playing with values -->
    <h1>Blog Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-if="!posts.length && !error">
      <Spinner /> 
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  // name of page
  name: 'Home',
  // pass components used
  components: { PostList, Spinner },
  setup() {
    // run getPosts function  // deconstruct and grab returned values from function 
    const { posts, error, load } = getPosts() 
    // run load function
    load()
    // return values: posts and error
    return { posts, error }
  }
}

</script>

<style>
  h1 {
    border: 1px solid rgb(204, 204, 219);
    text-align: center;
    max-width: 200px;
  }
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>