//! AULA DOM - Document Object Model, uma API (Interface de Programação de Aplicações) que representa uma página HTML ou XML como uma árvore de objetos


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
    const termo = elFiltroBusca.value.toLowerCase() // Para buscar primeiro passa o que foi digitado para minúsculo
    console.log("termo digitado em minúsculo: " + termo)

    // Pega o valor selecionado no filtro de status
    const filtro = elFiltroStatus.value
    //console.log("filtro de status: ", filtro)

    //* Aplica filtros de status e busca 
    const filtradas = tarefas.filter(function(t){  
        
        const okStatus = filtro === "todas" ? true : t.status // se o filtro for "todas", aceita qualquer status
                                                             //senão - compara com t.status
        
        //* Se houver termo, ele verifica se o título contém esse termo
        //* Se o usuário digitar algo, só aceita a tarefa se for igual ao que o usuário digitou
        //* Se o usário não digitar nada, retorna a lista completa com todas as tarefas
        const okBusca = termo ? t.titulo.toLocaleLowerCase().includes(termo) : true // .includes - verfica se inclui o termo

        return okStatus && okBusca
    })

    //* Limpar a lista antes de redesenhar, para que não haja repetição
    elLista.innerHTML = "" // .innerHTML - coloca alguma coisa na tela

    //* Criar os elementos da lista para cada tarefa filtrada, percorrendo cada uma delas e executando alguma ação
    filtradas.forEach(function(t){

        //*Cria uma classe
        const li = document.createElement('li')// Ao passar por cada tarefa, cria um elmento chamado "li"

        //*Cria uma class para o li e colocando qual status
        li.className = "tarefa" + t.status // Class = "tarefa pendente" ou "tarefa concluida", depende do status

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

    })
}


