//*NÍVEL BÁSICO
// //! ATIVIDADE 1 - Contagem de 1 a 10
// for (let i = 1; i <= 10; i++){ // enquanto i for menor igual a 10 ele imprime e adiciona mais um
//     console.log(i)
// }

// //! ATIVIDADE 2 - Tabuada de um número
// let numero = parseInt(prompt("Digite um número"))

// for(let i = 1; i <= 10; i++){   
//         console.log(`${numero} x ${i} = ${numero * i}`)
//     }

// //! ATIVIDADE 3 - Soma dos primeiros N números naturais
// let n = parseInt(prompt("Digite um número inteiro positivo: "))
// let soma = 0
 
// for(let i = 1; i <= n; i++){ // vai somando os valores até atingir o "n" digitado pelo usuário
//     soma += i // soma = soma + 1
// }
// console.log(`A soma dos números de 1 até ${n} é: ${soma}`)

// //*NÍVEL INTERMEDIÁRIO
// //! ATIVIDADE 1 - Exibir números pares de 1 a 50
// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// //! ATIVIDADE 2 - Jogo de adivinhação de um número
// let numeroAleatorio = Math.floor(Math.random() * 100)  // Math.random = gera números aleatórios a cada rodada de  a 0 a 1 (sem incluir o 1), se multiplicado por 100, fica de 0 a 99
//                                                       // Math.floor =  arredonda os números gerados
// let numeroUsuario = parseInt(prompt("Tente adivinhar o número de 1 a 100: "))

// while (numeroUsuario != numeroAleatorio) {
//     if (numeroUsuario > numeroAleatorio) {
//         alert(`O número ${numeroUsuario} é maior que o correto.`)
//         numeroUsuario = parseInt(prompt("Você errou! Tente novamente."))
//     } else if (numeroUsuario < numeroAleatorio) {
//         alert(`O número ${numeroUsuario} é menor que o correto.`)
//         numeroUsuario = parseInt(prompt("Você errou! Tente novamente."))
//     } break; //encerrar o while
// } 
//     alert("Parabéns você acertou o número 🥳!")


//! ATIVIDADE 3 - Contagem regressiva
// let numero = parseInt(prompt("Insira um número inteiro positivo: "))

// console.log(numero)
// while (numero > 0){
//     console.log(--numero) // Primeiro ele decrementa o numero e dps imprime
// }

//* NÍVEL AVANÇADO

// //! ATIVIDADE 1 - Soma dos dígitos de um número
// let numero = parseInt(prompt("Insira um número inteiro e positivo: "))
// let soma = 0

// if (numero >= 0){
//     while(numero > 0){
//         soma += numero % 10 // pega o último dígito do número - divide por 10 e pega o resto acrescentando na variável soma
//         numero = Math.floor(numero / 10) // remove o último dígito e volta novamente para a linha anterior até acabar o while.
//     }
//     console.log("A soma dos dígitos é: " + soma)
// } else {
//     console.log("O número precisa ser inteiro e positivo")
// }

//! ATIVIDADE 2 - Fatorial de um número - o fatorial é um número multiplicado pelo seu número anterior
// let numero = parseInt(prompt("Digite um número: "))
// let fatorial = 1 //não pode se iniciar por 0, pois no final do cálculo iria multiplicar por 0

// for (let i = 1; i <= numero; i++){ // o i é incrmentado mais 1 até chegar no número inserido pelo usuário
//     fatorial *= i // fatorial = fatorial * i 
// }
// console.log(`O fatorial de ${numero} é ${fatorial}.`)

//! ATIVIDADE 3 - Inverter a sequência de um número
// let numero = parseInt(prompt("Digite um número: ")) // Entrada do número
// let numeroInvertido = 0 // Saída número
// let flagNegativo = false // Caso o número inserido seja negativo

// if(numero < 0) {
//     numero *= -1 // Multiplicar o número por -1 para o mesmo ficar negativo
//     flagNegativo = true
// }

// while(numero > 0) {
//     let unidade = numero % 10 //Para pegar o último dígito (unidade)
//     numeroInvertido = unidade + numeroInvertido * 10 // Guardando o número após a inversão
//     numero = (numero - unidade) / 10 // removendo a unidade para voltar para o while até chegar a 0
// }

// if(flagNegativo) numeroInvertido *= -1  // Após a inversão feita no while, multiplica por -1 para ficar negativo

// alert(`Após a inversão o número se resulta em ${numeroInvertido}`)

//! ATIVIDADE 4 - Números perfeitos de 1 a 1000
console.log("Entre 1 e 1000 os números perfeitos são: ")

for(let numero_testado = 1; numero_testado <= 1000; numero_testado++){  // Testa um por um qual é perfeito
    let somaDivisores = 0

    for(let divisor_testado = 1; divisor_testado < numero_testado; divisor_testado++){ // Testa os divisores um por um
        if(numero_testado % divisor_testado === 0){  // Verifica se é divisor
            somaDivisores += divisor_testado
        }
    }

    const numerosPerfeitos = [numero_testado]

    if(somaDivisores === numero_testado){ // Veriicação do número perfeito
        let mensagem = numerosPerfeitos.map(numero => numero)   
        console.log(mensagem)
    }
}
