/*Employee Payroll Processor
You are building a salary processing module in a company HR app.
Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus
    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha" */
    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);
const salary = employees.map(emp => ({
    netSalary: emp.salary + emp.salary * 0.1
}))
console.log(salary)
const total=employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(total)
const find=employees.find(emp=>emp.salary===30000)
console.log(find)
const index=employees.findIndex(emp=>emp.name==="Neha")
console.log(index)