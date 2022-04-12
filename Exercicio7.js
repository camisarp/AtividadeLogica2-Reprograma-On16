/*7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.*/

function divNumero (num1, num2) {

    const resultado = num1 / num2
    if (num1 % num2 === 0 && resultado % 2 === 0){
        return `O resultado da divisão é ${resultado}. O numero é par.`
    }else {
        return `O resultado da divisão é ${resultado}.`
    }
}
console.log(divNumero(8, 4))




