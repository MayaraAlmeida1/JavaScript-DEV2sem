//JS é uma linguagem não typada, ou seja, não precisamos declara o tipo da variável
//declaração de variável, pode ser com var ou let (let > var)

let nome = "Mayara" //o JS não requer ";"
let idade = 17 // let é a declaração de variáveis
const idade2 = 17 // const e a declaracao de constantes 

console.log("Olá meu nome é " + nome + ", tenho " + idade + " anos.") // concatenacao texto + variavel 
// console.log funciona como o print

let mensagem = `Olá, meu nome é ${nome}`

//alert(mensagem); //exibe a mensagem como pop-up no navegador 

console.log(typeof mensagem); //retorna o tipo da variavel
console.log(typeof idade);

let profissao
console.log(typeof profissao) // vai retornar undefined, ou seja, a variavel nao tem nenhum valor

let endereco = null;
console.log(typeof endereco)//null porem da objeto 

console.log(idade === 1) // tres sinais de igual vai analisar o que esta escrito e o tipo (significa exatamente)
console.log(idade == 1) // retorna verdadeiro caso a variável seja igual a 1


//* ESTRUTURA CONDICIONAL
//* IF E ELSE
let temperatura = 12;

if (temperatura > 25) {
    console.log("esta calor!")
}
else {
    console.log("esta frio!")
}

let nomeUsuario = prompt("Digite seu nome: ") //prompt recebe informações dos usuários 
alert("Seu nome é: " + nomeUsuario)

//*IF / ELSE IF / ELSE
let nota = parseInt(prompt("Digite a nota: ")) // parseInt converte o valor recebido para int 

if (nota >= 6) {
    console.log("Aprovado(a)!")
}
else if (nota >= 5) {
    console.log("Esta de recuperação.")
}
else {
    console.log("Reprovado(a)!")
}

//*IF TERNARIO (if de uma linha só)
let saldo = 90;

let podeComprar = saldo >= 100 ? "compra aprovada!" : "saldo insuficiente"; //"podeComprar" é uma validacao se o saldo é maior ou igual a 100
                                                                            //se for verdadeiro "compra aprovada, se fo falso "saldo insuficiente""
//!equivalente a:
/*(saldo >=100)
{
    podeComprar = "compra aprovada!"
} 
else 
{
    podeComprar = "saldo insuficiente."
}*/


//* CONDICIONAL ANINHADA
//* Multiplas verificacoes

let hora = 8;
let diaDaSemana = "terça";

if (hora >= 6 && hora < 12) {
    console.log("Bom dia!");
} else {
    if (hora >= 12 && hora < 18) {
        if (diaDaSemana == "segunda") {
            console.log("Boa tarde! Ótima semana!")
        } else {
            console.log("Boa tarde!")
        }
        } else {
            console.log("Boa noite!")
    }
}

//*SWITCH CASE

let dia = 2;

switch (dia) { // case do JS aceita strings
    case 1:
        console.log("Domingo!");
        break;

    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;

    default: //caso nao seja nenhum dos cases
        console.log("Dia inválido!")
        break;
}
