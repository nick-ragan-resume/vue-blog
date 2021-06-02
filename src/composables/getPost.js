
import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })

            // fetch data from endpoint
            let data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok) {
                throw Error('That post does not exist')
            }
            // set post value = data returned from endpoint
            post.value = await data.json()
        }
        // catch errors
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, error, load }
}
export default getPost

