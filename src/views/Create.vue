<template>
  <div class="create">
      <form @submit.prevent="handleSubmit">
          <label>Title</label>
          <input v-model="title" type="text" required>
          <label>Content:</label>
          <textarea v-model="body" required></textarea>
          <label>Tags (hit enter to add a tag)</label>
          <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown">
          <div v-for="tag in tags" :key="tag" class="pill">
              #{{ tag }}
          </div>
          <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        // starting values
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        // use router with Composition API
        const router = useRouter()
        // test => console.log(router)

        // append tags array with tags created
        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, '') // remove white space
                tags.value.push(tag.value)
            }
            tag.value = ''
        }
        // function runs on submit
        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }
            // wait for endpoint and POST content in post
            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            })

            // redirect Home after post is submitted
            router.push({ name: 'Home' })
        }
        // return everythin used
        return { title, body, tag, handleKeydown, tags, handleSubmit }
    }
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
    max-width: 90%;
    padding-bottom: 20px;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: #1100ff;
    font-weight: 600;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    color: #1100ff;
    position: absolute;
    z-index: -1;
  }
  button {
    display: block;
    margin-top: 30px;
    background: #1100ff;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  button:hover {
    display: block;
    margin-top: 30px;
    background: #0b00a7;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>