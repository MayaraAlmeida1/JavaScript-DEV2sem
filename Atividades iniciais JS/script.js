//!ATIVIDADE 1
let idadeUsuario = prompt("Digite sua idade: ")

if(idadeUsuario >= 18){
    alert("Você é maior de idade")
    console.log("Usuário maior de idade")
} else {
    alert("Você é menor de idade")
    console.log("Usuário menor de idade")
}

//!ATIVIDADE 2
let numero = prompt("Digite um número: ")

if(numero <= 0){
    console.log("O número é negativo")
} else {
    console.log("O número é positivo")
}

//!ATIVIDADE 3
let nota = prompt("Digite a nota do aluno, sendo de 0 a 100: ")

if(nota >= 60){
    alert("Aprovado(a)!")
    console.log("Usuário aprovado(a)!")
} else {
    alert("Reprovado(a).")
    console.log("Usuário reprovado(a).")
}

//!ATIVIDADE 4
let numero2 = prompt("Digite um número: ")

if(numero2 >= 1){
   alert("O número é positivo")
   console.log("O número é positivo")
} else if (numero2 == 0){
    alert("O número é zero")
    console.log("O número é zero")
} else {
    alert("O número é negativo")
    console.log("O número é negativo")
}

//!ATIVIDADE 5
let idade2 = prompt("Digite sua idade: ")

if (idade2 < 0){
    alert("Você não nasceu")
    console.log("Usuário não nascido")
} else if(idade2 >= 0 && idade2 <= 12){
    alert("Você é uma criança")
    console.log("Usuário criança")
} else if (idade2 > 12 && idade2 <=17) {
    alert("Você é um adoslescente")
    console.log("Usuário adoslescente")
} else{
    alert("Você é um adulto")
    console.log("Usuário adulto")
}
