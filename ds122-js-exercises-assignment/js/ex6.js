/*## Exercício 6

Crie uma função que procura por uma substring dentro um uma string. Caso o trecho
procurado exista na string, a função retorna a posição em que o trecho começa.
Caso contrário, a função deve retornar o valor -1.
Por exemplo:

```js
var s = "Aula de web1"

console.log(procuraSubStr(s,"web1"))
// -> 8
console.log(procuraSubStr(s,"web2"))
// -> -1
```

O programa **não** pode utilizar nenhum método nativo do JS que realize a busca por
substrings. */

var s = "Aula de web1 web2"
console.log(contaLetras(s, "web22"))

function contaLetras(palavra, substring) {
    var i, cont = 0, j, retorno = -1
    var testa = false

    letra = substring[0]
    for (i = 0; i < palavra.length; i++) { //varre vetor em busca da letra inical  


        if (palavra[i] == letra) { //se achar contador passa a ser 1
            cont++
        }

        if (cont > 0) { //quando contator for 1 começa a busca pela substring

            aux = i //passamos valor de i(localidadade da palavra que se encontra nossa primeira letra)

            for (j = 0; j < substring.length; j++) { //varremos nossa substring 
                retorno = i
                
                if (palavra[aux] === substring[j]) { //se a letra da palavra for igual a letra da substring testa = true 
                    testa = true
                } else { //caso contrário resetamos cont e testa, e quebramos nosso looping

                    cont = 0
                    testa = false
                    break

                }
                
                aux++ //somando aux 

            }

        }

        if (testa) { //se testa retornar verdadeiro,quebramos o looping 
            break
        }
    }
    if(testa == false){
        return -1
    }

    return retorno 
}