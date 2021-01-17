import {
    data
} from "../querySelector";

import {
    URL
} from "../querySelector"
let dataBase = [];
const init = async () => {
    const response = await fetch(URL);
    dataBase = await response.json();
    return dataBase;
}
const getTodos = () => {
    return dataBase;
}
const addTodo = (title, userId) => {
    let todoIds = database.map(todo => todo.id)
    const newTodo = {
        userId,
        title,
        id: Math.max(...todoIds) + 1,
        completed: false
    }
    dataBase.push(newTodo);
    return newTodo;
}
const deleteTodo = (todoId) => {
    dataBase = dataBase.filter(todo => +todo.id !== +todoId)
    return dataBase;
}
const updateTodoStatus = (todoId, status) => {
    let index = dataBase.findIndex(todo => +todo.id === +todoId)
    dataBase[index].completed = status;
    return dataBase[index];
}

export default {
    init,
    getTodos,
    addTodo,
    deleteTodo,
    updateTodoStatus
}