//5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function anoNasc(ano) {

    if (ano < 2004){
        return `Você é maior de idade.`
    } else 
        return `Você é de menor.`
}
console.log(anoNasc(1988))//Você é maior de idade.
