<template>
  <div id="app">
    <div>
      <nav class="navbar">
        <div class="navbar_wrapper">
          <!-- <router-link to="/" class="navbar_brand">Mecinkari</router-link> -->
          <div class="navbar_links">
            <router-link to="/" active-class class="navbar_link"
              >Home</router-link
            >
            <router-link to="/blog" active-class class="navbar_link"
              >Blog</router-link
            >
            <router-link to="/gallery" active-class class="navbar_link"
              >Gallery</router-link
            >
          </div>
        </div>
      </nav>
      <router-view />
    </div>
    <footer class="footer">
      Created with <span class="text-danger">❤</span> by: Mecinkari
    </footer>
  </div>
</template>

<style>
</style>
