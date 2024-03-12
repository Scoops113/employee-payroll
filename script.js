const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];

  while (true) {
    const firstName = prompt("Enter employee's first name:");
    if (!firstName) break; 

    const lastName = prompt("Enter employee's last name:");
    const salaryInput = prompt("Enter employee's salary:");
    let salary = parseFloat(salaryInput);
    if (isNaN(salary)) salary = 0; 

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);
  }

  return employees;
}


const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
}


const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees added yet.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}


const displayEmployees = function(employeesArray) {

  const employeeTable = document.querySelector('#employee-table');

 
  employeeTable.innerHTML = '';

  
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}


addEmployeesBtn.addEventListener('click', trackEmployeeData);
