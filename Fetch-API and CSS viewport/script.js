// TODO Add userId instead of 'name' (modify createTodo function) done
// TODO When checking or unchecking a todo, use an event listener to modify data
// TODO UI Improvements remove users section and add input field with dropdown aboth table (look like a tr)
// TODO UI Improvements - improve layout by removing scrolling from document and have elements take up 100% of screen
// TODO refactoring
// TODO Add a new button next to each todo, that would remove it from the list and data
// BONUS add option for pressing enter instead of Add todo button


// loop and create table elements

// let custom_Id = document.querySelector('#Id');
let custom_Title = document.querySelector("#Title");
let custom_Completed = document.querySelector("#Completed");
const user_section = document.querySelector(".user-section");
const select = document.querySelector(".users-select");
const URL = "https://jsonplaceholder.typicode.com/todos";
let data = [];

async function startUp() {
  const response = await fetch(URL);
  data = await response.json();
  renderInitialTodoList(data);
  createOptions(data);
  console.log(data.length);
}
startUp();

const addUser_btn = document.querySelector(".addUser");
addUser_btn.addEventListener("click", function (element) {
  let custom_Title = document.querySelector("#Title").value;
  let newTodo = createTodo(custom_Title);
  data.push(newTodo);
  addTodoInTheList(newTodo);
});

const createOptions = (arg) => {
  for (user of manipulateIds(arg)) {
    const optionEl = document.createElement("option");
    optionEl.innerHTML = user;
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
    addTodoInTheList(todo);
  }
  let checkboxes = document.querySelector('.check');
  console.log(checkboxes)
}

const addTodoInTheList = (todo) => {
  let table_cells = document.createElement("tr");
  table_cells.classList.add("tr-class", "tb-class");
  table_cells.innerHTML = `<td> ${todo.userId} </td> 
  <td> ${todo.title} </td> 
  <td> ${todo.completed} </td>
  `;
  table_cells.appendChild(createInput(todo));
  table_cells.appendChild(createDelBtn(todo))
  document.querySelector("#data-table").appendChild(table_cells);
  // console.log(createInput(todo))


};
const createInput = (arg) => {
  let td = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add = 'check';
  checkbox.checked = arg.completed !== true ? checkbox.checked = false : checkbox.checked = true;
  checkbox.addEventListener('click',function(e){
    console.log(checkbox.checked)
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
const createDelBtn = (todo) => {
  let td = document.createElement('td');
  const dltBtn = document.createElement('button');
  dltBtn.innerText = 'Delete';
  dltBtn.addEventListener('click',function(e){
    console.log('works')
  })
  td.appendChild(dltBtn)
  return td
}