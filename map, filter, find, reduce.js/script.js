//! FILTER

//* Filtrar números maiores que 2
// const numeros = [1,2,3,4,5,6]

// const maioresQueDois = numeros.filter(numero => numero > 2) // o "numero" é o auxiliar que percorrerá todos os valores do array
// console.log(maioresQueDois)

//* Filtrar nomes
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"]

// let nomesLongos = nomes.filter(nome => nome.length > 5) //verifica quais nomes são maiores que 5 e armazena
//                                                           //".lenght" - verifiva tamanho 
// console.log(nomesLongos)

//* Filtrar números pares
// let numeros = [1, 2,,3, 4, 5, 6, 7, 8, 9, 10]

// let pares = numeros.filter(numero => numero % 2 === 0)
// console.log(pares)

//* Filtrar um objeto
// let pessoas = [
//     {nome: "Lucas", idade: 17}, //cada linha de {} é um valor dentro de "pessoas"
//     {nome: "Mariana", idade: 22},
//     {nome: "Ana Catarina", idade: 15},
//     {nome: "Juliana", idade: 30}
// ]

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18) //filtra as pessoas dentro do objeto que possuem idade maior que 18
// console.log(adultos)

//! FIND // Parecido com o filter, porém só retorna o primeiro elemento da lista correpspondete a condição

//* Prucrar um produto pelo preço
// const produtos = [
//     {id: 1, nome: "Teclado", preco: 700},
//     {id: 2, nome: "Mouse", preco: 50},
//     {id: 3, nome: "Monitor", preco: 800}    
// ]

// const produtoCaro = produtos.find(produto => produto.preco > 600) 
// console.log(produtoCaro) // mesmo que o monitor esteja mais caro que o teclado, o primeiro que ele achou na lista(segue a ordem) foi o teclado, portanto so retornou o ele

//* Primeiro número maior que 10
// let numeros = [5, 8, 12, 20, 3, 15]
// let encontrado = numeros.find(numero => numero > 10)
// console.log(encontrado)

//* Buscar por um nome pela primeira letra
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"]

// let nomeEncontrado = nomes.find(nome => nome.startsWith("C")) // ".startsWith" procura nomes que começam com... nessse caso foi a letra C
// console.log(nomeEncontrado)

//! MAP // Pega todos os valores atribuídos ao array e transfroma com a determinada condição de todos, criando uma lista com os resultados total

//* Multiplicar todos os números por 2
// const numeros = [1, 2, 3, 4, 5, 6]

// const numerosDobrados = numeros.map(numero => numero * 2)
// console.log(numerosDobrados)

//* Criando um array a partir de objetos
// let pessoas = [
//     {nome: "Lucas", idade: 17}, 
//     {nome: "Mariana", idade: 22},
//     {nome: "Ana Catarina", idade: 15},
//     {nome: "Juliana", idade: 30}
// ]

// let nomes = pessoas.map(pessoa => pessoa.nome)  //cria uma lista somente com os nomes das pessoas
// console.log(nomes)

// let mensagem = pessoas.map(pessoa => 
//     `${pessoa.nome} tem ${pessoa.idade} anos.`
//     // pessoa.nome + " tem " + pessoa.idade + " anos."
// )
// console.log(mensagem)

//* Deixa os nomes em maiúsculo e adicionar um sufixo
// const nomes = ["ana", "bruno", "carla"]

// const nomesMaiusculo = nomes.map(nome => "Colaborador: " + nome.toUpperCase()) // ".toUpperCase" função para deixar tudo em maiúsculo
// console.log(nomesMaiusculo)

//! REDUCE // Reduz um array a um único valor (com ajuda de um acumulador e auxiliar)

//* Somar todos os números do array
// const numeros = [1, 2, 3, 4, 5]
                            
//                            //(acumulador, auxiliar)
// const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0) // o "acumulador" é o que vai acumulando (nesse caso somando) todos os valores
//                                                                             // o "numero" é o auxiliar que percorrerá todos os valores do array
//                                                                             // o ", 0" é o valor que o acumulador vai se iniciar 
// console.log(soma)

//* Verificar o maior número do array
// const numeros = [10, 5, 8, 20, 3]

// const maiorNumero = numeros.reduce((max, numero) => { // "max" é o nome do acumulador
//     if(numero > max){ // verifica se o auxiliar do momento é maior que o max 
//         return numero
//     } else {
//         return max
//     }
// }, numeros [0]) // inicializa o acumulador(max) na posição 0 do array "numeros". Nesse caso o "max" equivale a 10
// console.log(maiorNumero)

//* Contar a frequência de palavras
// const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

// const contagem = palavras.reduce((acumulador, palavra) => {
//     acumulador[palavra] = (acumulador[palavra] || 0) + 1 // o acumulador palavra verifica se já existe alguma palavra dentro do acumulador {}
//                                                          // como não existe ele deixa como 0 + 1, faz isso com todas as palavras e vai contando cada uma 
//     return acumulador
// }, {}) // O acumulador se inicia com um objeto vazio {}
//        // conforme ele vai percorrendo as palavras dentro do array, guarda elas como um valor, ele verifica se a palavra já existe dentro do acumulador, se ela for repetida vai contar junto
// console.log(contagem)

//* Calcular média de notas
// const notas = [7, 8, 9, 6, 10]

// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length // ele soma todos as notas junto com o acumulador no final divide pelo tamanho do array "notas"
// console.log(media) 

//* Uso combinado
// const usuarios = [
//     {id: 1, nome: "Alice", idade: 25},
//     {id: 2, nome: "Bob", idade: 30},
//     {id: 3, nome: "Carol", idade: 20}
// ]

// // Filtrar usuários com idade maior que 21
// const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

// // Encontrar o primeirp usuário com a idade maior que 21
// const usuarioIdade = usuarios.find(usuario => usuario.idade > 21)

// // Criar um array apenascom nomes dos usuários
// const nomesUsuarios = usuarios.map(usuario => usuario.nome)

// // Somas todas as idades dos usuários usando o reduce
// const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0) // O acumulador(total) se inicia em 0 e vai somando todas as idades

// console.log("Maiores de idade: ", maioresDeIdade) // após a vírgula, mostra o que ele recebe
// console.log("Primeiro maior de idade: ", usuarioIdade)
// console.log("Nomes de usuários: ", nomesUsuarios)
// console.log("Soma de idades: ", somaIdades)