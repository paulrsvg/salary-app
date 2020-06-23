<template>
<div class="wrapper">
    <div class = "card">
        <h3>{{employee.name.toUpperCase()}}</h3>
        <hr>
        <p><em>{{employee.title}}</em></p>
        <p><strong>{{employee.company}}</strong> | <span>{{employee.phone}}</span></p>
        
    </div>
</div>
</template>

<script>
export default {
  name: 'BusinessCard',
  props: {
    employee: Array
  },
  methods: {

  }
}
</script>


<style scoped>
/* scoped styles only affect this component */
.wrapper{
    width: 40%;
}
.card {
  border: 2px solid black;  
  margin: 2em;
  letter-spacing: .1rem;
  padding: 1em;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>