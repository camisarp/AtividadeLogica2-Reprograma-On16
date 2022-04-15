//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(dia) {

    switch (dia) {
        case 1:
            return 'Esse dia é uma segunda-feira!'
        break
        case 2:
            return 'Esse dia é uma terça-feira!'
        break
        case 3:
            return 'Esse dia é uma quarta-feira!'
        break
        case 4:
            return 'Esse dia é uma quinta-feira!'
        break
        case 5:
            return 'Esse dia é um Sextouuuuuu!'
        break
        case 6:
            return 'Esse dia é um sábado!'
        break
        case 7:
            return 'Esse dia é um domingo!'
        break   
        default: 
            return 'Esse dia não foi encontrado.'
    }
}
console.log (diaDaSemana(3))//Esse dia é uma quarta-feira!
