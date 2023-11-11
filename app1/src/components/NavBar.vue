<script setup>
defineProps({
  navItems: Object
});
</script>

<template>
  <nav class="navbar">
    <template v-for="(navItem, id) in navItems" :key="id">
      <div class="navbar-item">
        <a class="navbar-link" :href="navItem.url">{{ navItem.text }}</a>
        <template v-if="navItem.children">
          <div class="navbar-dropdown">
            <a class="navbar-link navbar-dropdown-item" :href="subNavItem.url"
               v-for="(subNavItem, idSub) in navItem.children" :key="idSub"
            >{{ subNavItem.text }}</a>
          </div>
        </template>
      </div>
    </template>
  </nav>
</template>

<style scoped>

.navbar {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(66, 189, 138);
  padding: .5rem 3rem;
}

.navbar .navbar-item {
  padding: .3rem 1rem;
  margin: 0 1rem;
}

.navbar-item, .navbar-dropdown, .navbar-dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.navbar .navbar-link {
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 0;
  color: #464141;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  width: 100%;
  height: 100%;
}

.navbar .navbar-link:hover {
  background-color: #0fe070;
  color: #ffffff;
}

.navbar .navbar-dropdown {
  background: rgb(66, 189, 138);;
  position: absolute;
  top: 100%;
  padding: 0;
}


.navbar .navbar-dropdown {
  display: none;
  transition: 250ms;
}

.navbar .navbar-item:hover > .navbar-dropdown {
  display: flex;
}

.navbar-dropdown .navbar-dropdown-item {
  margin: 1rem .3rem;
}

</style>