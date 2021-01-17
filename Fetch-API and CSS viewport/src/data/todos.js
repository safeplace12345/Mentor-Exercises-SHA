import { data } from "../querySelector";

import {URL} from "../querySelector"
let dataBase = []; 
const init = async() => {
     const response = await fetch(URL);
     dataBase = await response.json();
     return dataBase;
}
const getTodos = () => {
    return dataBase;
}
 const addTodo = (title , userId) =>{
   const newTodo = {
       userId,
       title,
       id : dataBase.length + 1,
       completed : false
   }
   dataBase.push(newTodo);
   return newTodo;
}
 const deleteTodo =() => {

}
const updateTodo = () => {

}

export default {
    init,
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}
