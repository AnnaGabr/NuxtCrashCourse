<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">

const { data } = useFetch("/api/todo")

</script>