$(document).ready(function () {

	$('.alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta');
		$("#"+numeroPregunta+" .grupo-alternativas li label").each(function(){
			$(this).attr("data-seleccionado","false");
			$(this).css("color","gray");
		});
		$(this).css('color','red');
		$(this).attr("data-seleccionado","true");
	});

	$('#boton').click(function(){
		$(".grupo-alternativas li label[data-seleccionado=true]").each(function(){
			$(this).css("color","blue");
			console.log($(this).data('pregunta')+" - "+$(this).data('indice'));
		});
	});
});
