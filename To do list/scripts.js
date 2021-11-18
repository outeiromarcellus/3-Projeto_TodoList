

let input = document.getElementById("caixadepesquisa")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("exemplo")
let listacompleta = document.getElementById("tarefas")

let arraydetarefa = []

reloadtask()

function showmetask() {
    let novali = ""

    arraydetarefa.forEach((tarefa, index) => {
    
        novali = novali + `
        <li class="itemtarefa ${tarefa.concluida == true ? "concluido" : ""} ">

                <button class="rocket" onclick="concluirTarefa(${index})">

                    <i class="fas fa-rocket"></i>

                </button>


                <p class="first  ${tarefa.concluida == true ? "concluido" : ""}" id="exemplo">${tarefa.tarefa}</p>

                <button class="delete" onclick="deletarTarefa(${index})">

                    <i class="fas fa-trash"></i>

                </button>

            </li>
            `

    })

    listacompleta.innerHTML = novali
    localStorage.setItem("lista", JSON.stringify(arraydetarefa))
}


function deletarTarefa(index) {

    arraydetarefa.splice(index, 1)
    showmetask()

}


function addtask() {

    arraydetarefa.push({
        tarefa: input.value,
        concluida: false
    })
    
    showmetask()
}



function concluirTarefa(index) {

    arraydetarefa[index].concluida = !arraydetarefa[index].concluida

    showmetask()
}

function reloadtask(){
    let mytask = localStorage.getItem("lista")

    if(mytask){
        arraydetarefa = JSON.parse(mytask)

        showmetask()
    }
  
}




button.addEventListener("click", addtask)


