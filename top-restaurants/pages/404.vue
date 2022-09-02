<template>
    <div>
      <div class="container">
        <NuxtLayout name="error">
          <template #header>
            <h1>Page not found</h1>
          </template>
          
          <template #redirectEl>
            <a href="/">Go Back</a>
          </template>
        </NuxtLayout>
      </div> 
    </div>
  </template>
  
  <style scoped>
    .container {
      text-align: center;
      margin-top: 5rem;
    }
  </style>
  