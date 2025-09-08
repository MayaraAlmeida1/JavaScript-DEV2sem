//!FOR
//* Contando de 1 até N (variável que o usuário escreveu)
// let n = parseInt(prompt("Digite um número: "))

// for(let i = 1; i <= n; i++){ 
//     console.log(i)
// }   
// //* Inverso da primeira opção, contando em ordem decrescente
// for (let i = n; i >= 0; i--){
//     console.log(i)
// }

//! WHILE
//* Fazer uma soma
// let soma = 0
// let i = 1

// while(i <= 10){
//     soma += i // -> soma = soma + i
//     console.log("O resultado atual é: " + soma)
//     i++
// }

// console.log("A soma total dos 10 números é: " + soma)

// //! DO / WHILE
// //*Garante a execução pelo menos uma vez
// let numero = 1

// do{ //*Primeiro executa
//     console.log("Número: " + numero)
//     numero ++
// } while (numero <= 5)

//! FOREACH
//* Ele percorre cada item de um array(vetor para armazenar valores)
// let numeros = [1, 2, 3, 4, 5]

// numeros.forEach(function(numero){
//     console.log("Número: " + numero)
// })

// let frutas = ["maçã", "banana", "uva", "pêra"]

// frutas.forEach(function(fruta){
//     console.log(fruta)
// })

// //* Este for está fazendo a mesma coisa que o forEach anterior
// for(let i = 0; i < numeros.length; i++){ // numeros.length pega o tamanho total do array 
//     console.log("Número: " + numeros[i])
// }