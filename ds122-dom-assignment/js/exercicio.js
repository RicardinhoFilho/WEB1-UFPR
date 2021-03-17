/*var criarLista = document.createElement("ul")
var getElementById

Adicionar()
document.getElementById("Adicionar").addEventListener("click", Adicionar())*/



document.getElementById("adicionar").addEventListener("click", f);

function f() {
    var mensagem = document.createTextNode(document.getElementById("texto").value);//coleta texto da caixa de texto 

    var item = document.createElement("li");//cria um elemento de lista "li"

    item.appendChild(mensagem);//adiciona "mensagem"(input da caixa de texto) no elemento "li"
  

    var element = document.getElementById("lista");//pega o elemento criado no html com id "lista"
    element.appendChild(item);//adiciona neste elemeto a variavel adicinar item 

}