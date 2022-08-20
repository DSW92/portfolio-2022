<template>
  <div>
    <router-link :class="position" :to="homePageLink">
      <h1>Dominik</h1>
      <h1>Wojtowicz</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    homePageLink() {
      return { name: "home" };
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0 0 0 0;
  font-weight: 700;
}

a {
  text-decoration: none;
  // color: #0d0e15;
}

.header-logo {
  h1 {
    color: #222;
  }
}

.footer-logo {
  display: inline-block;
  margin-bottom: 1rem;
  h1 {
    color: #fff;
  }
}
</style>
