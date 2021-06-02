<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-if="!post && !error">
    <Spinner /> 
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
  // pass id as props
  props: ['id'],
  // use Spinner component
  components: { Spinner },
  // pass id in as props
  setup(props) {
    // pass props.id into getPost composable   // deconstruct function and grab values
    const { post, error, load } = getPost(props.id)
    // run load function
    load()
    // return values: post and error
    return { post, error }
  }
}
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
  padding-right: 5%;
  padding-left: 5%;
}
.pre {
  white-space: pre-wrap;
}
</style>