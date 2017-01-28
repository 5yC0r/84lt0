<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ventana Administrador</title>

	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">-->
	<link rel="stylesheet" href="css/main.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>-->
	<script src="js/main.js"></script>
</head>
<body>
	<div id="listado-alumnos">
		<div id="instrucciones">
			<p>Esta es la lista de las personas que han respondido la encuesta. Darle click al botón "Ver respuestas" en la misma fila del nombre de la persona que desea ver sus respuestas y aparecerán las preguntas con la(s) alternativa(s) seleccionadas o escritas</p>
		</div>
		<div id="boton-listado-alumnos">
			<button id="botonListar">Ver listado</button>
		</div>
		<div id="contenedor-tabla"></div>
		<div class="" id="resultado">
			<!--<div class="row">
				<div class="col s12">
					<ul class="tabs">
					<li class="tab col s3"><a href="#test1">Test 1</a></li>
					<li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
					<li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
					<li class="tab col s3"><a href="#test4">Test 4</a></li>
					</ul>
				</div>
				<div id="test1" class="col s12">Test 1</div>
				<div id="test2" class="col s12">Test 2</div>
				<div id="test3" class="col s12">Test 3</div>
				<div id="test4" class="col s12">Test 4</div>
			</div>-->
			
			<div id="encabezado">
				<div id="izquierda">
					<label for="">Datos Personales</label>
				</div>
				<div id="derecha">
					<label for="">Lista de preguntas</label>
				</div>
			</div>
			<div id="cuerpo">
				<div id="preguntas">
					<h2>Listado de preguntas</h2>
					<?php
						include ('vista/preguntas.php'); 
					?>
				</div>
				<div id="datos-personales">
					<label for="">DNI Alumno</label><br>
					<label for="">Nombes Alumno</label><br>
					<label for="">Apellidos Alumno</label><br>
					. <br>
					. <br>
					. <br>
				</div>
			</div>
		</div>
	</div>
</body>
</html>