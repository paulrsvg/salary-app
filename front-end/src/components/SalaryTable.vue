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
            <td>{{employee.baseSalary}}</td>
            <td>{{employee.WCSalary}}</td>
            <td>{{employee.MWSalary}}</td>
            <td>{{employee.ECSalary}}</td>
        </tr>
    </tbody>
	</table>
    </div>
</template>

<script>
export default {
  name: 'SalaryTable',
  props: {
    employee: Object
  },
}
</script>


<style scoped>
.wrapper{
    
    margin-top: 2em;
}
table.salary {
	min-width: 30em;
	border-collapse: collapse;
    border: 1px solid
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
th , td {
    border-right: 2px solid black;
}
table.salary tbody {
	background-color: #eeeeee;
	text-align: right;
}
</style>
