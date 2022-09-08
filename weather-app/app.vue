<template>
  <!-- h-screen: the height will be the same as the screen,
  overflow-hidden: everything that overflows this height will be hidden -->
  <div class="h-screen relative overflow-hidden">
    {{ search }}
    <!-- this will be the background image -->
    <img />
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48"> <!--p: padding-->
      <div class="flex justify-between"> <!--to separate the 2 columns-->
        <div>
          <h1 class="text-7xl text-white">{{ city.name }}</h1>
          <p class="font-extralight text-2xl mt-2 text-white ">Sunday Dec 9th</p> <!--mt: margin top-->
          <img
          :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
          class="w-56 icon" /> <!-- sunny, rainy, etc icon --> <!--w: width-->
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{ city.main.temp }}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Search a city..." v-model="input" /> <!--width 50% and height 10-->
        <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">Search</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay {
    background-color: rgb(0, 0, 0, 0.5);
  }

  .icon {
    margin-left: -2.75rem;
    margin-top: -2.75rem;
  }
</style>

<script setup lang="ts">

  const input = ref("")
  const search = ref("Toronto")

//https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=61341ed5813674f5d4d2ad8dbb15a31a

/*
// useFetch only recieve a string, if we want to add some logic to the response we should use  useAsyncData
const { data: city, error } = useFetch(
  () => `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=61341ed5813674f5d4d2ad8dbb15a31a`
  );
*/

const { data: city, error } = useLazyAsyncData(
  "city", // this is an unique identifier for the useAsyncData
  async () => { // the second parameter should be an async function that give us what we want
    const response = $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=61341ed5813674f5d4d2ad8dbb15a31a`);
    return response;
  }
)

const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+");
  search.value = formatedSearch;
  input.value = "";
}

</script>