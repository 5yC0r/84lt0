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
				$(this).show();
			}else{
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
		$(".grupo-alternativas li label[data-seleccionado=true],.grupo-alternativas-pregunta-simple li label[data-seleccionado=true]").each(function(){
			$(this).css("color","blue");
			console.log($(this).data('pregunta')+" - "+$(this).data('indice'));
		});
	});
});
