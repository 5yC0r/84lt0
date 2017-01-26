<?php
	include('../controlador/ControladorPregunta.php');

	$indice = $_POST["indice"];

	if($indice == 0){
		//regitrar respuestas en la base de datos
		$numeroPregunta=$_POST["pregunta"];
	    $respuestaPregunta=$_POST["respuesta"];
	    $controladorPregunta = new ControladorPregunta();
	    $r = $controladorPregunta->crear($numeroPregunta,$respuestaPregunta);
	    //echo $numeroPregunta."+".$respuestaPregunta;
	}else{
		if($indice == 1){
			$numeroPregunta=$_POST["pregunta"];
		    $respuestaPregunta=$_POST["respuesta"];
		    $controladorPregunta = new ControladorPregunta();
	    	$r = $controladorPregunta->crearpt($numeroPregunta,$respuestaPregunta);
		}else{
			if($indice == 2){
				//traer respuestas de la base de datos (preguntas con alernativa)
				$controladorPregunta = new ControladorPregunta();
				$resultado = $controladorPregunta->listar();
				$filas = array();
				$i=0;
				while($r = mysqli_fetch_assoc($resultado)){
					$filas[$i] = $r;
					$i++;
				}
				echo json_encode($filas);
			}else{
				if($indice == 3){
					//traer respuestas de la base de datos (preguntas tipeadas)
					$controladorPregunta = new ControladorPregunta();
					$resultado = $controladorPregunta->listarpt();
					$filas = array();
					$i=0;
					while($r = mysqli_fetch_assoc($resultado)){
						$filas[$i] = $r;
						$i++;
					}
					echo json_encode($filas);
				}
				else{
					if($indice == 4){
						//traer respuestas de la base de datos (preguntas tipeadas)
						$controladorUsuario = new ControladorUsuario();
						$resultado = $controladorUsuario->listar();
						$filas = array();
						$i=0;
						while($r = mysqli_fetch_assoc($resultado)){
							$filas[$i] = $r;
							$i++;
						}
						echo json_encode($filas);
					}
				}
			}
		}
	}

?>