var vetIncompletas = [];
var vetCompletas = [];

$(document).ready(function(ev){
	$("#list-form").on("submit", function(ev){
		ev.preventDefault();

		vetIncompletas.push($("#item").val());
		criaElemento($("#item").val());
		$("#item").val("");
		
	})
})

function criaElemento(elemento){

	const lista = $(`<li class = 'inc'>${elemento}</li>`)
	$("ul.incompleta").append($("<li class ='inc'></li>").html(lista));
}



 $( ".incompleta" ).dblclick(function(evento) {

	console.log("clicou")


	 elemento = evento.target;
	 
	 tarefaCompleta = (elemento.textContent)
	 adicionaCompletos(tarefaCompleta)
	 
	 $(elemento.parentNode).hide();

 });


 function adicionaCompletos(elemento){

	vetCompletas.push(elemento);
	comparaVetores(elemento);
	const lista = $(`<li class = 'com'>${elemento}</li>`)
	$("ul.completa").append($("<li class ='inc'></li>").html(lista));

 }


 function comparaVetores(elemento){

		const localizacao = vetIncompletas.indexOf(elemento);
		vetIncompletas.splice(localizacao,1);

 }