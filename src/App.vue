<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App', 
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

body {
  background:#101012;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  padding-top:32px;
}

</style>
