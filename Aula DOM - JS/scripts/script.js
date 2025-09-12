//! AULA DOM - Document Object Model, uma API (Interface de Programação de Aplicações) que representa uma página HTML e todos os seus elementos dela como uma árvore de objetos
//! Cada tag (como <div>, <p>, <img>) é transformada em um na árvore, permitindo que o JavaScript acesse e altere o conteúdo, a estrutura e o estilo da página dinamicamente.
//! Em resumo: o DOM é a forma como o navegador “enxerga” e manipula o HTML.


//* com o "document" conseguimos pegar os códigos do html para poder manipular no JS
//* Variável para armazenar o form
const elForm = document.getElementById('form-tarefa'); // .getElementById - pegar o elemento todo do html pelo id dele

//* Variável para armazenar o titulo da tarefa (input)
const elTitulo = document.querySelector('#titulo'); // .querySelector aceita clase (com ".") ou id  (com "#"), pega só a primeira div encontrada

//* Variável para armazenar o filtro de status
const elFiltroStatus = document.querySelector('#filtro-status') // .querySelectorAll pega tudo dentro da classe, todas as div

//* Variável para armazenar o filtro de buscas
const elFiltroBusca = document.querySelector('#filtro-busca')

//* Variável para armazenar a lista
const elLista = document.querySelector('#lista-tarefas')

//* Variável para armazenar o texto que aparece se a lista estiver vazia
const elVazio = document.querySelector('#vazio')

let tarefas = [
    { id: 1, titulo: "Estudar DOM", status: "pendente" },
    { id: 2, titulo: "Criar To-Do-List", status: "andamento" },
    { id: 3, titulo: "Praticar JavaScript", status: "concluida" },
]

//* Adiciona um "ouvinte" para o evento de submmit do formulário, esperando que algo aconteça para realizar uma ação
elForm.addEventListener('submit', function (e) {  // Nesse caso está esperando um "submit" que ocorre ao clicar no botão
                                                  // Letra "e" na função: é uma referência ao objeto de evento que o navegador cria sempre que algo acontece
    e.preventDefault() // Impede o comportamento padrão do formulário (recarregar a página)

    const titulo = elTitulo.value.trim() // .value - pega o valor digitado no imput do elTitulo // .trim() - remove todos os espaços vazios
    
    if(!titulo) return; // Se o título estiver vazio, encerra a função aqui !titulo - não pro titulo, não estiver nada
    //console.log("titulo: ", titulo)

    //* Cria um objeto representando a nova tarefa
    const nova = {id: Date.now(), titulo: titulo, status: "pendente"} // O objeto tem que ter essas informações: (id - reebe o timestamp atual); (titulo - recebe o texto digitado pelo usuário)(status - sempre inicia como "pendente")
     
    //* Adiciona uma nova tarefa dentro do array de tarefas
    tarefas.push(nova) // .push - empurra para o array tarefas a "nova" taefa criada
    console.log(tarefas)

    //* Limpar o texto do input - tirar da caixa a palavra escrita ao ja ter enviado
    elTitulo.value = ""

    //* Chamar a função render para atualizar a lista de tarefas exibida na tela
    render()
})

