import {user_section,select,URL,data_table,addUser_btn } from "./querySelector"
import {createInput} from "./createInput"
import {createTodo} from "./createTodo"
import {createDelBtn} from "./createDelete"
import {lStorage,Local_store} from        "./localStore"
let data = [];
async function startUp() {
  const response = await fetch(URL);
  data = await response.json();
  let dataBase = Local_store(data);
  renderInitialTodoList(dataBase);
  createAllOptions(dataBase);
  addUser_btn.addEventListener("click", function(){
    addTodo(dataBase)
  })
}

startUp();


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
  table_cell.setAttribute('id', todo.id )
  // console.log(todo.id)
  table_cell.innerHTML = `<td> ${todo.userId} </td> 
  <td> ${todo.title} </td> 
  <td class='completed'> ${todo.completed} </td>
  `;
  appendToDataTable(table_cell, arg, table_cell);
};
const appendToDataTable =(cell,cellarg,Cell)=>{
  cell.appendChild(createInput(todo,changeStatus));
  cell.appendChild(createDelBtn(todo, cellarg, Cell,data_table))
  data_table.appendChild(Cell);
}
const changeStatus = (e, arg) => {
  let id;
  if (e.target.checked) {
    arg.completed = true;
    id = document.getElementById(arg.id).children[2];
    id.innerHTML = arg.completed;
  } else if (!e.target.checked) {
    arg.completed = false;
    id = document.getElementById(arg.id).children[2];
    id.innerHTML = arg.completed;
  }
}

function addTodo(dataEl) {
  let custom_Title = document.querySelector("#Title").value;
  let newTodo = createTodo(custom_Title,select.value,dataEl);
  dataEl.push(newTodo);
  console.log(dataEl.indexOf(newTodo))
  addTodoInTheList(newTodo,dataEl);
};
lStorage();
