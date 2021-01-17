export const copyRight = () => {
    let mydate = new Date();
    console.log(mydate)
}
export const createInput = (todo,cSs) => {
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add = 'check';
    checkbox.checked = todo.completed ;
    console.log(checkbox)
    checkbox.addEventListener('click', function (e) {
        console.log("this is the todo : ", todo)
        cSs(e, todo);
    })
    td.appendChild(checkbox)
    return td;
};

