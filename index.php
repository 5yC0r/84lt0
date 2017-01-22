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
			<label for="">1. ¿Al egresar de la carrera que tan preparado se sintió para ejercer la profesión?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="a">a) Altamente preparado.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="b">b) Muy preparado.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="c">c) Medianamente preparado.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="d">d) Poco preparado.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="e">e) Nada preparado.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p2">
		<div class="enunciado">
			<label for="">2. ¿Cuál fue su percepción sobre el desempeño de los docentes de la Facultad de Estomatología al egresar?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="a">a) Muy bueno.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="b">b) Bueno.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="c">c) Regular.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="d">d) Malo.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="e">e) Muy malo.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta-alternativa-multiple" id="p3">
		<div class="enunciado">
			<label for="">3. ¿Cuál es el área de interés para su capacitación profesional? (Puede marcar más de una opción)</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="a">a) Cirugía Bucal y Maxilofacial.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="b">b) Endodoncia.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="c">c) Medicina y Patología Estomatológica.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="d">d) Odontopediatria.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="e">e) Ortodoncia y Ortopedia Maxilar.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="f">f) Periodoncia e Implantología.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="g">g) Radiología Bucal y Maxilofacial.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="h">h) Rehabilitación Oral.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="i">i) Salud Pública Estomatológica.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="j">j) Salud Familiar y Comunitaria en Odontología.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="k">k) Odontología Forense.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="l">l) Estomatología de Pacientes Especiales.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="m">m) Odontología Restauradora y Estética.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="n">n) Odontogeriatría.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="o">o) Auditoría Odontológica.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="p">p) Administración y Gestión en Estomatología.</label></li>
				<li><label for="" class="alternativa" data-seleccionado="no" data-pregunta="p3" data-indice="q">q) Ninguna.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p4">
		<div class="enunciado">
			<label for="">4. ¿Usted tiene intención de emigrar</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p4" data-indice="a">a) Altamente probable.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p4" data-indice="b">b) Medianamente probable.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p4" data-indice="c">c) Nada probable.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p5">
		<div class="enunciado">
			<label for="">5. ¿Usted volvería a seleccionar la misma carrera?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p5" data-indice="a">a) Si.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p5" data-indice="b">b) No.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p6">
		<div class="enunciado">
			<label for="">6. ¿Usted volvería a elegir la misma universidad?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p6" data-indice="a">a) Si.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p6" data-indice="b">b) No.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p7">
		<div class="enunciado">
			<label for="">7. ¿Usted está titulado?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p7" data-indice="a">a) Si</label></li>
				<li><label for="" class="alternativa" data-pregunta="p7" data-indice="b">b) No</label></li>
			</ul>
		</div>

		<div class="pregunta-adicional" id="p7-1">
			<div class="enunciado">
				<label for="">Explique a continuación el motivo por el cual no se tituló y de por terminada la encuesta.</label>
			</div>
			<div class="respuesta-tipeada">
				<input type="text">
			</div>
		</div>
	</div>
	<div class="pregunta" id="p8">
		<div class="enunciado">
			<label for="">8. Luego de haber egresado, ¿se ha capacitado profesionalmente?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p8" data-indice="a">a) Si.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p8" data-indice="b">b) No.</label></li>
			</ul>
		</div>
		<div class="pregunta-adicional" id="p8-1">
			<div class="enunciado">
				<label for="">Usted se ha capacidado profesionalmente en: (puede marcar más de una opcion)</label>
			</div>
			<div class="grupo-alternativas">
				<ul>
					<li><label for="" class="alternativa" data-pregunta="p8-1" data-indice="a">a) Cursos de larga duración y/o diplado.</label></li>
					<li><label for="" class="alternativa" data-pregunta="p8-1" data-indice="b">b) Maestría.</label></li>
					<li><label for="" class="alternativa" data-pregunta="p8-1" data-indice="c">c) Doctorado.</label></li>
					<li><label for="" class="alternativa" data-pregunta="p8-1" data-indice="d">d) Especialidad.</label></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="pregunta" id="p9">
		<div class="enunciado">
			<label for="">9. ¿Usted actualmente esta ejerciendo la profesión?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p9" data-indice="a">a) Si.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p9" data-indice="b">b) No.</label></li>
			</ul>
		</div>

		<div class="pregunta-adicional" id="p9-1">
			<div class="enunciado">
				<label for="">¿Cuál es el motivo por el que no ejerce la profesión?</label>
			</div>
			<div class="respuesta-tipeada">
				<input type="text">
			</div>
		</div>
	</div>
	<div class="pregunta-alternativa-multiple" id="p10">
		<div class="enunciado">
			<label for="">10. ¿Cuál es el area del ejercicio profesional que desempeña? (Puede marcar más de una opción)</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="a">a) Asistencial.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="b">b) Docencia.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="c">c) Investigación.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="d">d) Odontología legal y forense.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="e">e) Administración.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p10" data-indice="e">f) Promoción de la salud.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p11">
		<div class="enunciado">
			<label for="">11. ¿Usted se desenvuelve desarrollando labores exclusivas del cirujano dentista?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p11" data-indice="a">a) Si.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p11" data-indice="b">b) No.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p12">
		<div class="enunciado">
			<label for="">12. Actualmente su estado laboral como cirujano dentista es:</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p12" data-indice="a">a) Independiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p12" data-indice="b">b) Dependiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p12" data-indice="b">c) Dependiente e independiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p12" data-indice="b">d) Desempleado.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p13">
		<div class="enunciado">
			<label for="">13. ¿Como trabajador...?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="a">a) Si</label></li>
				<li><label for="" class="alternativa" data-pregunta="p2" data-indice="b">b) No</label></li>
			</ul>
		</div>

		<div class="pregunta-adicional" id="p7-1">
			
		</div>
	</div>
	<div class="pregunta" id="p14">
		<div class="enunciado">
			<label for="">14. Como trabajador independiente ...</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="a">a) Independiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="b">b) Dependiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="b">c) Dependiente e independiente.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p1" data-indice="b">d) Desempleado.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p15">
		<div class="enunciado">
			<label for="">15. ¿Dónde es el medio en el que desarrolla la profesión?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p15" data-indice="a">a) Medio Urbano.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p15" data-indice="b">b) Medio Rural.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p15" data-indice="b">c) Medio Urbano Marginal.</label></li>
			</ul>
		</div>
	</div>
	<div class="pregunta" id="p16">
		<div class="enunciado">
			<label for="">16. En la actualidad ¿Cuántas horas al día dedica al ejercicio de la profesion?</label>
		</div>
		<div class="respuesta-tipeada">
			<input type="number">
		</div>
	</div>
	<div class="pregunta" id="p17">
		<div class="enunciado">
			<label for="">17. ¿Cuál es uningreso medio recibido mensualmente como cirujano dentista?</label>
		</div>
		<div class="respuesta-tipeada">
			<input type="number">
		</div>
	</div>
	<div class="pregunta" id="p18">
		<div class="enunciado">
			<label for="">18.¿Cuál es el grado de satisfacción con el ingreso medio recibido como cirujano dentista?</label>
		</div>
		<div class="grupo-alternativas">
			<ul>
				<li><label for="" class="alternativa" data-pregunta="p18" data-indice="a">a) Satisfecho.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p18" data-indice="b">b) Medianamente satisfecho.</label></li>
				<li><label for="" class="alternativa" data-pregunta="p18" data-indice="b">c) Nada satisfecho.</label></li>
			</ul>
		</div>
	</div>
	<button id="boton">Ver Respuestas</button>
	<div><p>Las respuestas marcadas se ven en la consola del navegador</p></div>
	<div id="resultado"></div>
</body>
</html>