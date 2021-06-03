// take in array of posts
// create a new tag set (no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    // cycle through array and perform function for each item in posts
    posts.forEach(item => {
        // cycle through post tags and fire a function for each tag
        // for each tag, add each tag to tagSet
        item.tags.forEach(tag => tagSet.add(tag))
    })

    // spreads all values in tagSet and sets the value of tags to that
    tags.value = [...tagSet]

    return { tags }

}

export default useTags