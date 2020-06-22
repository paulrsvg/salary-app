const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); //serv files in public dir

//no db needed yet so store data in global var
let employees = [];
let id = 0;


app.get('/api/employees', (req, res) => { //grabs all employees
    res.send(employees);
});

//don't need to grab entire list, only need one employee, and update that on btn press

app.post('/api/employees', (req, res) => { //creates one employee
    id = id + 1;
    let employee = {
        id : id,
        name: req.body.name,
        title: req.body.title,
        // manager: manager,
        // company: company, 
        // phone: phone,
        // salary: salary, //perhaps add salary calc here? hmm
        // status: status
    };
    employees.push(employee);
    res.send(employee);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
