<template>
  <!-- h-screen: the height will be the same as the screen,
  overflow-hidden: everything that overflows this height will be hidden -->
  <div class="h-screen relative overflow-hidden">
    <!-- this will be the background image -->
    <img />
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48"> <!--p: padding-->
      <div class="flex justify-between"> <!--to separate the 2 columns-->
        <div>
          <h1 class="text-7xl text-white">Toronto</h1>
          <p class="font-extralight text-2xl mt-2 text-white ">Sunday Dec 9th</p> <!--mt: margin top-->
          <img class="w-56 icon" /> <!-- sunny, rainy, etc icon --> <!--w: width-->
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            58°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Search a city..."/> <!--width 50% and height 10-->
        <button class="bg-sky-400 w-20 text-white h-10">Search</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay {
    background-color: rgb(0, 0, 0, 0.5);
  }
</style>