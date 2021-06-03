<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="layout">
          <PostList :posts="postWithTag" />
          <TagCloud :posts="posts" />
      </div>
      <div v-if="posts.length" class="directional-nav">
          <button @click="goHome">Find More Posts</button>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
import goHomeWrapper from '../composables/goHome'

export default {
    components: { PostList, Spinner, TagCloud },
    setup() {
        // get route method
        const route = useRoute()

        // goHome route
        const { goHome } = goHomeWrapper()

        // grab data from getPosts composable
        const { posts, error, load } = getPosts()
        // load data
        load()

        // use tag to filter posts
        const postWithTag = computed(() => {
            // return posts.value because post is a ref and ref needs a value
                            // filter results if post (p) includes tag from route
                                            // this will return a boolean // true if tags of current post includes tag in route - else false
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        return { error, posts, postWithTag, goHome }
    }
}
</script>

<style>

</style>