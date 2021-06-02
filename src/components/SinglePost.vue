<template>
  <div class="post">
      <router-link :to="{ name: 'Details', params: { id: post.id }}">
          <h3>{{ post.title }}</h3>
      </router-link>
      
      <p>{{ snippet }}</p>
      <span class="tags" ></span><span class="tag" v-for="tag in post.tags" :key="tag">#{{ tag + ' '}}</span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    // pass post props
    props: ['post'],
    setup(props) {
        // trim post to show 0-100 characters ....
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '....'
        })
        return { snippet }
    }
}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: #1100ff;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .tags {
      padding-left: 5%;
  }
  .tag {
      font-weight: 550;
  }
</style>