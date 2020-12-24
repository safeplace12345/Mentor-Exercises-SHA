import {con,another} from "./test"
con();
another();
// BONUS add option for pressing enter instead of Add todo button DONE
// Refactor js with rollup

let custom_Title, custom_Completed, user_section, select, URL, data_table, data, addUser_btn;
custom_Title = document.querySelector("#Title");
custom_Completed = document.querySelector("#Completed");
user_section = document.querySelector(".user-section");
select = document.querySelector(".users-select");
URL = "https://jsonplaceholder.typicode.com/todos";
data_table = document.querySelector('#data-table');
data = [];
addUser_btn = document.querySelector(".addUser");
addUser_btn.addEventListener("click", addUserNow)

async function startUp() {
  const response = await fetch(URL);
  data = await response.json();
  renderInitialTodoList(data);
  createAllOptions(data);
}

startUp();

function addUserNow(element) {
  let custom_Title = document.querySelector("#Title").value;
  let newTodo = createTodo(custom_Title);
  data.push(newTodo);
  addTodoInTheList(newTodo);
};


const createAllOptions = (arg) => {
  for (user of manipulateIds(arg)) {
    const optionEl = document.createElement("option");
    optionEl.innerHTML = 'User ' + user;
    optionEl.value = user;
    select.appendChild(optionEl);
  }
};
const manipulateIds = (arg) => {
  let catchIds = [];
  for (user of arg) {
    catchIds.push(user.userId);
  }
  const user_id_container = [new Set(catchIds)];
  const obj = Array.from(user_id_container[0]);
  return obj;
};

const renderInitialTodoList = (arg) => {
  for (todo of arg) {
    addTodoInTheList(todo, arg);
  }
}

const addTodoInTheList = (todo, arg) => {
  let table_cell = document.createElement("tr");
  table_cell.classList.add("tr-class", "tb-class");
  table_cell.setAttribute('id', todo.id)
  table_cell.innerHTML = `<td> ${todo.userId} </td> 
  <td> ${todo.title} </td> 
  <td class='completed'> ${todo.completed} </td>
  `;
  appendToDataTable(table_cell,arg,table_cell);
};
const appendToDataTable =(cell,cellarg,Cell)=>{
  cell.appendChild(createInput(todo));
  cell.appendChild(createDelBtn(todo, cellarg, Cell))
  data_table.appendChild(Cell);
}
const createInput = (arg) => {
  let td = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add = 'check';
  checkbox.checked = arg.completed !== true ? false : true;
  checkbox.addEventListener('click', function (e) {
    changeStatus(e, arg)
  })
  td.appendChild(checkbox)
  return td;
};
const createTodo = (title, userId, arg) => {
  return {
    userId: select.value,
    id: data.length + 1,
    title,
    completed: false,
  };
};
const createDelBtn = (todo, todoList, rowDlt) => {
  let td = document.createElement('td');
  const dltBtn = document.createElement('button');
  dltBtn.classList.add('dltBtn');
  dltBtn.innerHTML += `<i class="fas fa-times"></i>`
  dltBtn.addEventListener('click', function deleteToDo(e) {
    todoList.splice(todoList.indexOf(todo), 1);
    data_table.removeChild(rowDlt);
  })
  td.appendChild(dltBtn)
  return td;
}
const changeStatus = (e, arg) => {
  if (e.target.checked) {
    let id;
    arg.completed = true;
     id = document.getElementById(arg.id).children[2];
    id.innerHTML = arg.completed;
  } else if (!e.target.checked) {
    arg.completed = false;
     id = document.getElementById(arg.id).children[2];
    id.innerHTML = arg.completed;
  }
}