<template>
<div>
  <header>
      <h1>The Vue Blog</h1>
      <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Create' }">Create Post</router-link>
      </nav>
  </header>
  <hr>
</div>
  
</template>

<script>
export default {

}
</script>

<style>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 40px;
  }
  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
  hr {
    margin-bottom: 0px;
  }
/* At the top level of your code */
@media screen and (max-width: 500px) {
  header {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
    padding-top: 25px;
  }
  nav {
    color: #bbb;
    text-decoration: none;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 40px;
    margin: 0px;
    padding-bottom: 20px;
  }
  hr {
    height: 3px;
    background-color: rgb(253, 253, 253);
    margin-bottom: 0px;
  }
}  
</style>