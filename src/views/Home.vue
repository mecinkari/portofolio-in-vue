<template>
  <div>
    <section class="section">
      <h1 class="h1 text-primary text-center">Welcome!</h1>
    </section>
    <section class="section section-2">
      <div class="window">
        <div class="window-navigation">
          <span class="window-navigation-name">Profile</span>
          <div class="window-navigation-buttons">
            <div class="minimize">
              <span></span>
            </div>
            <div class="zoom">
              <span></span>
            </div>
            <div class="close">
              <span></span>
            </div>
          </div>
        </div>
        <div class="window-content">
          <div class="grid items-center">
            <div class="grid-6 text-center">
              <img
                src="@/assets/img/Profile.png"
                class="img-stylized"
                style="max-width: 65%"
                alt=""
              />
            </div>
            <div class="grid-6 text-center">
              <div class="h4">
                <p>Hi! I'm Muhammad Anugrah Pratama</p>
                <p>a.k.a</p>
                <p>
                  <q
                    >Tamcin
                    <small class="text-secondary">or</small> Mecinkari</q
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <p class="text-center margin-bottom-3 h1 text-primary">What I Do?</p>
      <!-- <hr /> -->
      <div class="grid">
        <div class="grid-3"></div>
        <div class="grid-6">
          <div class="window">
            <div class="window-navigation">
              <span class="window-navigation-name">.</span>
              <div class="window-navigation-buttons">
                <div class="minimize">
                  <span></span>
                </div>
                <div class="zoom">
                  <span></span>
                </div>
                <div class="close">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="window-content">
              <p class="h3 text-secondary">I Code</p>
              <p>Check out my code projects on my <a href="">Github</a></p>
              <hr />
              <p class="h3 text-secondary">I Draw</p>
              <p>
                Check out my arts on my
                <router-link to="/gallery">Gallery</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    document.title = "Mecinkari";
  },
  methods: {
    minimizeContent: function () {
      this.exampleContent2 = !this.exampleContent2;
    },
  },
};
</script>
