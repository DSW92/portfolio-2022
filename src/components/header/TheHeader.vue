<template>
  <header>
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
  beforeMount() {
    window.addEventListener("scroll", function () {
      let lastScroll = 0;

      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        console.log("góra");
        return;
      }

      if (currentScroll > lastScroll) {
        console.log("dół");
      } else if (currentScroll < lastScroll) {
        console.log("góra");
      }
      lastScroll = currentScroll;
    });

    console.log(window.pageYOffset);
  },
  components: {
    SiteLogo,
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 2rem 0 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 999;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
