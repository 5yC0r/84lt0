<?php
	include('../controlador/ControladorPregunta.php');

	$indice = $_POST["indice"];

	if($indice == 0){
		//regitrar respuestas en la base de datos
		$idPregunta=$_POST["pregunta"];
	    $idRespuesta=$_POST["respuesta"];
	    $controladorPregunta = new ControladorPregunta();
	    $r = $controladorPregunta->crear($idPregunta,$idRespuesta);
	    //echo $idPregunta."+".$idRespuesta;
	}else{
		//traer respuestas de la base de datos
		$controladorPregunta = new ControladorPregunta();
		$resultado = $controladorPregunta->listar();
		$filas = array();
		$i=0;
		while($r = mysqli_fetch_assoc($resultado)){
			$filas[$i] = $r;
			$i++;
		}
		echo json_encode($filas);
	}

?>