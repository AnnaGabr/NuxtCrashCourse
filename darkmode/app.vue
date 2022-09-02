<template>
  <div
  :style="isDarkMode ? {background: 'black'} : null">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>

<script setup lang="ts">

const { isDarkmode } = useDarkmode();

</script>