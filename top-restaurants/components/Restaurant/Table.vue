<template>
    <div class="table">
      <h1>TOP 50: THE RANKING</h1>
      <div class="table-container">
        <div class="table-col">
          <RestaurantRow :is-header="true"/>
          <RestaurantRow
          v-for="(restaurant, idx) in restaurantsOrganized.first"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="idx"/>
        </div>
        <div class="table-col">
          <RestaurantRow :is-header="true"/>
          <RestaurantRow
          v-for="(restaurant, idx) in restaurantsOrganized.second"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="idx"/>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .table {
    margin: 3rem 0;
  }
  .table h1 {
    margin-bottom: 2rem;
  }
  .table-container {
    display: flex;
    justify-content: space-between;
  }
  .table-col {
    width: 48%;
  }
  </style>

<script setup lang="ts">

import restaurants from '@/data.json';

const restaurantsOrganized = {
  first: [...restaurants].splice(0,25),
  second: [...restaurants].splice(25, 25),
}

const visualize = (idx: number) => {
  console.log(idx)
}

</script>