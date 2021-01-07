export const createDelBtn = (todo, todoList, rowDlt,table) => {
    let td = document.createElement('td');
    const dltBtn = document.createElement('button');
    dltBtn.classList.add('dltBtn');
    dltBtn.innerHTML += `<i class="fas fa-times"></i>`
    dltBtn.addEventListener('click', function(e){
      deleteToDo(todoList,table,rowDlt)
    })
    td.appendChild(dltBtn)
    return td;
}
const deleteToDo = (td,tb,rD) => {
console.log(td.length)
td.splice(td.indexOf(todo), 1);
    tb.removeChild(rD);
}