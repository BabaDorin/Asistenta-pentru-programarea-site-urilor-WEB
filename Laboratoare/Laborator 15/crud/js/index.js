// Some global variables
table = $('#employeesTable');
addEmployeeForm = $('#addEmployeeForm');
updateEmployeeForm = $('#updateEmployeeForm');
bsAlert = $('#alert');

// Populate table once document has been loaded
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    getEmployeesAndPopulateDataTable();
})

// Insert an employee
addEmployeeForm.on("submit",function(e){
    e.preventDefault();
    addEmployeeForm.button("loading");
    // Create record
    $.ajax({
        type:'POST',
        url: "insert.php",
        data:{
            name: $('input[name="name"]').val(),
            address: $('input[name="address"]').val(),
            salary: $('input[name="salary"]').val()
        }}).done(function(feedback){
            if(feedback == "success"){
                displayAlert(true, 'Angajatul a fost salvat in baza de date!');
            }else{
                displayAlert(false, 'S-au produs erori la salvarea datelor. Asigurati-va ca ati introdus date valide.');
            }
            addEmployeeForm.button("reset");
        });

    // Extract records in order to refresh the datatable
    getEmployeesAndPopulateDataTable();
    
    $('#addEmployeeModal').modal('hide');
});

updateEmployeeForm.on("submit", function(e){
    e.preventDefault();
    updateEmployeeForm.button("loading");

    $.ajax({
        type:'POST',
        url: "update.php",
        data:{
            name: $('input[name="updateName"]').val(),
            address: $('input[name="updateAddress"]').val(),
            salary: $('input[name="updateSalary"]').val(),
            id: $('input[name="updateId"]').val()
        }}).done(function(feedback){
            if(feedback == 'notSuccess'){
                displayAlert(false, 'S-a produs o eroare la salvarea angajatului');
            }else{
                displayAlert(true, 'Datele despre angajat au fost actualizate');
            }
            updateEmployeeForm.button('reset');
    });

    // Extract records in order to refresh the datatable
    getEmployeesAndPopulateDataTable();
    
    $('#updateEmployeeModal').modal('hide');
});

// Extract employees and include them in employees table.
function getEmployeesAndPopulateDataTable(){
    $.ajax({
        type: "GET",
        url: "getEmployees.php",
    }).done(function(employeesJSON) {
            employeesArray = JSON.parse(employeesJSON);
            table = $('#employeesTable');
            table.find("tr:gt(0)").remove();
        if(employeesArray.length == 0){
            tr = document.createElement('tr');
            td = document.createElement('td');
            td.colSpan = 5;
            td.innerHTML = "<p class='lead text-center'><em>No records were found.</em></p>";
            tr.append(td);
            table.append(tr);
            return;
        }

        for(i = 0; i < employeesArray.length; i++){
            let employee = employeesArray[i];

            tr = document.createElement('tr');
            tdId = document.createElement('td');
            tdName = document.createElement('td');
            tdAddress = document.createElement('td');
            tdSalary = document.createElement('td');
            tdActions = document.createElement('td');

            btDetails = document.createElement('button');
            btDetails.innerHTML = "<span class='glyphicon glyphicon-eye-open'></span>";
            btDetails.classList = "btn btn-info";
            btDetails.value = employee[0]; // in button.value pleaca id-ul angajatului.
            btDetails.addEventListener('click', (e) => detailsEmployee(employee[0]));
            tdActions.append(btDetails);

            btUpdate = document.createElement('button');
            btUpdate.innerHTML = "<span class='glyphicon glyphicon-pencil'></span>";
            btUpdate.classList = "btn btn-warning";
            btUpdate.value = employee[0]; // in button.value pleaca id-ul angajatului.
            btUpdate.addEventListener('click', (e) => updateEmployee(employee[0]));
            tdActions.append(btUpdate); 
            
            btDelete = document.createElement('button');
            btDelete.innerHTML = "<span class='glyphicon glyphicon-trash'></span>";
            btDelete.classList = "btn btn-danger";
            btDelete.value = employee[0]; // in button.value pleaca id-ul angajatului.
            btDelete.addEventListener('click', (e) => deleteEmployee(employee[0]));
            tdActions.append(btDelete);

            tdId.innerText = employee[0];
            tdName.innerText = employee[1];
            tdAddress.innerText = employee[2];
            tdSalary.innerText = employee[3];

            tr.append(tdId, tdName, tdAddress, tdSalary, tdActions);
            table.append(tr);
        }
    });
}

function displayAlert(isSuccess, message){
    bsAlert = $('#alert');

    alertClassList = "alert alert-success alert-dismissible fade show";
    if(!isSuccess)
        alertClassList = "alert alert-warning alert-dismissible fade show";

    $('#AlertMessage').text(message);
    bsAlert.removeClass();
    bsAlert.addClass(alertClassList);

    bsAlert.animate({opacity:1}, 200);
    bsAlert.delay(6000).animate({opacity:0}, 200);
}

function deleteEmployee(empId){
    if(empId == undefined)
        return;

    if(!confirm('Esti sigur ca dorest sa elimini angajatul cu ID-ul ' + empId + "?"))
    return;

    $.ajax({
        type: "POST",
        url: "delete.php",
        data: {
            id: empId
        }
    }).done(function(feedback) {
        if(feedback == "success"){
            displayAlert(true, 'Angajatul a fost eliminat din bd');
            getEmployeesAndPopulateDataTable();
        }
    });
}

function updateEmployee(empId){
    if(empId == undefined)
        return;

    // Apare un modal asemanator cu cel de adaugare a unui angajat
    // Campurile acestuia sunt populate cu valori din baza de date pentru angajatul selectat.
    $.ajax({
        type: "GET",
        url: "read.php",
        data: {
            id: empId
        }
    }).done(function(feedback) {
        if(feedback == "notSuccess"){
            displayAlert(false, 'Oops! Something went wrong. Please try again later.');
        }else{
            employee = JSON.parse(feedback);

            $('input[name="updateName"]').val(employee.name)
            $('input[name="updateAddress"]').val(employee.address)
            $('input[name="updateSalary"]').val(employee.salary)
            $('input[name="updateId"]').val(empId)
        }
    });

    $('#updateEmployeeModal').modal('show');
}

function detailsEmployee(empId){
    if(empId == undefined)
        return;

    // Apare un modal asemanator cu cel de adaugare a unui angajat
    // Campurile acestuia sunt populate cu valori din baza de date pentru angajatul selectat.
    $.ajax({
        type: "GET",
        url: "read.php",
        data: {
            id: empId
        }
    }).done(function(feedback) {
        if(feedback == "notSuccess"){
            displayAlert(false, 'Oops! Something went wrong. Please try again later.');
        }else{
            employee = JSON.parse(feedback);

            $('#viewName').text(employee.name)
            $('#viewAddress').text(employee.address)
            $('#viewSalary').text(employee.salary)
        }
    });

    $('#viewEmployeeModal').modal('show');
}

