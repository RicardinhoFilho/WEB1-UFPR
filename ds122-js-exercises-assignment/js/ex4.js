/*## Exercício 4

Crie uma função que inverte os elemento de um array. Essa função deve ser do
tipo `in-place`, ou seja, deve realizar a inversão **sem a necessidade** de um
**array auxiliar**. Por exemplo:

```js
var a = [1,2,3]
b = inverte(a);
// b -> [3,2,1]
```*/

var a = [1,2,3]
b = inverte(a)
inverte(a)
function inverte(vet){
    //console.log(vet.length)
    var aux = 0,aux_vet = []
    //console.log(vet.lenght)
    for(i = vet.length - 1; i >= 0; i--){
        
        aux_vet[aux] = vet[i]
        aux++
    }

    
    return aux_vet
}

 
console.log(b)