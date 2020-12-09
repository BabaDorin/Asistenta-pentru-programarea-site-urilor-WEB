<?php
$db=mysqli_connect('localhost', 'root', '', 'demo') or die('Could not connect');
$result = mysqli_query($db, "SELECT * FROM employees") or die('Could not query');
echo json_encode(mysqli_fetch_all($result));
mysqli_close($db);
?>