var list=[];

function desenha_lista(list){

	var n = list.length;

	$("#list").html("");
	for(var i=0; i<n; i++)
		$("#list").append($("<li></li>").html(list[i]));

	return(list);
}

$(document).ready(function(ev){

  $("#list-form").on("submit",function(ev){
		ev.preventDefault();
		var item;

		list.push($("#item").val());
		$("#item").val("");

		desenha_lista(list);

		// Impede que o formulario seja submetido e pagina recarregue.
		return(false);
	});
});
