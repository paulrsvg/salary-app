<template>
<div>
  <h1>Salary Calculator</h1>
  <div class = "input">
  
  <form @submit.prevent="checkForm">
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
      <input v-model="status" type="checkbox" > 
      
    </label>
    <p></p>
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </p>
    <br />
    <button type="submit">Process Info</button>
  </form>
</div>

    <hr>
    <div v-if="employee.name" class="results">
  <!-- <div v-for="employee in employees" v-bind:key="employee.id" class="results"> -->

      <business-card :employee="employee" />
      <salary-table :employee="employee"/>
  </div>
</div>
</template>

<style scoped>
form label {
   display: flex;
  align-items: left;
  flex-direction: column;
  width: 200px;
  
}
/* 
.results {
display: flex;
flex-direction: flex-row;
} */
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
      employee: {},
      errors: [],
    }
  },
  components: {
    BusinessCard,
    SalaryTable,
  },
  created() {
    //this.getEmployee();
  },
  methods: {
    
    async getEmployee() {
      try {
        let response = await axios.get("/api/employee");
        this.employee = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addEmployee() {
      try {
        await axios.post("/api/employee", {
          name: this.name,
          title: this.title,
          manager: this.manager,
          company: this.company,
          phone: this.phone,
          salary: this.salary,
          status: this.status
        });
        //this.creating = false;
        this.getEmployee();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployee(employee) {
      try {
        await axios.delete("/api/employee/" + employee.id);
        this.getEmployee();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    checkForm: function () {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.salary) {
        this.errors.push('Salary required.');
      } else if (!this.validSalary(this.salary)){
        this.errors.push('Valid salary required(e.g. $85,000.00).');
      }
      if (!this.errors.length) {
        this.addEmployee();
        return true;
      }
    },

    validSalary: function (salary) {
      let tmp = salary;
      tmp = tmp.replace(/[$,/,]/g,'');
      tmp = Number(tmp);
      if(tmp > 10000){
        //salary regex for optional chars [$,.]
        var re = /^(\$?)+\d{1,3}(?:,?\d{3})(?:\.\d{0,2})?/;
        if(re.test(salary)){
          //salary = tmp; // clean it before submit?
          //return re.test(salary);
          return true;
        }
        
      } else {
        this.errors.push('Salary should be greater than $10,000.');
      }
    }
  }
}
</script>



