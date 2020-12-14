  // loop and create table elements
  function loop_data(arg) {
      for (user of arg) {
        let input = `<input type = "checkbox">`
          if(user.completed){
                  input = `<input type = "checkbox" checked>`
          }
          let table_cells = document.createElement('tr');
          // inserting innerHTML
          table_cells.classList.add('tr-class', 'tb-class')
          table_cells.innerHTML = `<td> ${user.id} </td> 
                                        <td> ${user.title} </td> 
                                        <td> ${user.completed} </td>
                                        <td>${input}</td>`;
        //   console.log(table_cells)

          // appending table cells
          document.querySelector('#data-table').appendChild(table_cells)
      }
  }
  // Fetching data from server

  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response =>
          response.json()
      )
      .then(data => {
          loop_data(data)
          createOptions(data)
      });

  const user_section = document.querySelector('.user-section');
  const select = document.querySelector('.users-select');
  console.log(select)

  function addUser(UserID,id,title,completed)  {
     return{
          UserID,
          id,
         title,
         completed
     }
  }
 
  const createOptions = (arg) => {
       for(user of arg){
           const optionEl = document.createElement('option');
           Option.innerHTML = user.title;
           return optionEl
       }
       select.appendChild(optionEl)
  }


  const newUser = addUser(1,2234,'reds',1)