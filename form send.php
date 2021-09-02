<?php
$destino = "ivanvivanco29@gmail.com";
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$curso = $_POST["curso"];
$imagen = $_POST["imagen"];

$contenido = "Nombre:".$nombre . "\nApellido:".$apellido . "\nTelefono:".$tel . "\nEmail:".$email . "\nCurso:".$curso . "\nImagen:".$imagen;
mail($destino,"Inscripcion Online",$contenido);
?>