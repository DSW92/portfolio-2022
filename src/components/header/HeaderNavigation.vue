<template>
  <nav>
    <site-menu position="header-menu"></site-menu>
    <lang-switcher></lang-switcher>
    <linked-link></linked-link>
  </nav>
</template>

<script>
import LinkedLink from "../ui/LinkedLink.vue";
import SiteMenu from "../ui/SiteMenu.vue";
import LangSwitcher from "../header/LangSwitcher.vue";

export default {
  components: {
    LinkedLink,
    SiteMenu,
    LangSwitcher,
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
}
</style>
