//5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function anoNasc(ano) {

    if (ano >= 18){
        return `Você tem ${ano} anos, é maior de idade.`
    } else 
        return `Você tem ${ano} anos, é de menor.`
}
console.log(anoNasc(34))