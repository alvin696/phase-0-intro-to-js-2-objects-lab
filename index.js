// Write your solution in this file!
// Initialize the employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
    };
    
    // Function to update employee Object non-destructively
    function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
    ...employee,
    [key]: value
    };
    }
    
    // Function to update employee Object destructively
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    }
    
    // Function to delete property from employee Object non-destructively
    function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
    }
    
    // Function to delete property from employee Object destructively
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    }