<template>
  <div class="theme-wrapper" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.darkMode;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

body {
  margin: 0;
}

#app {
  // font-family: "Ubuntu", sans-serif;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.theme-wrapper.dark-mode {
  background: #333;
  transition-duration: 0.2s;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fafafa;
    transition-duration: 0.2s;
  }
  header {
    background: #222;
    transition-duration: 0.2s;
  }
  footer {
    a,
    p {
      color: #777;
    }
  }
}

.theme-wrapper.light-mode {
  background: #fff;
  transition-duration: 0.2s;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #222;
    transition-duration: 0.2s;
  }
  header {
    background: #fff;
    transition-duration: 0.2s;
  }
  footer {
    a,
    p {
      color: #777;
    }
    h1,
    h3 {
      color: #fafafa;
    }
  }
}
</style>
