$(document).ready(onReady);

//onReady

function onReady(){
    console.log('in JQ');
    
}


//adding employee logic

let employeeData = [];

function addEmployee(){
    // console.log('in addEmployee');\

    let employeeToAdd = {
        firstName: $(`#firstNameIn`).val(),
        lastName: $(`#lastNameIn`).val(),
        idNumber: $(`#idNumberIn`).val(),
        jobTitle: $(`#jobTitleIn`).val(),
        annualSalary: $(`#annualSalaryIn`).val()
    }
    console.log('employeeToAdd', employeeToAdd);
    
    //push into array
    employeeData.push(employeeToAdd);
    
}// end appData

//calculating math logic



//appending


