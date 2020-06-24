<template>
<div class="wrapper">
    <div class = "card">
        <h3>{{employee.name.toUpperCase()}}</h3>
        <span><hr></span>
        <p><em>{{employee.title}}</em></p>
        <p class="long"><strong>{{employee.company}}</strong> | 
        <span>{{employee.phone.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3')}}</span></p>
    </div>
</div>
</template>

<script>
export default {
  name: 'BusinessCard',
  props: {
    employee: Object
  },
  computed: {
      
  }
}
</script>


<style scoped>
/* scoped styles only affect this component */
.wrapper{
     max-width: 27em;
}
.card {
  border: 2px solid black;  
  margin: 2em;
  letter-spacing: .1rem;
  padding: 1em;
  display: flex;
  /* align-items: left; */
  flex-direction: column;
  /* justify-content: center; */
}
</style>