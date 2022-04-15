/*2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os
 números forem iguais, mostre uma mensagem no console "Os números são iguais".*/
 
 function maiorOuIgual (num1, num2) {
      
    if (num1 > num2 ){
      return `O número ${num1} é maior do que o ${num2}.`
    } else if (num2 > num1) {
      return `O número ${num2} é maior do que o ${num1}.`
    }else {
      return 'Esses número são iguais!'
    }
}
    console.log(maiorOuIgual (3, 9))//O número 9 é maior do que o 3.
   

