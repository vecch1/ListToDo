const button = document.querySelector ('.Botao');
const input = document.querySelector ('.input-task');
const tarefas = document.querySelector('.tarefas');
const checked = false

function GetInput(){
    console.log(input.value)
    if (input.value != '') {
        var tarefa = document.createElement('p');
        tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + input.value;
        input.value = '';
        tarefa.addEventListener('click', function(){
            if (checked == false){
                tarefa.style.textDecoration = 'line-through';
                checked = true;
            }
            else {
                tarefa.style.textDecoration = '';
                checked = false;
            }
        })
        tarefa.addEventListener('dblclick', function(){
            tarefas.removeChild(tarefa);
        })
    }
}

button.addEventListener('click', GetInput)
