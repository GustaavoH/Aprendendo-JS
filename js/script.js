//ex001 Exibindo textos no console

/* console.log("Aprendendo Javascript!") */

//ex002 Exibindo variaveis no console

/* nome = "Samuel"

idade = "18"

console.log("Seu nome é : "+nome+" E sua idade é: "+idade); */

//ex003 Calculadora Com prompt exibida no console

/* num1 = Number(prompt("Digite um número: "));
num2 = Number(prompt("Digite outro número: "));

function calculadora(numA, numB, op) {
    if (op == "somar") {
        return numA + numB;
    }
    else if (op == "subtrair") {
        return numA - numB;
    }
    else if (op == "multiplicar") {
        return numA * numB;
    }
    else if (op == "dividir") {
        return numA / numB;
    }
    else {
        return "Esse operador não existe !";
    }
}

console.log(calculadora(num1,num2, "somar"))

console.log(calculadora(num1,num2, "subtrair"))

console.log(calculadora(num1,num2, "multiplicar"))

console.log(calculadora(num1,num2, "dividir")) */



// ex004 Exibindo qual é o maior número inteiro na tela

/* var num1 = Number(prompt("Digite um número: "));
var num2 = Number(prompt("Digite outro número:"));

document.write("Número 1:"+num1+"<br><br> Número 2: "+num2+"<br><br>")

if(num1 > num2) {
    document.write("O número "+num1+" é maior que "+num2);
}
else {
    document.write("O número "+num2+" é maior que "+num1);
}    */

//ex005 Função retorna Olá + nome

/* var nome
function saudacao(nome) {
    return "Olá " + nome;
}

console.log(saudacao("João")); */