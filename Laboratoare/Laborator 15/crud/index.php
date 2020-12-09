<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        .wrapper {
            width: 650px;
            margin: 0 auto;
        }

        .page-header h2 {
            margin-top: 0;
        }

        table tr td:last-child a {
            margin-right: 15px;
        }
    </style>
</head>

<body>
    <!-- Modal for registering an employee -->
    <div class="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" name="addEmployeeForm" id="addEmployeeForm">
                        <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : ''; ?>">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control">
                        </div>
                        <div class="form-group <?php echo (!empty($address_err)) ? 'has-error' : ''; ?>">
                            <label>Address</label>
                            <input type="text" name="address" class="form-control">
                        </div>
                        <div class="form-group <?php echo (!empty($salary_err)) ? 'has-error' : ''; ?>">
                            <label>Salary</label>
                            <input type="text" name="salary" class="form-control">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" id="employees"
                                data-loading-text="<i class='fa fa-spinner fa-spin'></i> Se salveaza">
                                Salveaza
                            </button>
                            <br>
                            <label id="salvatemployees" class="text-success"></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for updating data -->
    <div class="modal fade" id="updateEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="updateEmployeeModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" name="updateEmployeeForm" id="updateEmployeeForm">
                        <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : ''; ?>">
                            <label>Name</label>
                            <input type="text" name="updateName" class="form-control">
                        </div>
                        <div class="form-group <?php echo (!empty($address_err)) ? 'has-error' : ''; ?>">
                            <label>Address</label>
                            <input type="text" name="updateAddress" class="form-control">
                        </div>
                        <div class="form-group <?php echo (!empty($salary_err)) ? 'has-error' : ''; ?>">
                            <label>Salary</label>
                            <input type="text" name="updateSalary" class="form-control">
                        </div>
                        <input type="hidden" name="updateId"/>
                        <div class="form-group">
                            <button class="btn btn-primary" id="updateEmployees"
                                data-loading-text="<i class='fa fa-spinner fa-spin'></i> Se salveaza">
                                Salveaza
                            </button>
                            <br>
                            <label id="salvatemployees" class="text-success"></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for viewing data -->
    <div class="modal fade" id="viewEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="viewEmployeeModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">View Employee Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <p class="form-control-static" id="viewName">
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <p class="form-control-static" id="viewAddress">
                        </div>
                        <div class="form-group">
                            <label>Salary</label>
                            <p class="form-control-static" id="viewSalary">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-secondary" data-dismiss="modal">
                                Ok
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="deleteEmployeeModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <div class="page-header">
                        <h1>Delete Record</h1>
                    </div>
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <div class="alert alert-danger fade in">
                            <input type="hidden" name="id" value="<?php echo trim($_GET["id"]); ?>"/>
                            <p>Are you sure you want to delete this record?</p><br>
                            <p>
                                <input type="submit" value="Yes" class="btn btn-danger">
                                <a class="btn btn-default">No</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
    <div class="container mt-5">
        <div class="" role="alert" style="opacity:0" id="alert">
            <p id="AlertMessage">Alert message goes here</p>
        </div>
        <div class="page-header clearfix">
            <h2 class="pull-left">Employees Details</h2>
            <a class="btn btn-success pull-right" data-toggle="modal" data-target="#addEmployeeModal">Add New
                Employee</a>
        </div>



        <table class='table table-bordered table-striped' id="employeesTable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nume</th>
                    <th>Adresa</th>
                    <th>Salariu</th>
                    <th>Actiuni</th>
                </tr>
            </thead>
        </table>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
    <script src="js/index.js"></script>
</body>

</html>