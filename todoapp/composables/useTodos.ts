const useTodos = () => {
    //const { data: todos } = useFetch("/api/todo")
    const { data: todos, refresh } = useAsyncData("todos", async () => {
        return $fetch("/api/todo")
    })
  
  
  const addTodo = async (item) => {
    if ( !item ) return;
    await $fetch("/api/todo", {method: "post", body: {item: item}})
    refresh()
  }
  
  const updateTodo = async (id) => {
    await $fetch(`/api/todo/${id}`, {method: "put"})
    refresh()
  }
  
  const deleteTodo = async (id) => {
    await $fetch(`/api/todo/${id}`, {method: "delete"})
    refresh()
  }

  return {todos, addTodo, updateTodo, deleteTodo}
}

export default useTodos