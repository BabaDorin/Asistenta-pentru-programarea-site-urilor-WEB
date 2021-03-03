<?php
include 'config/connect.php';

$produs = new stdClass();
$produs->nume = $_POST['nume'];
$produs->pret = $_POST['pret'];
$produs->cantitate = $_POST['cantitate'];

$target_dir = "imagini/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
echo 'cf1';

if(!move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)){
    echo 'S-a produs o eroare la incarcarea imaginii';
    return;
}
    
$produs->imagine = $target_file;
echo 'cf2';

try{
    $sql = 
    "INSERT INTO produs 
    (nume, pret, cantitate, imagine) 
    VALUES 
    ('$produs->nume', '$produs->pret', '$produs->cantitate', '$produs->imagine');";

echo 'cf3';

    $conn->exec($sql);
    header('Location: index.php');
    echo 'cf';

}catch(PDOException $e){
    die($e->getMessage());
}
