/*4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.*/

function parOuImpar (num){
    if (num %2 == 0){
        return 'É par!'
    } else {
        return 'É impar!'
    }
}
console.log(parOuImpar(32))
console.log(parOuImpar(53))