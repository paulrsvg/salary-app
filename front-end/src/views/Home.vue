<template>
<div>
  <!-- <h1>Current Employees</h1> -->
  <div>
  <h1>Calculate Employee Salary</h1>
  <form @submit.prevent="addEmployee">
  
    <label> Full Name:
      <input v-model="name" placeholder="Name">
    </label><br>
    <label>Position:
      <input v-model="title" placeholder="Position">
    </label><br>
    <label>Manager's Name:
      <input v-model="manager" placeholder="Manager's Name">
    </label><br>
    <label>Company Name:
      <input v-model="company" placeholder="Company Name">
    </label><br>
    <label>Phone:
      <input v-model="phone" placeholder="Phone">
    </label><br>
    <label>Salary:
      <input v-model="salary" placeholder="Salary">
    </label><br>
    <label>Currently Employed:
      <input v-model="status" type="checkbox" value="1" > 
      
    </label>

    <!-- work on validation here tho! -->
    <p></p>
    <br />
    <button type="submit">Process Info</button>
  </form>
</div>

  
    <hr>
  <!-- <div v-if="employees" class="results"> -->
    <div v-for="employee in employees" v-bind:key="employee.id" class="results">
  

    <business-card :employee="employee" />
    <salary-table :employee="employee"/>


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

<style scoped>
.results {
display: flex;
flex-direction: flex-row;
}
</style>

<script>
// @ is an alias to /src
import BusinessCard from "../components/BusinessCard.vue";
import SalaryTable from "../components/SalaryTable.vue";
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      //creating: true,
      name: '',
      title: '',
      manager: '',
      company: '',
      phone: '',
      salary: '',
      status: '',
      employees: [],
    }
  },
  components: {
    BusinessCard,
    SalaryTable,
  },
  created() {
    this.getEmployees();
  },
  methods: {
    toggleForm() {
      //this.creating = !this.creating;
    },
    async getEmployees() {
      try {
        let response = await axios.get("/api/employees");
        this.employees = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addEmployee() {
      try {
        await axios.post("/api/employees", {
          name: this.name,
          title: this.title,
          manager: this.manager,
          company: this.company,
          phone: this.phone,
          salary: this.salary,
          status: this.status
        });
        //this.creating = false;
        this.getEmployees();
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



