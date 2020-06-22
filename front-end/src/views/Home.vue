<template>
<div>
  <h1>Current Employees</h1>
  <div v-for="employee in employees" v-bind:key="employee.id">
    <hr>
    <div class="employee">
      <div class="title">
        <p>{{employee.title}}</p>
        <p><i>-- {{employee.name}}</i></p>
        <button @click="deleteEmployee(employee)">Delete</button>
      </div>
      
    </div>
    
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      employees: [],
    }
  },
  components: {
   
  },
  created() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        let response = await axios.get("/api/employees");
        this.employees = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployee(employee) {
      try {
        await axios.delete("/api/employees/" + employee.id);
        this.getEmployees();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>



