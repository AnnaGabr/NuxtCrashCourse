<template>
    <div>
        <slot name="header" />
        <div>
          <img
          src="https://cdn-icons-png.flaticon.com/512/158/158398.png"
          alt="a sad face" />
        </div>
        <slot name="redirectEl" />
    </div>
</template>

<style scoped>
    img {
        width: 5rem;
    }
</style>