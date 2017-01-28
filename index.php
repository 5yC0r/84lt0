<?php
	session_start();
	$_SESSION['dniAlumno']=12345678;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Encuesta Estomatología</title>
	<link rel="stylesheet" href="css/main.css">

	<!--JQuery-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="js/main.js"></script>
</head>
<body>
	<div id="cuadrado"></div>
	<div class="contenedor-global">
		<h1>Titulo de la encuesta</h1>
		<p>Instrucciones: En cada pregunta darle click a alguna alternativa y ver lo que pasa</p>
		<?php
			include ('vista/preguntas.php'); 
		?>
		<button id="boton">Ver Respuestas</button>
		<button id="btnTraer">Traer respuestas base datos</button>
		<button><a href=""></a>cerrar sesion</button>
		<div><p>Las respuestas marcadas se ven en la consola del navegador</p></div>
		<div id="resultado"></div>
	</div>
</body>
</html>