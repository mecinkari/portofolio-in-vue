<template>
  <div>
    <section class="section">
      <h1 class="text-primary text-center">Blog Posts</h1>
    </section>
    <section class="section">
      <div class="grid">
        <div class="grid-4" v-for="post in posts" :key="post._id">
          <router-link :to="`/post/${post.slug.current}`">
            <article>
              <img :src="post.mainImage.asset.url" style="width: 100%" />
              <h4>
                {{ post.title }}
              </h4>
              <p class="margin-y-1 text-dark">{{ post.excerpt }}</p>
              <p class="text-dark">
                Posted by
                <span class="text-secondary">{{ post.author.name }}</span> on
                <span class="text-secondary">on {{ post._createdAt }}</span>
              </p>
            </article>
          </router-link>
        </div>
        <!-- <article class="grid-4" v-for="post in posts" :key="post._id">
          <img :src="post.mainImage.asset.url" style="width: 100%" />
          <router-link :to="`/post/${post.slug.current}`">
            <h4>
              {{ post.title }}
            </h4>
          </router-link>
          <p class="margin-y-1">{{ post.excerpt }}</p>
          <p>
            Posted by
            <span class="text-secondary">{{ post.author.name }}</span> on
            <span class="text-secondary">on {{ post._createdAt }}</span>
          </p>
          <hr />
        </article> -->
      </div>
    </section>
  </div>
</template>

<script>
import sanityClient from "../sanityClient";
const query = `*[_type == "post"]{
  _id,
  _createdAt,
  mainImage{
    asset->{
      url
    }
  },
  title,
  slug,
  author->{
  	name
	},
  excerpt
}`;

export default {
  name: "blog",
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
    document.title = "Mecinkari's Blog Posts";
  },
};
</script>

<style>
</style>