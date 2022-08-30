<template>
  <div class = "container">
    <h1>Name Generator</h1>
    <p>Choose your options</p>
    <div class = "options-container">


      <!-- Se creó el componente Option.vue así que esto ya no es necesario -->

      <!--
      <div class = "option-container">
        <h4>1. Choose the gender</h4>
        <div class = "option-buttons">
:class = "options.gneder === 'Girl' && 'option-active'" significa que... class cambia, SI options.gender es Girl ENTONCES se le aplica option-active (a class)
          <button
          class = "option option-left"
          :class = "options.gender === Gender.BOY && 'option-active'"
          @click = "options.gender = Gender.BOY"
          >
          Boy</button>
          <button
          class = "option"
          :class = "options.gender === Gender.UNISEX && 'option-active'"
          @click = "options.gender = Gender.UNISEX"
          >
          Unisex</button>
          <button
          class = "option option-right"
          :class = "options.gender === Gender.GIRL && 'option-active'" 
          @click = "options.gender = Gender.GIRL"
          >
          Girl</button>
        </div>
      </div>
      <div class = "option-container">
        <h4>2. Choose the name's popularity</h4>
        <div class = "option-buttons">
          <button
          class = "option option-left"
          :class = "options.popularity === Popularity.TRENDY && 'option-active'"
          @click = "options.popularity = Popularity.TRENDY"
          >
          Trendy</button>
          <button
          class = "option option-right"
          :class = "options.popularity === Popularity.UNIQUE && 'option-active'"
          @click = "options.popularity = Popularity.UNIQUE"
          >
          Unique</button>
        </div>
      </div>
      <div class = "option-container">
        <h4>1. Choose name's length</h4>
        <div class = "option-buttons">
          <button
          class = "option option-left"
          :class = "options.length === Length.LONG && 'option-active'"
          @click = "options.length = Length.LONG"
          >
          Long</button>
          <button
          class = "option"
          :class = "options.length === Length.ALL && 'option-active'"
          @click = "options.length = Length.ALL"
          >
          All</button>
          <button
          class = "option option-right"
          :class = "options.length === Length.SHORT && 'option-active'"
          @click = "options.length = Length.SHORT"
          >
          Short</button>
        </div>
      </div>
      -->

      <!--En su lugar llamamos el componente-->

      <Option
      v-for = "option in optionsArray"
      :key = "option.title"
      :option = "option"
      :options = "options"/>
      <!--option es el option de optionsArray, que contiene toda la info que se necesita
      options, es la definida en el script: const options = reactive<OptionState>{...}, qu econtiene la info de las optiones seleccionadas -->

      <button
      class = "primary"
      @click = "computeSelectedNames"
      >Find names</button>
      <!--Al oprimir este boton llama a una funcion llamada computeSelectedNames-->
    </div>
    <div class = "cards-container">
      <div v-for = "name in selectedNames" :key = "name" class = "card">
        <h4>{{ name }}</h4>
        <p>x</p>
      </div>
    </div>
    {{ selectedNames }}
  </div>
</template>

<style scoped>

.container{
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(37, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container{
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card {
  background-color: rgb(27, 61, 138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

.card p{
  position: absolute;
  top: -30%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.678);
}

</style>


<script setup lang = "ts">
import { OptionsPaths } from 'rollup';

// Se copia y pega esto en data.ts y desde allá se exporta poniendo export al principio y se importan aqui

import { Gender, Popularity, Length, names } from "@/data"
import { kMaxLength } from 'buffer';

/*

// Se crean estos enum para que en la interfaz solo se puedan poner las opciones que dice cada uno

enum Gender {
  GIRL = 'Girl',
  BOY = 'Boy',
  UNISEX = 'Unisex'
}

enum Popularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique'
}

enum Length {
  SHORT = 'Short',
  ALL = 'All',
  LONG = 'Long'
}

*/

// Para asegurarnos de que obj solo tenga tres atributos gender, popularity y length se crea esta interfaz

interface OptionState{
  gender: Gender;
  popularity: Popularity;
  length: Length
}



// Decimos que obj es de la clase deifnida en interface

const obj: OptionState = {
  gender: Gender.GIRL,
  popularity: Popularity.UNIQUE,
  length: Length.SHORT
}

// Para asegurarnos que options sea del tipo OptionState, se pone esta interfaz dentro de < >

const options = reactive<OptionState>({
  gender: Gender.GIRL,
  popularity: Popularity.UNIQUE,
  length: Length.SHORT
})

// definimos un array de strings, al igual que con reactive, definimos la clase de los elementos dentro de < > selectedNames es un array de string

const selectedNames = ref<string[]>([])

// definamos ahora al función computeSelectedNames

const computeSelectedNames = () => {
  const filteredNames = names
  .filter((name) => name.gender === options.gender)
  // aquí revisamos la lista names, aplicandole un filtro en el que nos devuelve el objeto siempre que el gender del objeto (name.gender) sea igual al definido en options.gender
  .filter((name) => name.popularity === options.popularity)
  .filter((name) => {
    if(options.length === Length.ALL) return true 
    // es decir, si es all, solo devuelve all, no hay filtro.
    else return name.length === options.length
    // === devuelve un boolean
  })

  // aquí cambiamos la lista vacia selectedNames, poniendo lo que nos dió en filteredNames
  // recordemos que filteredNames es una lista de objetos de interfaz name, y selectedNames es una lista de strings, así que se pone .map(name => name.name) para que devuelva solo el atributo name de esos objetos
  selectedNames.value = filteredNames.map(name => name.name)
}

// Se creó el componente name-generator\components\Option.vue, para poder usarlo se debe crear este array
const optionsArray = [
  {
    title: "1. Choose gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY]
  },
  {
    title: "2. Choose name's popularity",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3. Choose name's length",
    category: "length",
    buttons: [Length.SHORT, Length.ALL, Length.LONG]
  }
]

</script>