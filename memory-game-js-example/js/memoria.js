var cartas = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var nCartas = cartas.length;
var cartaVirada1 = null;
var cartaVirada2 = null;
var corretas = 0;
var nCliques = 0;
var viradas = [];

function criaCarta(x){
  var div  = document.createElement("div");
  var span = document.createElement("span");
  var txt  = document.createTextNode(x);
  span.appendChild(txt);
  div.appendChild(span);
  div.classList.add("carta");
  span.style.visibility="hidden";
  return(div);
}

function viraCarta(ev){
  var span = ev.target.firstChild;
  var visibility = span.style.visibility;

  if(viradas.includes(span.innerHTML)) return;
  if(cartaVirada1 == ev.target || cartaVirada2 == ev.target) return;

  if(cartaVirada1 && cartaVirada2){
    cartaVirada1.firstChild.style.visibility = "hidden";
    cartaVirada2.firstChild.style.visibility = "hidden";
    cartaVirada1 = cartaVirada2 = null;
  }

  nCliques++;

  if(!cartaVirada1){
    cartaVirada1 = ev.target;

    if(visibility == "visible")
      span.style.visibility = "hidden";
    else
      span.style.visibility = "visible";
  }
  else{
    cartaVirada2 = ev.target;
    span.style.visibility = "visible";
    if(cartaVirada1.firstChild.innerHTML == span.innerHTML){
      corretas+=2;
      viradas.push(span.innerHTML);
      cartaVirada1 = cartaVirada2 = null;
      if(corretas == nCartas){
        alert("Fim de jogo com: " + nCliques + " cliques");
      }
    }
  }
}

cartas = shuffle(cartas);
var container = document.getElementById('flex-container')

for(i=0;i<nCartas;i++){
  let c = criaCarta(cartas[i]);
  container.appendChild(c);
}

var cartas_dom = document.getElementsByClassName("carta");

for (var i = 0; i < nCartas; i++) {
  cartas_dom[i].addEventListener("click",viraCarta);
}
