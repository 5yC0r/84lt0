<?php
	include('../controlador/ControladorPregunta.php');
	$idPregunta=$_POST["pregunta"];
    $idRespuesta=$_POST["respuesta"];

    $controladorPregunta = new ControladorPregunta();

    $r = $controladorPregunta->crear($idPregunta,$idRespuesta);

    echo $r;
?>