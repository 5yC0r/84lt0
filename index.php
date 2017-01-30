<!--<?php
	//session_start();
	//$_SESSION['dniAlumno']=12345678;
?>-->
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
		<h1>Bienvenido</h1>
		<p>Instrucciones: A continuación se le presenta un conjunto de preguntas, algunas son de respuesta única, otras de respuesta múltiple y otras donde tendrá que digitar la respuesta usted mismo. Al finalizar todas las preguntas, solo de click al botón del final y sus respuestas serán registradas y almacenadas en nuestra base de datos.</p>
		<?php
			include ('vista/preguntas.php'); 
		?>
		<button id="boton-guardar-respuestas">Guardar respuestas</button>
		<!--<button id="btnTraer">Traer respuestas base datos</button>
		<button><a href=""></a>cerrar sesion</button>
		<div><p>Las respuestas marcadas se ven en la consola del navegador</p></div>-->
		<div id="resultado"></div>
	</div>
</body>
</html>