/*3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as 
seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado*/

function calculaMedia (nota1, nota2, nota3) {
  const media = (nota1 + nota2 +  nota3)/3

  if (media >= 7 && media <= 10) {
    return 'Você foi aprovado Aprovado(a)!'
  } else if (media >= 5 && media < 7){
    return 'Você está em recuperação!'
  } else (media < 5)
    return 'Você está reprovado(a)!'
}
console.log(calculaMedia (3, 9, 5))//Você está em recuperação!