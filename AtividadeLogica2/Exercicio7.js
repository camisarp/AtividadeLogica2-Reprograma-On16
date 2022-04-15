/*7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer 
que ele é par ou impar.*/

function divNumero (num1, num2) {

    const resultado = num1 / num2
    if (resultado % 2 === 0){
        return `O resultado da divisão é ${resultado}, e é par.`
    }else {
        return `O resultado da divisão é ${resultado}, e é ímpar.`
    }
}
console.log(divNumero(16, 2))//O resultado da divisão é 8, e é par.




