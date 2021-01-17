import todoModel from "./data/todos"
export const createDelBtn = (todo, rowDlt,table) => {
    let td = document.createElement('td');
    const dltBtn = document.createElement('button');
    dltBtn.classList.add('dltBtn');
    dltBtn.innerHTML += `<i class="fas fa-times"></i>`
    dltBtn.addEventListener('click', function(e){
      deleteToDo(todo,table,rowDlt)
    })
    td.appendChild(dltBtn)
    return td;
}
const deleteToDo = (todo,tb,rD) => {
  todoModel.deleteTodo(todo.id);
  // here 
  tb.removeChild(rD);
  console.log(todo)
}