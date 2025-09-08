//*NÍVEL BÁSICO
// //! ATIVIDADE 1
// let numero = 10

// for (let i = 1; i <= numero; i++){
//     console.log(i)
// }

// //! ATIVIDADE 2
// let numero = parseInt(prompt("Digite um número"))
// let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < tabuada.length; i++){  
//         console.log("Número: " + (numero * tabuada[i]))
//     }

// //! ATIVIDADE 3
let n = parseInt(prompt("Digite um número: "))
let soma = 0
let i = 1

while (i <= n) {
    soma += i
    console.log(i)
    i++
}
// } while (i >= n){
//     operacao += i
//     console.log(i)
//     i++
// }

console.log("A soma total dos números é: " + soma)


// //*NÍVEL INTERMEDIÁRIO
// //! ATIVIDADE 1
// let n = 50

// for(let i = 1; i <= n; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// //! ATIVIDADE 2
// let numero = 54
// //*forma de fazer com o número sendo aleatório a cada rodada
// //  let numero = Math.floor(Math.random() * 100) + 1;
// let chute = 0

// while (chute != numero) {
//     chute = parseInt(prompt("Tente adivinhar o número de 1 a 100: "))
//     if (chute > numero) {
//         alert("Número maior que o correto. Tente outra vez!")
//     } else if (chute < numero) {
//         alert("Número menor que o correto. Tente outra vez!")
//     } else {
//         alert("Parabéns você acertou o número!")
//     }
// } 


//! ATIVIDADE 3
// let n = parseInt(prompt("Insira um número: "))

// console.log(n)
// while (n > 0){
//     n--
//     console.log(n)
// } while (n < 0) {
//     n++
//     console.log(n)
// }

//* NÍVEL AVANÇADO

// //! ATIVIDADE 1
// let n = parseInt(prompt("Digite um número inteiro positivo: "))