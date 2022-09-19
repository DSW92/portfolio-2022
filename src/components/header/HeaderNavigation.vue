<template>
  <nav>
    <site-menu class="mobile-hidden" position="header-menu"></site-menu>
    <theme-switcher></theme-switcher>
    <lang-switcher class="mobile-hidden"></lang-switcher>
    <linked-link class="mobile-hidden"></linked-link>
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
