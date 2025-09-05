
// //* NÍVEL BÁSICO *//

// //!ATIVIDADE 1
// let idadeUsuario = parseInt(prompt("Insira sua idade: "))

// if(idadeUsuario >= 18){
//     alert("Você é maior de idade")
//     console.log("Usuário maior de idade")
// } else {
//     alert("Você é menor de idade")
//     console.log("Usuário menor de idade")
// }

// //!ATIVIDADE 2
// let numero = prompt("Digite um número: ")

// if(numero <= 0){
//     console.log("O número é negativo")
// } else {
//     console.log("O número é positivo")
// }

// //!ATIVIDADE 3
// let nota = prompt("Digite a nota do aluno, sendo de 0 a 100: ")

// if(nota >= 60){
//     alert("Aprovado(a)!")
//     console.log("Usuário aprovado(a)!")
// } else {
//     alert("Reprovado(a).")
//     console.log("Usuário reprovado(a).")
// }

// //!ATIVIDADE 4
// let numero2 = prompt("Digite um número: ")

// if(numero2 >= 1){
//    alert("O número é positivo")
//    console.log("O número é positivo")
// } else if (numero2 == 0){
//     alert("O número é zero")
//     console.log("O número é zero")
// } else {
//     alert("O número é negativo")
//     console.log("O número é negativo")
// }

// //!ATIVIDADE 5
// let idade2 = prompt("Digite sua idade: ")

// if (idade2 <= 0){
//     alert("Você não nasceu")
//     console.log("Usuário não nascido")
// } else if(idade2 > 0 && idade2 <= 12){
//     alert("Você é uma criança")
//     console.log("Usuário criança")
// } else if (idade2 > 12 && idade2 <=17) {
//     alert("Você é um adoslescente")
//     console.log("Usuário adoslescente")
// } else{
//     alert("Você é um adulto")
//     console.log("Usuário adulto")
// }

// //!ATIVIDADE 6
// let numero3 = prompt("Digite um número: ")

// if (numero3 % 2 == 0){ //usamos o % quando queremos o resto da divisão
//     alert("O número é par")
//     console.log("O número é par")
// } else {
//     alert("O número é impar")
//     console.log("O número é impar")
// }

// //* NÍVEL INTERMEDIÁRIO *//

// //!ATIVIDADE 1
// let numero1 = parseInt(prompt("Digite um número: "))
// let numero2 = parseInt(prompt("Digite outro número: "))
// let operacao = prompt("Digite a operacao desejada: ")
// let resultado = 0

// if (operacao == "+"){
//     resultado = numero1 + numero2
// } else if (operacao == "-"){
//     resultado = numero1 - numero2
// } else if (operacao == "*" || operacao == "x"){
//     resultado = numero1 * numero2
// }else if (operacao == "/"){
//     resultado = numero1 / numero2
// }

// alert(`O resultado da sua operação é: ${resultado}`)
// console.log(`O resultado da sua operação é: ${resultado}`)

// //!ATIVIDADE 2
// let numeroA = parseInt(prompt("Digite um número: "))
// let numeroB = parseInt(prompt("Digite um número: "))
// let numeroC = parseInt(prompt("Digite um número: "))

// if (numeroA >= numeroB && numeroA >= numeroC){
//     alert(`O maior número é ${numeroA}`)
//     console.log(`O maior número é ${numeroA}`)
// } else if (numeroB >= numeroC) { //ja verificou se o número A é maior
//     alert(`O maior número é ${numeroB}`)
//     console.log(`O maior número é ${numeroB}`)
// } else {
//     alert(`O maior número é ${numeroC}`)
//     console.log(`O maior número é ${numeroC}`)
// }

// //!ATIVIDADE 3
// let valorCompra = parseInt(prompt("Digite o valor total de sua compra: "))

// if (valorCompra > 100){
//     alert(`O desconto será de R$${valorCompra * 0.1} Totalizado R$${valorCompra * 0.9}`)
//     //alert("O desconto será de R$" + valorCompra * 0.1 + " Totalizado R$" + valorCompra * 0.9) //outra forma de escrever
// } else{
//     alert(`Nenhum desconto disponível. Total R$${valorCompra}`)
// }

// //!ATIVIDADE 4
// let usuario = prompt("Digite o seu usuário: ")
// let senha = parseInt(prompt("Digite sua senha: "))

// if (usuario == "admin" && senha == "1234"){
//     alert("Login bem-sucedido!")
//     console.log("Login bem-sucedido!")
// } else {
//     alert("Acesso negado.")
//     console.log("Acesso negado.")
// }

// //*NÍVEL AVANÇADO

// // //!ATIVIDADE 1
// let ladoA = parseInt(prompt("Insira o valor do primeiro lado do triângulo: "))
// let ladoB = parseInt(prompt("Insira o valor do segundo lado do triângulo: "))
// let ladoC = parseInt(prompt("Insira o valor do terceiro lado do triângulo: "))


// //verificar se é triângulo
// if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
//     alert("Não é um triângulo")
// } else if (ladoA == ladoB && ladoB == ladoC) {
//     alert("Triângulo Equilátero")
// } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
//     alert("Triângulo Isóceles")
// } else{
//     alert("Triângulo Escaleno")
// }

// //!ATIVIDADE 2
// let nota = parseInt(prompt("Insira a nota"))

// if (nota > 100 || < 0){
//     alert("Digite novamente uma nota válida")
// } else {
//     switch (true) //fazer a validação de ordem crescente para poder passar pelos cases corretamente
//     {
//         case (nota >= 90) :
//             alert("Sua nota é A")
//         break

//         case (nota >= 80) :
//             alert("Sua nota é B")
//         break

//         case (nota >= 70) :
//             alert("Sua nota é C")
//         break

//         case (nota >=60) :
//             alert("Sua nota é D")
//         break

//         default :
//             alert("Sua nota é F")


//     }
// }

// //!ATIVIDADE 3
// let altura = parseFloat(prompt("Digite a altura: "))
// let peso = parseFloat(prompt("Digite o peso: "))
// const imc = peso / (altura * altura)

// if (imc <= 18.5){
//     alert("Magreza")
// } else if (imc <= 24.9){
//     alert("Normal")
// } else if (imc <= 29.9){
//     alert("Sobrepeso")
// } else if (imc <= 39.9){
//     alert("Obesidade")
// } else {
//     alert("Obsidade grave")
// }

//!ATIVIDADE 4
let ano = parseInt(prompt("Digite o ano:"))

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){ //o ano é bissexto se for divisível por 4, mas não por 100, exceto se for divível por 400
    alert(`O ano ${ano} é bissexto`)
} else {
    alert(`O ano ${ano} não é bissexto`)
}





