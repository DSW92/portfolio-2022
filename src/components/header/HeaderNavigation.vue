<template>
  <nav>
    <router-link :to="homePageLink">Home</router-link>
    <router-link :to="aboutPageLink">About me</router-link>
    <router-link :to="contactPageLink">Contact</router-link>
    <div class="linkedin__container">
      <a href="https://www.linkedin.com/in/dwojtowicz/" target="blank">
        <img
          width="40"
          height="40"
          src="../../assets/linkedin_logo.png"
          alt="LinkedIn"
        />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
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
  .linkedin__container {
    margin: 0 0 0 2rem;
  }
}
</style>
