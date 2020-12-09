<?php
// Include config file
require_once "config.php";
 
// Processing form data when form is submitted
if(isset($_POST["id"]) && !empty($_POST["id"])){
    // Get hidden input value
    $id = $_POST["id"];
    $name = $_POST["name"];
    $address = $_POST["address"];
    $salary = $_POST["salary"];
    // Prepare an update statement
    $sql = "UPDATE employees SET name=:name, address=:address, salary=:salary WHERE id=:id";

    if($stmt = $pdo->prepare($sql)){
        // Bind variables to the prepared statement as parameters
        $stmt->bindParam(":name", $param_name);
        $stmt->bindParam(":address", $param_address);
        $stmt->bindParam(":salary", $param_salary);
        $stmt->bindParam(":id", $param_id);
        
        // Set parameters
        $param_name = $name;
        $param_address = $address;
        $param_salary = $salary;
        $param_id = $id;
        
        // Attempt to execute the prepared statement
        if($stmt->execute()){
            echo "success";
        } else{
            echo "notSuccess";
        }
    }
         
    // Close statement
    unset($stmt);
    
    // Close connection
    unset($pdo);
} else{
    echo "notSuccess";
}
?>