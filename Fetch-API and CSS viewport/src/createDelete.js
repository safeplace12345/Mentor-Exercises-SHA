export const createDelBtn = (todo, todoList, rowDlt,table) => {
    let td = document.createElement('td');
    const dltBtn = document.createElement('button');
    dltBtn.classList.add('dltBtn');
    dltBtn.innerHTML += `<i class="fas fa-times"></i>`
    dltBtn.addEventListener('click', function deleteToDo(e) {
        todoList.splice(todoList.indexOf(todo), 1);
        table.removeChild(rowDlt);
    })
    td.appendChild(dltBtn)
    return td;
}