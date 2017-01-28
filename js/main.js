$(document).ready(function () {  

	//Caso 1: Pregunta alternativa simple
	$('.pregunta-alternativa-simple .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+" .grupo-alternativas li label").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia de color las alternativas						
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true
	});

	//Caso 2: Pregunta alternativa multiple
	$('.pregunta-alternativa-multiple .alternativa').on( "click", function(){

		var numeroPregunta = $(this).data('pregunta'); 		// obtnemos el valor de la pregunta
		var opcionNinguna = $(this).data('ninguna'); 		// verificamos si la opcion seleccionada es ninguna

		var seleccionado = $(this).data('seleccionado'); 	// obtenemos el valor del atributo data-seleccionado de la opcion elegida

		if(opcionNinguna == "si"){							// si la opcion ninguna ha sido seleccionada, solo dejamos esa y el resto las desactivamos
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label").each(function(){
				$(this).attr("data-seleccionado","false");
				$(this).data("seleccionado",false);
				$(this).css('color','black');
			});
			$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','green');
		}else{
			// si se ha elegido cualquier otra opcion menos ninguna, "desactivamos" la opcion ninguna y asignamos el atributo data-seleccionado=false
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").attr("data-seleccionado","false");
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").data("seleccionado",false);
			$("#"+numeroPregunta+" .grupo-alternativas-pregunta-multiple li label[data-ninguna=si]").css('color','black');

			if(seleccionado == false){
				$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
				$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
				$(this).css('color','green');
			}else{
				$(this).attr("data-seleccionado","false");
				$(this).data("seleccionado",false);
				$(this).css('color','black');
			}	
		}
	});

	//Caso 3: Pregunta Compuesta
	$('.pregunta-compuesta .grupo-alternativas .alternativa').click(function(){
		
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		/*Caso de las preguntas (7) y (9) */

		$("#"+numeroPregunta+" .grupo-alternativas li label[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia atributo data-seleccionado -> false						
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red');						//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true

		$("#"+numeroPregunta+" .pregunta-adicional").each(function(){ 		
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
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');	// (**)
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas-pregunta-multiple li label[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).attr("data-seleccionado","false");					
					$(this).css("color","black");				
				});
				$(this).hide();
			}
		});
	});

	$('.pregunta-adicional-alternativa-multiple .alternativa').click(function(){

		var seleccionado = $(this).data('seleccionado');

		if(seleccionado == false){
			$(this).attr("data-seleccionado","true");	// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','green');
		}else{
			$(this).attr("data-seleccionado","false");
			$(this).data("seleccionado",false);
			$(this).css('color','black');
		}
	});

	$('.pregunta-adicional-alternativa-simple .grupo-alternativas-pregunta-simple .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta'); //se obtiene numero de pregunta
		$("#"+numeroPregunta+" .grupo-alternativas-pregunta-simple  li label").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia de color las alternativas						
			$(this).css("color","gray");				//se cambia atributo data-seleccionado -> true
		});
		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true
	});

	//Caso 4: Pregunta con respuesta tipeada

	//Evento de boton para guardar los datos de la encuesta
	$('#boton').click(function(){
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
	                success:  function (response) {
	                        $("#resultado").html(response);
	                }
	        });
		});

		//Para guardar respuesta(s) de pregunta(s) tipeada
		$(".pregunta-respuesta-tipeada .respuesta-tipeada input, .pregunta-adicional .respuesta-tipeada input").each(function(){
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
		                        $("#resultado").html("Procesando, espere por favor...");
		                },
		                success:  function (response) {
		                        $("#resultado").html(response);
		                }
		        });
			}
		});	
	});


	$('#btnTraer').click(function(){
		var parametros = {"indice": 2};
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
                   			$("#"+datos[i].numeroPregunta+" ul li label[data-indice="+datos[i].respuestaPregunta+"][data-pregunta="+datos[i].numeroPregunta+"]").css('color','purple');
                   		}
	                }
	        });
	    var parametrosrt = {"indice":3};
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
                   contenedorTabla.html("<table align='center' border='1'>"+
                    "<thead>"+
                    	"<tr>"+
		                    "<th>Codigo Usuario</th>"+
							"<th>Nombre(s) Usuario</th>"+
							"<th>Apellidos Usuario</th>"+
                    	"</tr>"+
                    "</thead>"+
                    "<tbody id='cuerpoTabla'></tbody>"+
                    "</table>");
                    var cuerpoTabla = $('#cuerpoTabla');
                    for (var i = 0; i < numeroFilas; i++) {
                        cuerpoTabla.append('<tr><td>'+datos[i].dniAlumno+'</td><td>'+datos[i].nombres+'</td><td>'+datos[i].apellidos+'</td></tr>');
                    }
                    
            }
        });
	});
});
