/*4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.*/

function parOuImpar (num){
    if (num %2 == 0){
        return 'Esse número é par!'
    } else {
        return 'Esse número é ímpar!'
    }
}
console.log(parOuImpar(34))//Esse número é par!
