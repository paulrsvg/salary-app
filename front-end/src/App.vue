<template>
<div id="app">
  <div class="header">
    <!-- <h1>Salary Calculator</h1> -->
    
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>
body {
  margin: 0px;
}

 .results{
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(410px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));;
    grid-gap: 1.2rem;
    /* text-align: center !important; */
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #182c57;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: rgb(250, 250, 250);
}

.content {
  padding: 1em 2em;
}
</style>
