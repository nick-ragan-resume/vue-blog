import { useRouter } from 'vue-router'
 
 // backwards directional navigation
 const goHomeWrapper = () => {
   const router = useRouter()
   const goHome = () => {
     router.push({ name: 'Home' })
  }
    return { router, goHome }     
 }
export default goHomeWrapper