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

	//Caso ´2: Pregunta alternativa compuesta
	$('.pregunta-alternativa-multiple .alternativa').on( "click", function(){

		var seleccionado = $(this).data('seleccionado');

		if(seleccionado == false){
			$(this).attr("data-seleccionado","true");		// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado",true); 			// necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','green');
		}else{
			$(this).attr("data-seleccionado","false");
			$(this).data("seleccionado",false);
			$(this).css('color','black');
		}
	});

	//Caso 3: Pregunta Compuesta
	$('.pregunta-compuesta .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta'); 	//se obtiene numero de pregunta
		var alternativa = $(this).data('indice');		//se ontiene indice de alternativa (a || b ||c ...)

		$("#"+numeroPregunta+" .grupo-alternativas li label[data-pregunta="+numeroPregunta+"]").each(function(){ 	
			$(this).attr("data-seleccionado","false");	//se cambia atributo data-seleccionado -> false						
			$(this).css("color","gray");				//se cambia de color las alternativas
		});

		$(this).css('color','red'); 					//se cambia color la alternativa seleccionada
		$(this).attr("data-seleccionado","true"); 		// se cambia atributo data-seleccionado -> true

		//La funcionalidad es la siguiente: en una pregunta compuesta, las de "abajo" dependen de la de "arriba", especificamente de la alternativa que se seleccione.
		//Si la seleccionada es la letra "a" entonces se deberan mostrar (*) las siguientes preguntas que guarden relacion con esta alternativa
		//y lo mismo si fuese con la letra "b", "c", etc. 
		//Sim embargo, suponiendo que se eliga la letra "a" y que de esta dependan otras preguntas, el usuario ve la(s) pregunta(s) ocultas y marca una alternativa,
		//pero decide luego cambiar la letra "a" inicial por la "b" y que de esta tambien dependen otras preguntas. 
		//Entonces se debera hacer que las preguntas de la alternativa "a" vuelvan a su estado original y no generar conflictos. (**)

		$("#"+numeroPregunta+" .pregunta-adicional").each(function(){ 		
			var adicional = $(this).data("head");
			if(alternativa == adicional){
				$(this).show();	//(*)
			}else{
				var numeroPreguntaAdicional = $(this).attr('id');	// (**)
				$("#"+numeroPreguntaAdicional+" .grupo-alternativas li label[data-pregunta="+numeroPreguntaAdicional+"]").each(function(){ 		
					$(this).attr("data-seleccionado","false");					
					$(this).css("color","black");				
				});
				$(this).hide();
			}
		});
	});

	//Caso 4: Pregunta con respuesta tipeada

	/*
	$('.pregunta .alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta');
		$("#"+numeroPregunta+" .grupo-alternativas li label").each(function(){
			$(this).attr("data-seleccionado","false");
			$(this).css("color","gray");
		});
		$(this).css('color','red');
		$(this).attr("data-seleccionado","true");

		var alternativa = $(this).data('indice');

		console.log("numero pregunta: "+numeroPregunta+" - indice: "+alternativa);

		if(numeroPregunta == 'p2' && alternativa == 'b'){
			$("#"+numeroPregunta+" .pregunta-adicional").show();
		}else{
			$("#"+numeroPregunta+" .pregunta-adicional").hide();
		}

	});*/
	/*
	$('#boton').click(function(){
		$(".grupo-alternativas li label[data-seleccionado=true]").each(function(){
			$(this).css("color","blue");
			console.log($(this).data('pregunta')+" - "+$(this).data('indice'));
			var pregunta = $(this).data('pregunta');
			var alternativa = $(this).data('indice');
			var parametros = {
				"pregunta" : pregunta,
				"respuesta" : alternativa
			}
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
	});

	$('.pregunta-alternativa-multiple .alternativa').on( "click", function(){

		var seleccionado = $(this).data('seleccionado');

		if(seleccionado == "no"){
			$(this).attr("data-seleccionado","si");// no funciona para cambiar internamente, solo de forma visual
			$(this).data("seleccionado","si"); // necesario para cambiar estado del atributo data-seleccionado, este si lo hace de forma interna
			$(this).css('color','green');
		}else{
			$(this).attr("data-seleccionado","no");
			$(this).data("seleccionado","no");
			$(this).css('color','black');
		}
	});/*
	*/
});