//* Renderizar a lista
function render(){
    // Pegar o termo digitado no filtro de busca e deixar em minúsculo
    const termo = elFiltroBusca.value.toLowerCase() // Para buscar, primeiro passa o que foi digitado para minúsculo
   // console.log("termo digitado em minúsculo: " + termo)

    // Pega o valor selecionado no filtro de status
    const filtro = elFiltroStatus.value
    //console.log("filtro de status: ", filtro)

    //* Aplica filtros de status e busca 
    const filtradas = tarefas.filter(function(t){  
        
        const okStatus = filtro === "todas" ? true : t.status === filtro // se o filtro for "todas", aceita qualquer status
                                                             //senão - compara com t.status
        
        
        const okBusca = termo ? t.titulo.toLocaleLowerCase().includes(termo) : true // Se houver termo, ele verifica se o título contém esse termo
                                                                                    // Se o usuário digitar algo, só aceita a tarefa se for igual ao que o usuário digitou
                                                                                    // Se o usário não digitar nada, retorna a lista completa com todas as tarefas
                                                                                   // .includes - verfica se inclui o termo

        return okStatus && okBusca
    })

    //* Limpar a lista antes de redesenhar, para que não haja repetição
    elLista.innerHTML = "" // .innerHTML - coloca alguma coisa na tela

    //* Criar os elementos da lista para cada tarefa filtrada, percorrendo cada uma delas e executando alguma ação
    filtradas.forEach(function(t){

        //*Cria uma classe
        const li = document.createElement('li')// Ao passar por cada tarefa, cria um elmento chamado "li"

        //*Cria uma class para o li e colocando qual status
        li.className = "tarefa " + t.status // Class = "tarefa pendente" ou "tarefa concluida", depende do status

        //* Adiciona id para o li
        li.dataset.id = t.id // O id do li recebe o id da tarefa

        //* Título da tarefa
        const h3 = document.createElement('h3')
        h3.textContent = t.titulo // .textContent - conteúdo do texto do h3, nesse caso pega o título da tarefa

        //* Caixinha de ações (checkbox, xelect, botão remover)
        const acoes = document.createElement('div')
        acoes.className = "acao"

        //* Checkbox: marcar concluída/pendente
        const check = document.createElement('input')
        check.type = "checkbox" // Tipo da caixa de selção, podendo marcar se fez ou não
        check.checked = t.status === "concluida" // Se o status da tarefa estiver marcado como concluida, ele vai marcar o check

        //* Ao mudar check, redesenha na tela
                            // 'parâmetro', função()
        check.addEventListener('change', function(){ // .addEventListener - escutador de evento // 'change' - usada caso alguma mudança aconteça
            t.status = check.checked ? "concluida" : "pendente" // Verifica se o check está clicado, caso sim, marca como concluída, senão, marca a tarefa como pendente
            render() // Mostrar novamnete na tela renderizada
        })

        // * Select de status para conseguirmos maracar: pendente, concluída ou em andamento
        const select = document.createElement('select')
        const listaSelect = ["pendente", "andamento", "concluida"]

        listaSelect.forEach(function(status) { // Cria para cada status uma option e colocar dentro do value (pendente, andamento ou concluida)
            const option = document.createElement('option')
            option.value = status

            option.textContent = status.charAt(0).toUpperCase() + status.slice(1) // .charAt - pega a posição dentro da palavra, nesse caso a posição 0 (primeira letra) 
                                                                                  // .toUpperCase - deixa a letra pegada pelo chatAt em maiúsculo
                                                                                  // .slice - pega o resto da palavra a partir da posição selecionada
                                                                                  // Nesse caso vai deixar a primeira letra em maiúscula e juntar com o resto dela
            if(t.status === status) option.selected = true
            select.appendChild(option) // .appendChild - coloca dentro da div, nesse caso o option
        })

        //* Ao mudar o select(status da tarefa), atualiza e redesenha na tela a cor da tarefa
        select.addEventListener('change', function(){
            t.status = select.value
            render() // Atualiza a tela
        })

        //* Botão para remover - tira e redesenha a tarefa
        const botao = document.createElement('button')
        botao.textContent = "X"
        botao.className = "remover"

        //* Recebe o evento de click e filtra uma nova lista
        botao.addEventListener('click', function() { // Esperando um click nesse botão
            tarefas = tarefas.filter(apagar => apagar.id !== t.id) // O apagar pega o id do que foi clicado e verifica se é diferente do id da tarefa, se for diferente ele joga fora
            render() 
        }) 

        //* Adicionando os filhos da div ações
        acoes.appendChild(check)
        acoes.appendChild(select)
        acoes.appendChild(botao)

        //* Adicionando os filhos do li
        li.appendChild(h3)
        li.appendChild(acoes)

        //*Adcionando os filhos do ul (id: #lista-tarefas - variavel: elLista)
        elLista.appendChild(li)
    })

    elVazio.style.display = filtradas.length ? "none" : "block"   // .style - acessa as propriedades do CSS
                                                                 // . display - vai ser a ação do if 
                                                                // texto aparece na tela somente se o array de filtradas existir algo, senão, recebe display none (some da tela)
} 

//* FILTRAR
//* Quando o usuário muda a opção de filtro por status
elFiltroStatus.addEventListener('change', render) // Está esperando algo acontecer para chamar a função render (se estivesse com parênteses no final do render, a função aconteceria imediatamente)

//* Quando o usuário digitar algo no campo de busca
elFiltroBusca.addEventListener('input', render)

//* Primeira renderização / atualização de informações
render()

