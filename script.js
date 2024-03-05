const button = document.querySelector ('.Botao')
const input = document.querySelector ('.input-task')



function GetInput(){
    console.log(input.value)
}

button.addEventListener('click', GetInput)