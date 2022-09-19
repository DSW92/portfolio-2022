<template>
  <div class="theme-wrapper" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <the-header></the-header>
    <mobile-dropdown class="desktop-hidden"></mobile-dropdown>
    <router-view v-slot="{ Component }">
      <transition name="routes" mode="out-in">
        <keep-alive :include="['ContactView', 'HomeView']">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
import MobileDropdown from "./components/ui/MobileDropdown.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    MobileDropdown,
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

// * {
//   scroll-behavior: smooth;
// }

body {
  margin: 0;
}

#app {
  // font-family: "Ubuntu", sans-serif;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 1rem 0;
}

.theme-wrapper {
  position: relative;
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
    &.scrolled-down {
      padding: 0.5rem 0 0.5rem 0;
      > div {
        > div {
          > a {
            h1 {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
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
    &.scrolled-down {
      padding: 0.5rem 0 0.5rem 0;
      > div {
        > div {
          > a {
            h1 {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
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

.routes-enter-from,
.routes-leave-to {
  opacity: 0;
}

.routes-enter-active,
.routes-leave-active {
  transition: opacity 500ms ease-out;
}

@media (max-width: 575px) {
  .container {
    width: initial;
  }
}

@media (max-width: 992px) {
  .mobile-hidden {
    display: none;
  }
}

@media (min-width: 992px) {
  .desktop-hidden {
    display: none;
  }
}
</style>
