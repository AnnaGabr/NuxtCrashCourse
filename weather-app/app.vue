<template>
  <!-- h-screen: the height will be the same as the screen,
  overflow-hidden: everything that overflows this height will be hidden -->
  <div v-if="city" class="h-screen relative overflow-hidden">
    <!-- this will be the background image -->
    <img :src="background"/>
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
  <div v-else class="p-10">
    <h1 class="text-7xl ">Oops, we can't find that city</h1>
    <button class="mt-5 bg-sky-400 px-10 w-50 text-white h-10" @click="goBack">
      Go back
    </button>
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

  const cookie = useCookie("city") // city is the name of the cookie, we have to go to applicatoion > Cookies in the browser devTools
  const config = useRuntimeConfig()

if (!cookie.value ) {
  cookie.value = "Toronto"
}

  const input = ref("")
  const search = ref(cookie.value)
  const background = ref("")

//https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=61341ed5813674f5d4d2ad8dbb15a31a

/*
// useFetch only recieve a string, if we want to add some logic to the response we should use  useAsyncData
const { data: city, error } = useFetch(
  () => `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=61341ed5813674f5d4d2ad8dbb15a31a`
  );
*/

const { data: city, error } = useLazyAsyncData(
  "city_", // this is an unique identifier for the useAsyncData
  async () => { // the second parameter should be an async function that give us what we want
    let response;
    
    try {

      response = await $fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}`,
        {
          params: {
            units: "metric",
            appid: config.WEATHER_APP_SECRET
            // en un archivo llamado .env se pone WEATHER_APP_SECRET=numerodelid
          }
        }
        );
      const temp = response.main.temp

      cookie.value = search.value

      if (temp <= -10) {
        background.value =
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
      } else if (temp > -10 && temp <= 0) {
        background.value =
          "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
      } else if (temp > 0 && temp <= 10) {
        background.value =
      "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
      } else {
        background.value =
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80";
      }

      return response

    } catch(e) {

    }

    return response;
  }
)

const goBack = () => {
  search.value = cookie.value;
  refreshNuxtData();
}

const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+");
  search.value = formatedSearch;
  input.value = "";
  refreshNuxtData();
}

</script>