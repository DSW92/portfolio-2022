<template>
  <header :class="{ 'dropdown-open': dropdownOpen }">
    <div class="container">
      <site-logo position="header-logo"></site-logo>
      <header-nav></header-nav>
    </div>
  </header>
</template>

<script>
import SiteLogo from "../ui/SiteLogo.vue";
import HeaderNav from "./HeaderNavigation.vue";

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  components: {
    SiteLogo,
    HeaderNav,
  },
  data() {
    return {
      lastScroll: 0,
    };
  },
  computed: {
    dropdownOpen() {
      return this.$store.getters.menuOpen;
    },
  },
  methods: {
    onScroll(e) {
      const currentScroll = e.target.documentElement.scrollTop;
      if (currentScroll <= 0) {
        document.querySelector("header").classList.remove("scrolled-down");
        document.querySelector("header").classList.remove("scrolled-up");
        return;
      }

      if (currentScroll > this.lastScroll) {
        document.querySelector("header").classList.remove("scrolled-up");
        document.querySelector("header").classList.add("scrolled-down");
      } else if (currentScroll < this.lastScroll) {
        document.querySelector("header").classList.remove("scrolled-down");
        document.querySelector("header").classList.add("scrolled-up");
      }
      this.lastScroll = currentScroll;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 2rem 0 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  background: transparent;
  z-index: 999;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 992px) {
  header {
    padding: 0.5rem 0 0.5rem 0;
  }
}
</style>
