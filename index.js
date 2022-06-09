// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "96 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 = {...employee};
    employee2[key] = value;
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employee3 = {...employee};
    delete employee3[key];
    return employee3;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}












//Ignore

// updateEmployeeWithKeyAndValue(employee, "Dennis", "Ohio")
// function callback(employee, name, street){
//     return updateEmployeeWithKeyAndValue(employee, name, street);
// }

// function cb(updateEmployeeWithKeyAndValue()){
//     return updateEmployeeWithKeyAndValue(employee, 'Mwaura', "Compton");
// }


