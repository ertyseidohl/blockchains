<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 60px;
  background-color: #ccf;
}

.box {
  flex-grow: 0;
  padding: 1rem;
  margin: 1rem;
  background: white;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #cfc;
  outline: none;
  border-radius: 5px;
}

button:active {
  box-shadow: -2px -2px 2px #fcf;
}
</style>
