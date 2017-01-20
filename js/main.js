$(document).ready(function () {

	$('.alternativa').click(function(){
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

	});

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
});
