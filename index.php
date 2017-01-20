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
	<h1>Titulo de la encuesta</h1>
	<p>Instrucciones: En cada pregunta darle click a alguna alternativa y ver lo que pasa</p>
	<div class="pregunta" id="p1">
		<div class="enunciado">
			<label for="">Pregunta numero 1</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="a">a) alternativa --------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="b">b) alternativa -----</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="c">c) alternativa --------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="d">d) alternativa ---------------------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="e">e) alternativa ---------</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p2">
		<div class="enunciado">
			<label for="">Pregunta numero 2 (si se da click en la alternativa (b) se mostrará una pregunta adicional)</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="a">a) alternativa --</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="b">b) alternativa - </label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="c">c) alternativa --------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="d">d) alternativa ---</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="e">e) alternativa ----</label></li>
			</ul>
		</div>

		<div class="pregunta-adicional" id="p2-1">
			<div class="condicion">
				<p>Su respuesta a la pregunta anterior fue la alternativa B, responda adicionalmente la siguiente pregunta:</p>
			</div>
			<div class="enunciado">
				<label for="">Pregunta adicional de la pregunta 2</label>
			</div>
			<div class="grupo-alternativas">
				<ul>
					<li><label for="" class="alternativa" data-pregunta="p2-1" data-indice="a">a) alternativa --</label></li>
					<li><label for="" class="alternativa" data-pregunta="p2-1" data-indice="b">b) alternativa - </label></li>
					<li><label for="" class="alternativa" data-pregunta="p2-1" data-indice="c">c) alternativa --------</label></li>
					<li><label for="" class="alternativa" data-pregunta="p2-1" data-indice="d">d) alternativa ---</label></li>
					<li><label for="" class="alternativa" data-pregunta="p2-1" data-indice="e">e) alternativa ----</label></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="pregunta" id="p3">
		<div class="enunciado">
			<label for="">Pregunta numero 3</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p3" data-indice="a">a) alternativa ------------------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p3" data-indice="b">b) alternativa --------</label></li>
				<li><label for="" class="alternativa" data-pregunta="p3" data-indice="c">c) alternativa --</label></li>
				<li><label for="" class="alternativa" data-pregunta="p3" data-indice="d">d) alternativa --</label></li>
				<li><label for="" class="alternativa" data-pregunta="p3" data-indice="e">e) alternativa ------</label></li>
			</ul>
		</div>
	</div>

	<button id="boton">Ver Respuestas</button>
	<div><p>Las respuestas marcadas se ven en la consola del navegador</p></div>
</body>
</html>