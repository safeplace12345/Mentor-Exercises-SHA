export const createTodo = (title, selVal,array) => {
    return {
        userId: selVal,
        id: array.length + 1,
        title,
        completed: false,
    };
};