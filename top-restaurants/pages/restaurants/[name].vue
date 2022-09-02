<template>
    <div>
        {{ restaurant }}
    </div>
</template>

<script setup lang="ts">

/* // This is so the const name = route.params.name wont appear as an error
// it is telling that 'name' is scoped to this page
// (because there is a 'name' outside and it thinks we are re-writing it)
import {} from "#app" */
import restaurants from '@/data.json'

const route = useRoute()
const name = route.params.name

const restaurant = restaurants.find(r => r.name === name)

</script>