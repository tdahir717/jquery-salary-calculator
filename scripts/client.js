$(document).ready(onReady);

//onReady

function onReady(){
    // console.log('in JQ');
    $(`#addEmployeesBtn`).on(`click`, addEmployee);
    $(`#addEmployeesBtn`).on(`click`, appendData);
    
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
function appendData() {
    let el = $(`tbody`)
    el.empty();
    for (let i=0; i < employeeData.length; i++){
        el.append(
            `<tr>
                <td>${employeeData[i].firstName}</td>
                <td>${employeeData[i].lastName}</td>
                <td>${employeeData[i].idNumber}</td>
                <td>${employeeData[i].jobTitle}</td>
                <td>${employeeData[i].annualSalary}</td>
            </tr>`
        )
        $(`#firstNameIn`).val(''),
        $(`#lastNameIn`).val(''),
        $(`#idNumberIn`).val(''),
        $(`#jobTitleIn`).val(''),
        $(`#annualSalaryIn`).val('')
    }
}

