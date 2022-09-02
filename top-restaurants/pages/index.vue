<template>
    <div>
      <Html
      :lang="'eng-US'">
        <Title>Restaurantly</Title>
        <Meta 
        name="description"
        content="This is a description of the page"/>
        <Link
        rel="preload"
        href="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
        as="script" />
      </Html>
      <div class="container">
        <h1>Welcome to Restaurantly</h1>
        <a href="/restaurants">Go to restaurants</a>
      </div> 
      
    </div>
  </template>
  
  <style scoped>
    .container {
      text-align: center;
      margin-top: 5rem;
    }
  </style>
  