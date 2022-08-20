<template>
  <div :class="position">
    <router-link :to="homePageLink">Home</router-link>
    <router-link :to="aboutPageLink">About me</router-link>
    <router-link :to="contactPageLink">Contact</router-link>
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
    aboutPageLink() {
      return { name: "about" };
    },
    contactPageLink() {
      return { name: "contact" };
    },
  },
};
</script>

<style lang="scss" scoped>
.header-menu {
  > a {
    color: #0d0e15;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    &:hover {
      opacity: 0.8;
      color: #333;
    }
    &.router-link-active.router-link-exact-active {
      text-decoration: underline;
      color: #333;
      opacity: 0.8;
    }
  }
}

.footer-menu {
  display: flex;
  flex-direction: column;
  > a {
    text-decoration: none;
    color: #777;
    transition-duration: 0.5s;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    &:hover {
      color: #fff;
    }
  }
}
</style>
