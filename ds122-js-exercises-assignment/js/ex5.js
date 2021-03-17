/*## Exercício 5

Crie uma função que conta a quantidade de aparições de uma dada letra em uma string.
Por exemplo:

```js
var s = "Aula de web1"

console.log(contaLetras(s,"e"))
// -> 2
```*/
var s = "Aula de web1"
console.log(contaLetras(s,"e"))

function contaLetras(palavra,letra){
    var i,cont = 0
    //console.log(palavra.length)
    
    for(i = 0; i < palavra.length; i++){

        
        if(palavra[i] == letra){
            cont++
        }
    }

    //console.log(cont)
    return cont
}

