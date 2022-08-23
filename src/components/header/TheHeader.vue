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
