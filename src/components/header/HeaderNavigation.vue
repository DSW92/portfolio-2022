<template>
  <nav>
    <site-menu position="header-menu"></site-menu>
    <linked-link></linked-link>
  </nav>
</template>

<script>
import LinkedLink from "../ui/LinkedLink.vue";
import SiteMenu from "../ui/SiteMenu.vue";

export default {
  components: {
    LinkedLink,
    SiteMenu,
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
}
</style>
