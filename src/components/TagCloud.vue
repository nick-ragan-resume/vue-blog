<template>
  <div class="tag-cloud">
      <h3>Tags</h3>
      <!-- cycle through tags and set tag as key becuase it is unique -->
      <div v-for="tag in tags" :key="tag">
          <!-- Create router link to Tag route and pass in the tag as a param -->
          <router-link :to="{ name: 'Tag', params: { tag: tag }}">
              <!-- List out tags --> 
              #{{ tag }}
          </router-link>
      </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'
export default {
    // all posts
    props: ['posts'], 
    // pass props
    setup(props) { 
        // destructure useTags and pass posts into useTags
        const { tags } = useTags(props.posts)

        return { tags }
    }
}
</script>

<style>
  .tag-cloud {
    padding: 10px;
    border-left: 1px solid #0c00af;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid rgb(214, 214, 214);
    padding: 16px 8px;
    color: #444;
    text-align: center;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
    
  }
  .tag-cloud a {
    color: rgb(138, 138, 138);
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #0c00af;
    font-weight: bold;
  }
  
</style>