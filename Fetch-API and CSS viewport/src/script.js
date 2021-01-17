import {user_section,selectUsersField,URL,data_table,addUser_btn } from "./querySelector"
import {createInput} from "./createInput"
import {createTodo} from "./createTodo"
import {createDelBtn} from "./createDelete"
import {lStorage,Local_store,addToLstore} from        "./localStore"
let data = [];
async function startUp() {
  const response = await fetch(URL);
  data = await response.json();
  let dataBase = Local_store(data);
  renderInitialTodoList(dataBase);
  const userIds = getUniqueUserIdsArray(dataBase)
  addUserOptions(userIds);
  addUser_btn.addEventListener("click", function(){
    addTodo(dataBase)
  })
}

startUp();

const addUserOptions = (users) => {
  for (user of users) {
    const userOptionEl = document.createElement("option");
    userOptionEl.innerHTML = 'User ' + user;
    userOptionEl.value = user;
    selectUsersField.appendChild(userOptionEl);
  }
};
const getUniqueUserIdsArray = (todos) => {
  let userIds = todos.map(todo => todo.userId)
  return [...new Set(userIds)];
};

const renderInitialTodoList = (todos) => {
  for (todo of todos) {
    addTodoInTheList(todo, todos);
  }
}

const addTodoInTheList = (todo, arg) => {
  let table_cell = document.createElement("tr");
  table_cell.classList.add("tr-class", "tb-class");
  table_cell.setAttribute('id', todo.id )
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
  let id = document.getElementById(arg.id).children[2];
  console.log(id.parentElement)
  if (e.target.checked) {
    arg.completed = true;
    id.innerHTML = arg.completed;
  } else if (!e.target.checked) {
    arg.completed = false;
    id.innerHTML = arg.completed;
  }
}

function addTodo(dataEl) {
  let custom_Title = document.querySelector("#Title").value;
  let newTodo = createTodo(custom_Title,selectUsersField.value,dataEl);
  dataEl.push(newTodo);
  addToLstore(dataEl)
  addTodoInTheList(newTodo,dataEl);
};
lStorage();
// addToLstore()