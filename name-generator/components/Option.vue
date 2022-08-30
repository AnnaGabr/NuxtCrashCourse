<template>

    <div class = "option-container">
        <h4>{{ option.title }}</h4>
        <div class = "option-buttons">
            <button
            v-for = "value in option.buttons"
            :key = "value"

            class = "option option-left"
            :class = "options[option.category] === value && 'option-active'"
            @click = "options[option.category] = value"
            >
            {{ value }}
            </button>
        </div>
    </div>

</template>

<style>

.option-container {
  margin-bottom: 2rem;
}

.option{
  background-color: white;
  outline: 0.1rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27 60, 138);
  cursor: pointer;
  font-weight: 200;
}

.option-left{
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}

</style>

<script lang = "ts" setup>

// Esta es una de las maneras de definir los props (la info que vendra dentro del componente)
/*
const props = defineProps({
    option: Object, // option es un objeto de la forma { title: "1. Choose gender", category: "gender", buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY] }
    options: Object,  // options, son las opciones seleccionadas, es de la forma const options = reactive<OptionState>({ gender: Gender.GIRL, popularity: Popularity.UNIQUE, length: Length.SHORT })

})
*/

import { Gender, Length, Popularity } from '@/data';

// Esta es otra manera (con interface)

interface OptionProps {
    option: {
        title: string;
        category: string;
        buttons: Gender[] | Popularity[] | Length[] // Será O un array de Gender (importado desde data), O un array de Popularity O un array de Length
    },
    options: {
        gender: Gender;
        popularity: Popularity;
        length: Length;    
    }
}

const props = defineProps<OptionProps>()

</script>