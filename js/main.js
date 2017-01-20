$(document).ready(function () {

	$('.alternativa').click(function(){
		var numeroPregunta = $(this).data('pregunta');
		$("#"+numeroPregunta+" .grupo-alternativas li label").each(function(){
			$(this).css("color","gray");
		});
		$(this).css('color','red');
	});
});
