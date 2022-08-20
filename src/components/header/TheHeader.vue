<template>
  <header>
    <div class="container">
      <header-logo></header-logo>
      <header-nav></header-nav>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNavigation.vue";

export default {
  components: {
    HeaderLogo,
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 2rem 0 0 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
