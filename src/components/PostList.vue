<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id" >
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {
    // pass posts as props
    props: ['posts'],
    // components used
    components: { SinglePost },
    setup() {
        // nothing in setup
    } 
}
</script>

<style>

</style>