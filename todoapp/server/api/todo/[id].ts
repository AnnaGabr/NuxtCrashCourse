import { db } from "../../db"
import { createError, sendError } from "h3"

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
        if (!todo) {
            const TodoNotFoundError = createError({
                statusCode: 404,
                statusMessage: "To Do not found",
                data: {},
            })
            sendError(e, TodoNotFoundError)

        }
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

    if ( method === "DELETE" ) {
        const {todo, index} = finTodoById(id)
        db.todos.splice(index, 1)
        return {
            message: "item deleted"
        }
    }
})