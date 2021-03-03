<?php

include './config/connect.php';

$id = $_GET['id'];
$sql = "SELECT * FROM produs WHERE id='$id'";
$date = $conn->query($sql)->fetchAll();

include './views/details.view.php';