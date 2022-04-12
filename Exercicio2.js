/*2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os
 números forem iguais, mostre uma mensagem no console "Os números são iguais".*/
 
 function igualOuNot (num1, num2) {
      
    if (num1 > num2 ){
      return `O número ${num1} é maior do que o ${num2}.`
    } else if (num2 > num1) {
      return `O número ${num2} é maior do que o ${num1}.`
    }else {
      return 'Esses número são iguais!'
    }
}
    console.log(igualOuNot (3, 9))
    console.log(igualOuNot (9, 9))
    console.log(igualOuNot (5, 3))

