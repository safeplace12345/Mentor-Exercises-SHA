  // loop and create table elements

  // let custom_Id = document.querySelector('#Id');
  let custom_Title = document.querySelector('#Title');
  let custom_Completed = document.querySelector('#Completed');
  const user_section = document.querySelector('.user-section');
  const select = document.querySelector('.users-select');
  const add_custom_user = document.querySelector('.addUser');
  select.onchange = function () {
    console.log('works')
  }

  // Display userIDs instead of ids
  // remove userID, id, completed inputs
  // generate new I.d for select from the length of todos and add 1
  // 
  const URL = 'https://jsonplaceholder.typicode.com/todos'


  async function startUp() {
    const response = await fetch(URL);
    const data = await response.json()
    const addUser_btn = document.querySelector('.addUser');
    addUser_btn.addEventListener('click', function (element) {
      let custom_Title = document.querySelector('#Title').value;
      let newUser = createUser(custom_Title, data)
      data.push(newUser)
      loop_data(data);
      createOptions(data);
    })
    loop_data(data)
    createOptions(data)
    console.log(data.length)


  }
  startUp()

  const createOptions = (arg) => {
    for (user of manipulateIds(arg)) {
      const optionEl = document.createElement('option');
      optionEl.innerHTML = user;
      select.appendChild(optionEl)
    }
  }
  const manipulateIds = (arg) => {
    let catchIds = []
    for (user of arg) {
      catchIds.push(user.userId)
    }
    const user_id_container = [new Set(catchIds)];
    const obj = Array.from(user_id_container[0])
    return obj;
  }

  function loop_data(arg) {
    for (user of arg) {
      let table_cells = document.createElement('tr');
      table_cells.classList.add('tr-class', 'tb-class')
      table_cells.innerHTML = `<td> ${user.userId} </td> 
                                        <td> ${user.title} </td> 
                                        <td> ${user.completed} </td>
                                        <td>${createInput(user)}</td>`;
      document.querySelector('#data-table').appendChild(table_cells)
    }
  }

  const createInput = (arg) => {
    let input = `<input type = "checkbox">`
    if (arg.completed) {
      input = `<input type = "checkbox" checked>`
    }
    return input
  }

  const createUser = (title, arg) => {
    return {
      userID: 'name',
      id: arg.length + 1,
      title,
      completed: false
    }
  }