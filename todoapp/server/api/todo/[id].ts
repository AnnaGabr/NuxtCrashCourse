import { db } from "../../db"

export default defineEventHandler((e) => {
    const method = e.req.method
    const context = e.context
    const id = context.params.id
    
    const finTodoById = (todoId) => {
        let index
        const todo = db.todos.find((todoItem, idx) => {
            if ( todoItem.id === id ) {
                index = idx
                return true
            } else { return false }
        })
        if (!todo) throw new Error()
        return {todo, index}
    }

    if ( method === "PUT" ) {
        const {todo, index} = finTodoById(id)
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        }
        db.todos[index] = updatedTodo
        return updatedTodo
    }


})