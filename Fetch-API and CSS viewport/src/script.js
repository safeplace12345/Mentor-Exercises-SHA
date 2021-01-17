import {user_section,selectUsersField,URL,data_table,addUser_btn } from "./querySelector"
import {createInput} from "./createInput"
import {createTodo} from "./createTodo"
import {createDelBtn} from "./createDelete"
import {lStorage,Local_store,addToLstore} from        "./localStore"
import todoModel from "./data/todos"
let data = [];
async function startUp() {
  let dataBase = await todoModel.init();
  renderInitialTodoList(dataBase);
  const userIds = getUniqueUserIdsArray(dataBase)
  addUserOptions(userIds);
  addUser_btn.addEventListener("click", function(){
      let title = document.querySelector("#Title").value;
      let userId = selectUsersField.value;
    addTodo(title,userId)
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

const addTodoInTheList = (todo) => {
  let table_cell = document.createElement("tr");
  table_cell.classList.add("tr-class", "tb-class");
  table_cell.setAttribute('id', todo.id )
  table_cell.innerHTML = `<td> ${todo.userId} </td> 
  <td> ${todo.title} </td> 
  <td class='completed'> ${todo.completed} </td>
  `;
  appendToDataTable(table_cell ,todo);
};

const appendToDataTable =(cell , todo)=>{
  let newInput = createInput(todo,changeStatus)
  cell.appendChild(newInput);
  cell.appendChild(createDelBtn(todo, cell,data_table))
  data_table.appendChild(cell);
}
const changeStatus = (e, arg) => {
// console.log(e,arg)
  let id = document.getElementById(arg.id).children[2];
 console.log(id)
  if (e.target.checked) {
    arg.completed = true;
    id.innerHTML = arg.completed;
  } else if (!e.target.checked) {
    arg.completed = false;
    id.innerHTML = arg.completed;
  }
}

function addTodo(title,userId) {
  let newTodo = todoModel.addTodo(title, userId)
  addTodoInTheList(newTodo);
};
lStorage();
// addToLstore()