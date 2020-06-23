<template>
<div class="wrapper">
<table class="salary">
    <caption>
        Salary Adjustment
    </caption>
    <thead>
        <tr>
            <th>Base</th>
            <th>West Coast</th>
            <th>Mid-West</th>
            <th>East Coast</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${{employee.baseSalary}}</td>
            <td>$XX,XXX.XX - {{employee.WCSalary}}</td>
            <td>$XX,XXX.XX - {{employee.MWSalary}}</td>
            <td>$XX,XXX.XX - {{employee.ECSalary}}</td>
        </tr>
    </tbody>
	</table>
    </div>
</template>

<script>
export default {
  name: 'SalaryTable',
  props: {
    employee: Array
  },
  methods: {

  }
}
//write script to flip numbers to the $USD currencyformat
//console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));

</script>


<style scoped>
/* scoped styles only affect this component */
.wrapper{
    width: 40%;
    margin-top: 2em;
}
table.salary {
	
	border-collapse: collapse;
}
table.salary caption {
	background-color: ActiveCaption;
	color: #FFF;
	font-size: 1.5rem;
	padding: 5px;
}
table.salary thead th {
	text-align: right;
	border-bottom: 2px solid #000;
}
table.salary tbody {
	background-color: #eeeeee;
	text-align: right;
}
</style>
