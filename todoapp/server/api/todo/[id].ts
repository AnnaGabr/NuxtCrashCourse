import { db } from "../../db"

export default defineEventHandler((e) => {
    const method = e.req.method
    const context = e.context
    console.log(e.context.params)

    if ( method === "PUT" ) {
        const id = context.params.id
        let index
        const todo = db.todos.find((todoItem, idx) => {
            if ( todoItem.id === id ) {
                index = idx
                return true
            } else { return false }
        })
        if (!todo) throw new Error()
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        }
        db.todos[index] = updatedTodo
        return updatedTodo
    }
})