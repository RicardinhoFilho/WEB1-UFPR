/*Escreva um programa que cria uma string que representa um quadro 8x8, utilizando
o caractere de nova linha `"\n"` para separar cada uma das linhas. Por exemplo:
`"linha1..\nlinha2.."`. Cada posição do quadro deve ser representada por um espaço
em branco (`" "`) ou um `"#"`. Os caracteres devem produzir a forma de um tabuleiro
de xadrez.

Ao passar a string produzida ao comando `console.log`, o programa deve exibir
algo parecido com o seguinte:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```
 
Quando você concluir o exercício acima, altere seu código para que o tamanho
do tabuleiro (8x8, 9x9, ...) possa ser facilmente alterado. Por exemplo, por meio
de uma variável `tamanho`.*/


var str1 = []
var str2 = []
var i, j,tipo = 9

for (i = 0; i <= tipo; i++) {

    if (i % 2 == 0) {

        str1.push(" ")
        str2.push("#")
    } else {
        str1.push("#")
        str2.push(" ")
    }
}


var auxStr1 = ''
var auxStr2 = ''
for (j = 0; j < tipo; j++) {

    auxStr1 = auxStr1 + str1[j]

}

for (j = 0; j < tipo; j++) {

    auxStr2 = auxStr2 + str2[j]

}
for (i = 0; i < tipo; i++) {

    if (i % 2 == 0) {
        console.log(auxStr1)
    } else {
        console.log(auxStr2)
    }
}

