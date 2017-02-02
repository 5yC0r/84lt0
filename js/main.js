$(document).ready(function () {  
	
	$('#preguntas-titulado').hide(); //desde el inicio ocultamos las preguntas 8 en adelante

	$('.contenedor-global #p7 .alternativa').click(function(){
		var alternativa = $(this).data("indice");
		//console.log(alternativa);
		if(alternativa == 'a'){
			$('#preguntas-titulado').show();
			$('#preguntas-titulado .pregunta-alternativa-simple, #preguntas-titulado .pregunta-alternativa-multiple, #preguntas-titulado .pregunta-compuesta, #preguntas-titulado .pregunta-respuesta-tipeada').each(function(){
				$(this).attr("data-marcado","nomarcado");
				$(this).data("marcado","nomarcado");
			});
		}else{
			$('#preguntas-titulado').hide();	//ocultamos la preguntas dentro de #preguntas-titulado

			$('#preguntas-titulado .alternativa').each(function(){
				$(this).attr("data-seleccionado","false");
				$(this).data("seleccionado",false);
				$(this).css('color','black');
			});

			//luego de ocultar estas preguntas aparte de no contar para guardar en la bd se debe 
			$('#preguntas-titulado .pregunta-alternativa-simple, #preguntas-titulado .pregunta-alternativa-multiple, #preguntas-titulado .pregunta-compuesta, #preguntas-titulado .pregunta-respuesta-tipeada').each(function(){
				$(this).removeAttr("data-marcado");
				$(this).removeData("marcado");
			});

			$('#preguntas-titulado input').each(function(){
				$(this).val('');
			});
		}
	});

	//Caso 1: Pregunta alternativa simple
	$('.contenedor-global .pregunta-alternativa-simple .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
		$("#"+numeroPregunta+" .grupo-alternativas li label").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia de color las alternativas						
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true
	});

	//Caso 2: Pregunta alternativa multiple
	$('.contenedor-global .pregunta-alternativa-multiple .alternativa').on( "click", function(){

		var numeroPregunta = $(this).data('pregunta'); 		// obtnemos el valor de la pregunta
		var opcionNinguna = $(this).data('ninguna'); 		// verificamos si la opcion seleccionada es ninguna

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()

		var seleccionado = $(this).data('seleccionado'); 	// obtenemos el valor del atributo data-seleccionado de la opcion elegida

		if(opcionNinguna == "si"){							// si la opcion ninguna ha sido seleccionada, solo dejamos esa y el resto las desactivamos
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label").each(function(){
				$(this).attr("data-seleccionado","false");
				$(this).data("seleccionado",false);
				$(this).css('color','black');
			});
			$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','red');
		}else{
			// si se ha elegido cualquier otra opcion menos ninguna, "desactivamos" la opcion ninguna y asignamos el atributo data-seleccionado=false
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").attr("data-seleccionado","false");
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").data("seleccionado",false);
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").css('color','black');

			if(seleccionado == false){
				$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
				$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
				$(this).css('color','red');
			}else{
				$(this).attr("data-seleccionado","false");
				$(this).data("seleccionado",false);
				$(this).css('color','black');
			}	
		}
	});

	//Caso 3: Pregunta Compuesta
	$('.contenedor-global .pregunta-compuesta .grupo-alternativas .alternativa').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
		$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()

		/*Caso de las preguntas (7) y (9) */

		$("#"+numeroPregunta+" .grupo-alternativas li label[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia atributo data-seleccionado -> false						
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true

		/*Pregunta compuesta - respuesta tipeada*/
		$("#"+numeroPregunta+" .pregunta-adicional-tipeada").each(function(){ 		
			var adicional = $(this).data("head");
			if(alternativa == adicional){
				var numeroPreguntaAdicional = $(this).attr('id');								
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al mostrarse									
				});
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				$("#"+numeroPreguntaAdicional+" .respuesta-tipeada input").each(function(){ 		
					$(this).val("");	//valor vacio para la caja de texto al ocultarse								
				});
				$(this).hide();
			}
		});

		/*Pregunta compuesta - alternativa simple*/
		$("#"+numeroPregunta+" .pregunta-adicional-alternativa-simple").each(function(){
			var subordinante = $(this).data("head");
			console.log("pregunta compuesta alternativa simple");
			if(alternativa == subordinante){
				$(this).show();
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas-pregunta-simple li label[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).attr("data-seleccionado","false");					
					$(this).css("color","black");				
				});
				$(this).hide();
			}
		});

		/*Pregunta compuesta - alternativa multiple*/
		$("#"+numeroPregunta+" .pregunta-adicional-alternativa-multiple").each(function(){
			var subordinante = $(this).data("head");
			console.log("pregunta compuesta alternativa multiple");
			if(alternativa == subordinante){
				$(this).show();
				var numeroPreguntaAdicional = $(this).attr('id');
				$("#"+numeroPreguntaAdicional+"").attr("data-marcado","nomarcado");		//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
				$("#"+numeroPreguntaAdicional+"").data("marcado","nomarcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');	// (**)
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas-pregunta-multiple li label[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).attr("data-seleccionado","false");					
					$(this).css("color","black");				
				});
				$(this).hide();
				$("#"+numeroPreguntaAdicional+"").removeAttr("data-marcado");
				$("#"+numeroPreguntaAdicional+"").removeData("marcado");
			}
		});
	});

	$('.contenedor-global .pregunta-adicional-alternativa-multiple .alternativa').click(function(){

		var seleccionado = $(this).data('seleccionado');

		if(seleccionado == false){
			$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','red');
		}else{
			$(this).attr("data-seleccionado","false");
			$(this).data("seleccionado",false);
			$(this).css('color','black');
		}
	});

	$('.contenedor-global  .pregunta-adicional-alternativa-simple .grupo-alternativas-pregunta-simple .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+" .grupo-alternativas-pregunta-simple  li label").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia de color las alternativas						
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true
	});

	//Caso 4: Pregunta con respuesta tipeada

	$('.contenedor-global .pregunta-respuesta-tipeada .respuesta-tipeada input').on("input",function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		if($(this).val() !== ""){
			$("#"+numeroPregunta+"").attr("data-marcado","marcado");	//se agrega atritubo 'data-marcado'->'marcado' a la pregunta con el numero obtenido
			$("#"+numeroPregunta+"").data("marcado","marcado");			//a veces el el metodo .attr() no vasta, asi que tambien usamos .data()
			console.log($(this).val());
		}else{
			console.log("vacio");
		}
	});

	//Evento de boton para guardar los datos de la encuesta
	$('#cerrar-session').click(function(){
		//para guardar las respuestas en la bd debe cumplir dos condicione:
		//	-que el atributo data-seleccionado -> true
		// 	-que el atributo data-marcado -> marcado

		/*
		$(".grupo-alternativas li label[data-seleccionado=true], .grupo-alternativas-pregunta-simple li label[data-seleccionado=true], .grupo-alternativas-pregunta-multiple li label[data-seleccionado=true]").each(function(){
			$(this).css("color","blue");
			var numeroPregunta = $(this).data('pregunta');
			var respuesta = $(this).data('indice');
			console.log($(this).data('pregunta')+" - "+$(this).data('indice'));
			var parametros = {
				"indice": 0,
				"pregunta" : numeroPregunta,
				"respuesta" : respuesta
			};
			$.ajax({
	                data:  parametros,
	                url:   'controlador/Controlador.php',
	                type:  'post',
	                beforeSend: function () {
	                        $("#resultado").html("Procesando, espere por favor...");
	                },
	                success:  function () {
	                        $("#resultado").html("Sus respuestas han sido ingresadas y registradas, gracias por participar de nuestra encuesta.");
	                }
	        });
		});

		//Para guardar respuesta(s) de pregunta(s) tipeada
		$(".contenedor-global .pregunta-respuesta-tipeada .respuesta-tipeada input, .pregunta-adicional .respuesta-tipeada input").each(function(){
			var numeroPregunta = $(this).data('pregunta');
			var contenidoRespuesta = $(this).val();
			if(contenidoRespuesta!=""){		//solo se toma en cuenta las cajas de texto que tengan algo de contenido
				console.log(numeroPregunta +"-"+contenidoRespuesta);
				var parametros = {
					"indice": 1,
					"pregunta" : numeroPregunta,
					"respuesta" : contenidoRespuesta
				};
				$.ajax({
		                data:  parametros,
		                url:   'controlador/Controlador.php',
		                type:  'post',
		                beforeSend: function () {
		                		$(".contenedor-global #resultado").show();
		                        $(".contenedor-global #resultado").html("Procesando, espere por favor...");
		                },
		                success:  function () {
		                		$(".contenedor-global #resultado").show();
		                        $(".contenedor-global #resultado").html("Sus respuestas han sido ingresadas y registradas, gracias por participar de nuestra encuesta.");
		                }
		        });
			}
		});
		*/
	});

	$('#boton-guardar-respuestas').click(function(){
		var pc = ""; var sc = ""; var tc = ""; var cc = "";
		//Primer caso: verificar que todas las preguntas de alternativa simple esten marcadas
		$('.pregunta-alternativa-simple').each(function(){
			var marcado = $(this).data("marcado");
			if(marcado == "nomarcado"){
				console.log($(this).attr("id"));
				pc = pc + " - "+$(this).attr("id");
			}
		});
		//Segundo caso: verificar que todas las preguntas de alternativa multiple esten marcadas
		$('.pregunta-alternativa-multiple, .pregunta-adicional-alternativa-multiple').each(function(){
			var marcado = $(this).data("marcado");
			if(marcado == "nomarcado"){
				console.log($(this).attr("id"));
				sc = sc + " - "+$(this).attr("id");
			}
		});

		//Tercer caso: verificar que todas las preguntas compuestas esten marcadas
		$('.pregunta-compuesta').each(function(){
			var marcado = $(this).data("marcado");
			if(marcado == "nomarcado"){
				console.log($(this).attr("id"));
				tc = tc + " - "+$(this).attr("id");
			}
		});

		//Cuarto caso: verificar que las preguntas de respuesta tipeada esten respondidas
		$('.pregunta-respuesta-tipeada').each(function(){
			var marcado = $(this).data("marcado");
			if(marcado == "nomarcado"){
				console.log($(this).attr("id"));
				cc = cc + " - "+$(this).attr("id");
			}
		});

		if(pc !== "" || sc !== "" || tc !== "" || cc !== ""){
			$('#modalPreguntasFaltantes').modal('show');
			$('#lista-preguntas-sin-respuesta').append("<p>"+pc+"</p><br>");
			$('#lista-preguntas-sin-respuesta').append("<p>"+sc+"</p><br>");
			$('#lista-preguntas-sin-respuesta').append("<p>"+tc+"</p><br>");
			$('#lista-preguntas-sin-respuesta').append("<p>"+cc+"</p><br>");
		}else{
			console.log("Todas las preguntas estan respindaidas");
		}
	});

	$('#btn-aceptar-modal').click(function(){
		$('#lista-preguntas-sin-respuesta').empty();	//se limopia contenedor de preguntas sin responder
	});

	$("#botonListar").click(function(){
		var parametros = {"indice": 4};
        $.ajax({
            data: parametros,
            url : 'controlador/Controlador.php',
            type : 'post',
            success:  function (response) {
				var datos = $.parseJSON(response); 
				console.log(datos);
				var numeroFilas = datos.length;
				var contenedorTabla = $('#contenedor-tabla');
				contenedorTabla.html("<table align='center' id='tabla-alumnos'>"+
				"<thead>"+
					"<tr>"+
				        "<th>Codigo Usuario</th>"+
						"<th>Nombre(s) Usuario</th>"+
						"<th>Apellidos Usuario</th>"+
						"<th>Seleccione</th>"+
					"</tr>"+
				"</thead>"+
				"<tbody id='cuerpoTabla'></tbody>"+
				"</table>");
				var cuerpoTabla = $('#cuerpoTabla');
				for (var i = 0; i < numeroFilas; i++) {
				    cuerpoTabla.append('<tr><td>'+datos[i].dniAlumno+'</td><td>'+datos[i].nombres+'</td><td>'+datos[i].apellidos+'</td><td><button class=boton-ver onclick= prueba('+datos[i].dniAlumno+')>Ver detalle</button></td></tr>');
				}       
            }
        });
	});

	$('#derecha').click(function(){
		$('#datos-personales').hide();
		$('#preguntas').show();
		$('#izquierda').css("border-bottom","5px solid #e1b3b3");
		$('#derecha').css("border-bottom","5px solid #dd6061");
		
	});

	$('#izquierda').click(function(){
		$('#preguntas').hide();
		$('#datos-personales').show();
		$('#derecha').css("border-bottom","5px solid #e1b3b3");
		$('#izquierda').css("border-bottom","5px solid #dd6061");
	});

});

