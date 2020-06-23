const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); //serv files in public dir

//no db needed yet so store data in global var
//let employees = [];
//let id = 0;
let employee = [];



app.get('/api/employee', (req, res) => { //grabs all employees
    res.send(employee);
});

//don't need to grab entire list, only need one employee, and update that on btn press
//prev app.post('/api/employees', (req, res) => { 
app.post('/api/employee', (req, res) => { //creates one employee
    //id = id + 1; 
    let data = { //prev let employee = {
        //id : id,
        name: req.body.name,
        title: req.body.title,
        manager: req.body.manager,
        company: req.body.company, 
        phone: req.body.phone,
        baseSalary: req.body.salary, //perhaps add salary calc here
        WCSalary: req.body.salary * 0.6,
        MWSalary: req.body.salary * 1.2,
        ECSalary: req.body.salary * 0.8,

        employmentStatus: req.body.status,
    };
    employee = data; //prev employees.push(employee);
    res.send(employee);
});

// app.delete('/api/employees/:id', (req, res) => {
//     let id = parseInt(req.params.id);
//     let removeIndex = employees.map(employee => {
//         return employee.id;
//       })
//       .indexOf(id);
//     if (removeIndex === -1) {
//       res.status(404)
//         .send("Sorry, that employee doesn't exist");
//       return;
//     }
//     employees.splice(removeIndex, 1);
//     res.sendStatus(200);
//   });

//start server on port 3000
app.listen(3000, () => console.log('Server listening on port 3000!'));
