<template>
  <nav>
    <router-link :to="homePageLink">Home</router-link>
    <router-link :to="aboutPageLink">About me</router-link>
    <router-link :to="contactPageLink">Contact</router-link>
    <linked-link></linked-link>
  </nav>
</template>

<script>
import LinkedLink from "../ui/LinkedLink.vue";

export default {
  components: {
    LinkedLink,
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
nav {
  display: flex;
  align-items: center;
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
</style>
