<template>
  <div class="home">
    <!-- Playing with values -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <span class="tag-cloud-home">
        <TagCloud :posts="posts"/>
      </span>
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
import TagCloud from '../components/TagCloud.vue'

export default {
  // name of page
  name: 'Home',
  // pass components used
  components: { PostList, Spinner, TagCloud },
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
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 0px;
  }
  .tag-cloud-home {
    max-width: 100%;
  }
  .tag-cloud-home a:hover {
    color: #0c00af;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;

  }
</style>