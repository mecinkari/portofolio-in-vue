<template>
  <div>
    <section class="section">
      <h1 class="text-primary text-center">My Gallery</h1>
    </section>
    <section class="section section-2">
      <div class="grid items-center">
        <div class="grid-12" v-for="post in posts" :key="post.title">
          <div class="window">
            <div class="window-navigation">
              <span class="window-navigation-name">{{ post.title }}</span>
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
              <img
                class=""
                style="width: 100%"
                :src="post.mainImage.asset.url"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="window">
        <div class="window-navigation">
          <span class="window-navigation-name">Gallery</span>
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
            <img
              class="grid grid-12 img-stylized"
              v-for="post in posts"
              :key="post.title"
              :src="post.mainImage.asset.url"
              alt=""
            />
          </div>
        </div>
      </div> -->
    </section>

    <!-- <div class="modal"></div> -->
  </div>
</template>

<script>
// import Masonry from "masonry-layout";
import sanityClient from "../sanityClient";
const query = `*[_type == "gallery"] | order(_createdAt desc) {
    title,
    mainImage{
        asset->{
            url
        }
    }
}`;
export default {
  name: "Gallery",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanityClient.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
  mounted() {
    document.title = "Mecinkari's Gallery";
  },
};
</script>

<style>
</style>