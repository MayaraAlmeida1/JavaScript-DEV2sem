//! FILTER

//* Atividade 1
// const notas = [4, 7, 9, 3, 10, 5]

// const notasMaiores = notas.filter(nota => nota >=7)
// console.log(notasMaiores)

//* Atividade 2 
// const palavras = ["sol", "mar", "computador", "lua", "código"]

// const palavrasMaiores = palavras.filter(palavra => palavra.length > 4)
// console.log(palavrasMaiores)

//* Atividade 3
// const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"]

// const animaisLetraC = animais.filter(animal => animal.startsWith("c"))
// console.log(animaisLetraC)

//! FIND 

//* Atividade 1
// const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]

// const filmeLetraB = filmes.find(filme => filme.startsWith("B"))
// console.log(filmeLetraB)

//* Atividade 2
// const numeros = [2, 4, 6, 9, 12, 15]

// const numeroImpar = numeros.find(numero => numero % 2 === 1)
// console.log(numeroImpar)

//* Atividade 3 
// const alunos = [
//     {nome: "Ana", nota: 8},
//     {nome: "Carlos", nota: 5},
//     {nome: "Beatriz", nota: 9}
// ]
// const notaMaior = alunos.find(nota => nota.nota >= 7)
// console.log(notaMaior)

//! MAP

//* Atividade 1
// const temperaturas = [20, 25, 30, 15]

// const temperaturaConvertida = temperaturas.map(temperatura => temperatura * 1.8 + 32)
// console.log(temperaturaConvertida)

//* Atuvidade 2
// const produtos = ["camisa", "calça", "sapato"]

// const produtosRenomeados = produtos.map(produto => "Produto: " + produto.toUpperCase())
// console.log(produtosRenomeados)

//* Atividade 3
// const numeros = [1, 2, 3, 4]

// const numerosElevados = numeros.map(numero => numero ** 2) // "**" eleva o número ao quadrado
// console.log(numerosElevados)

//! REDUCE

//* Atividade 1
// const valores = [100, 200, 50, 150]

// const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0)
// console.log("O valor da compra é de: " + soma + " reais.")

//* Atividade 2 
// const palavras = ["JS", "é", "muito", "legal"]

// const frase = palavras.reduce((acumulador, palavra) => acumulador + " " + palavra, "")
// console.log(frase)

//* Atividade 3
// const numeros = [1, 2, 3, 4, 5]

// const media = numeros.reduce((total, numero) => total + numero, 0) / numeros.length
// console.log(media)

//! DESAFIOS

//* Desafio 1
// const livros = [
//     {titulo: "Dom Casmurro", paginas: 300},
//     {titulo: "O Hobbit", paginas: 295},
//     {titulo: "A Revolução dos Bichos", paginas: 112}

// ]

// const livrosPaginas = livros.filter(pagina => pagina.paginas > 200)
// const titulos = livros.map(livro => livro.titulo)
// const totalPaginas = livros.reduce((total, pagina) => total + pagina.paginas, 0)

// console.log(livrosPaginas)
// console.log(titulos)
// console.log(totalPaginas)

//* Desafio 2
const carrinho = [
    {produto: "Notebook", preco: 2500},
    {produto: "Mouse", preco: 100},
    {produto: "Teclado", preco: 200}
]

const lista = carrinho.map(produto => "Produto: " + produto.produto + " - R$" + produto.preco)
const valorTotal = carrinho.reduce((total, valor) => total + valor.preco, 0)
const produtoMouse = carrinho.find(produto => produto.produto.startsWith("Mouse"))

console.log(lista)
console.log("O valor total da compra é de " + valorTotal + " reais.")
console.log(produtoMouse)
