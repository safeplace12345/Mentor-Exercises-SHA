import { data } from "../querySelector";

import {URL} from "../querySelector"
let dataBase = []; 
const init = () => {
     const response = await fetch(URL);
     dataBase = await response.json();
     return dataBase;
}
const getTodos = () => {
    return dataBase;
}
 const addTodo = () =>{

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
