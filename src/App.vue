<script setup>
import HeaderBase from "@/components/HeaderBase.vue";

import HomePage from "@/pages/HomePage.vue";
</script>

<template>
  <HeaderBase>
    <template #title>
      <h2>Vue-CookBook</h2>
    </template>
    <template #text>
      A simple app built in Vue used for quick testings and recipes/examples.
    </template>
  </HeaderBase>
  <HomePage/>
</template>

<style scoped></style>
