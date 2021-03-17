/*## Exercício 3

Crie uma função que retorna a soma dos elementos de um array. Por exemplo:

```js
var a = [1,2,3];

console.log(soma(a));
// -> 6
```*/

var i, a = [1,2,3],aux = 0 

for(i=0; i < a.length; i++){

    aux += a[i] 
}

console.log(aux)