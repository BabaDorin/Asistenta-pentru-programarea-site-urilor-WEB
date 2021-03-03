<?php
    include 'config/connect.php';
    

    $sql = "SELECT * FROM produs";
    $date = $conn->query($sql);
    $listaProduse = $date->fetchAll();

    $conn=null;

    include 'views/index.view.php'; 