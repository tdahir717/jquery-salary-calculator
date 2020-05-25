$(document).ready(onReady);

//onReady

function onReady() {
    // console.log('in JQ');
    $(`#addEmployeesBtn`).on(`click`, addEmployee);
    $(`#addEmployeesBtn`).on(`click`, appendData);
    $(`#addEmployeesBtn`).on(`click`, calculateMonthlySalary);
}


//adding employee logic

let employeeData = [];

function addEmployee() {
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
function calculateMonthlySalary() {
    let monthlyCost = 0;
    let el = $(`#totalMonthlySalary`);
    for (let i = 0; i < employeeData.length; i++) {
        monthlyCost += Number(Math.round(((`${employeeData[i].annualSalary}`) / 12) + 'e2') + 'e-2');
        // Number(Math.round(number + 'e2') + 'e-2'); found on the stackOverflowt. Round 2 decimal spots.
        el.empty();
        el.append(monthlyCost);
    }
}

//appending
function appendData() {
    let el = $(`tbody`)
    el.empty();
    for (let i = 0; i < employeeData.length; i++) {
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
}// end append
