<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar_wrapper">
        <router-link to="/" class="navbar_brand">Mecinkari</router-link>
        <div class="navbar_links">
          <router-link to="/" active-class class="navbar_link"
            >Home</router-link
          >
          <router-link to="/about" active-class class="navbar_link"
            >About</router-link
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
</style>
