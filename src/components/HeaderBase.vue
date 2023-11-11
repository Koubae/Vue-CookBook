<script setup>
import NavBar from "@/components/NavBar.vue";

const navigation = {
  home: {
    url: '/',
    text: 'Home',
  },
  tools: {
    url: '/',
    text: 'Tools',
    children: {
      htmlEncoder: {
        url: '/',
        text: "Html Encoder"
      },
      css: {
        url: "/",
        text: "CSS"
      },
      javascript: {
        url: "/",
        text: "Javascript"
      }
    }
  },
  info: {
    url: '/',
    text: 'Info'
  },
  about: {
    url: '/',
    text: 'About'
  }
}

</script>

<template>
  <header>
    <NavBar :nav-items="navigation"/>
    <section class="header-container">
      <article class="header-body">
        <div class="container">
          <div class="header-title">
            <slot name="title"></slot>
          </div>
          <div class="header-text">
            <slot name="text"></slot>
          </div>
        </div>
      </article>
    </section>
  </header>
</template>

<style scoped>
.header-container {
  margin: 1rem;
  padding: 1rem;
}

.header-body {
  margin: 1rem;
  padding: 1rem;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
}

.header-title {
  font-size: 2rem;
  font-style: italic;
  text-align: center;
}

.header-text {
  font-size: 1.2rem;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