function prueba(dniAlumno) {
	//console.log(dniAlumno);
	$('#resultado').show();
	$('#resultado li label').each(function(){ 	//se asignan atributo data-seleccionado a cada una de las alternativas -> false
		$(this).data("seleccionado",false);
		$(this).attr("data-seleccionado","false");
		$(this).css("color","black");
	});

	$('#resultado input').each(function(){		//se asigna valor "" (vacio) a cada input
		$(this).val("")
	});

	var parametros = {
		"indice" : 2,
		"dniAlumno" : dniAlumno
		};
		$.ajax({
                data:  parametros,
                url:   'controlador/Controlador.php',
                type:  'post',
                success:  function (response) {
    				var datos = $.parseJSON(response); 
               		console.log(datos);
               		var numeroFilas = datos.length;
               		for (var i = 0; i < numeroFilas; i++) {
               			$("#"+datos[i].numeroPregunta+"").show();	//mostramos las respuestas, si es que hay alguna que originalmente esta oculta
               			$("#"+datos[i].numeroPregunta+" ul li label[data-indice="+datos[i].respuestaPregunta+"][data-pregunta="+datos[i].numeroPregunta+"]").css('color','red');
               		}
                }
        });
    var parametrosrt = {
    	"indice":3,
    	"dniAlumno" : dniAlumno
    	};
    	$.ajax({
    		data:  parametrosrt,
            url:   'controlador/Controlador.php',
            type:  'post',
            success: function(response){
            	var datos = $.parseJSON(response);
            	console.log(datos);
            	var numeroFilas = datos.length;
            	for (var i = 0; i < numeroFilas; i++) {
            		$("#"+datos[i].numeroPregunta+" .respuesta-tipeada input").val(datos[i].respuestaPregunta);
            	}
            }
    	});
    var parametrosAlumno = {
    	"indice" : 5,
    	"dniAlumno" : dniAlumno
    	};
    	$.ajax({
    		data: parametrosAlumno,
    		url:   'controlador/Controlador.php',
            type:  'post',
            success: function(response){
            	var datos = $.parseJSON(response);
            	//var datos = response;
            	console.log(datos);
            	//var numeroFilas = datos.length;
            	/*for (var i = 0; i < numeroFilas; i++) {
            		$("#"+datos[i].numeroPregunta+" .respuesta-tipeada input").val(datos[i].respuestaPregunta);
            	}*/
            	$('#datos-personales #dniAlumno').html(datos.dniAlumno);
            	$('#datos-personales #nombres').html(datos.nombres);
            	$('#datos-personales #apellidos').html(datos.apellidos);
            	$('#datos-personales #fechaNacimiento').html(datos.fechaNacimiento);
            	$('#datos-personales #estadoCivil').html(datos.estadoCivil);
            	$('#datos-personales #regionProcedencia').html(datos.regionProcedencia);
            	$('#datos-personales #sexo').html(datos.sexo);
            	$('#datos-personales #direccion').html(datos.direccion);
            	$('#datos-personales #anioEgreso').html(datos.anioEgreso);
            	$('#datos-personales #telefono').html(datos.telefono);
            	$('#datos-personales #correoElectronico').html(datos.correoElectronico);
            }
    	});
}


