const input = require("readline-sync");

var mes = input.question("Digite o mes: ");

    function mesesFestivos(mes) {
        if (mes === "fevereiro"){
            console.log("Tem carnaval!")
        } else if (mes === "junho"){
            console.log("Tem são joão!")
        }   else if (mes === "dezembro"){
            console.log("Tem natal!")
        } else {
            console.log(`${mes} não é um mês festivo`)
        }
    }

mesesFestivos(mes)

var questao = input.question("Você gostaria de tentar de novo?");

function simOuNao(questao) {


    if (questao === "sim"){
        var mes = input.question("Digite o mês: ")
        mesesFestivos(mes)
    } else {
        console.log("blz")
    }}


while (questao == "sim"){
     simOuNao(questao)
     var questao = input.question("Você gostaria de tentar de novo?");
    }