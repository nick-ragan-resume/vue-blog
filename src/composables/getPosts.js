
import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })

            // fetch data from endpoint
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error('no data available')
            }
            // set post value = data returned from endpoint
            posts.value = await data.json()
        }
        // catch errors
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }
}
export default getPosts