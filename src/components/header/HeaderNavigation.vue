<template>
  <nav>
    <site-menu class="mobile-hidden" position="header-menu"></site-menu>
    <theme-switcher></theme-switcher>
    <lang-switcher class="mobile-hidden"></lang-switcher>
    <linked-link class="mobile-hidden linkedin-header"></linked-link>
    <hamburger-icon class="desktop-hidden"></hamburger-icon>
  </nav>
</template>

<script>
import LinkedLink from "../ui/LinkedLink.vue";
import SiteMenu from "../ui/SiteMenu.vue";
import LangSwitcher from "../header/LangSwitcher.vue";
import ThemeSwitcher from "../header/ThemeSwitcher.vue";
import HamburgerIcon from "../ui/HamburgerIcon.vue";

export default {
  components: {
    LinkedLink,
    SiteMenu,
    LangSwitcher,
    ThemeSwitcher,
    HamburgerIcon,
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
}

.linkedin-header {
  margin: 0 0 0 1rem;
}
</style>
