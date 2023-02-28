// array vacio

const todos = JSON.parse(localStorage.getItem('todos')) || [];


//funcion render 

const render = () => {
    const todoList = document.getElementById('todo-list')
    const todoTemplate = todos.map(t => '<li>'+ t + '</li>')
    todoList.innerHTML = todoTemplate.join('')
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            Todos(todos)
            render() //recursividad de la funcion render
        })
    })
}

//funcionde actualizado de pagina

const Todos = (todos) => {
    const todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString)
}


//funcion onload

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value;
        todo.value = ''
        todos.push(todoText)
        Todos(todos)
        render()
    }
}
render()