<template>
<section class="container">
  <slot/>
</section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>