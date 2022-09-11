<template>
  <div class="container">
    <NCard class="cards">
      <h1>To Do</h1>
      <div class="add-todo">
        <input placeholder="Add a new todo.." />
        <NButton>Add</NButton>
      </div>
      <NCard class="card" v-for="todo in todos" :key="todo.id">
        <h4>{{ todo.item }}</h4>
        <p>x</p>
      </NCard>
    </NCard>
  </div>
</template>

<style scope>

.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}

.cards {
  padding:2rem;

}

input {
  outline: none;
}

.add-todo {
  display: flex;
  justify-content: space-between;
}

.card {
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

</style>

<script setup lang="ts">

const { data: todos } = useFetch("/api/todo")

</script>