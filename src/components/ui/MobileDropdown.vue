<template>
  <section :class="{ open: menuOpen }">
    <div class="container">
      <div>
        <site-menu position="mobile-menu"></site-menu>
        <div>
          <lang-switcher></lang-switcher>
          <linked-link class="linked-link__mobile"></linked-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LinkedLink from "./LinkedLink.vue";
import LangSwitcher from "../header/LangSwitcher.vue";
import SiteMenu from "./SiteMenu.vue";

export default {
  components: {
    SiteMenu,
    LangSwitcher,
    LinkedLink,
  },
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 1rem 0 1rem 0;
  background: #222;
  transform: translateY(-72px);
  position: fixed;
  z-index: 1;
  top: 64px;
  left: 0;
  width: 100%;
  &.open {
    transform: translateY(0);
  }
}

div.container {
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:not(.mobile-menu) {
      display: flex;
      align-items: center;
    }
  }
}

.theme-wrapper.dark-mode {
  section {
    background: #222;
    transition: transform 0.5s, background 0.2s;
  }
}

.theme-wrapper.light-mode {
  section {
    background: #f1f1f1;
    transition: transform 0.5s, background 0.2s;
  }
}

.linked-link__mobile {
  margin: 0 0 0 1rem;
}

@media (max-width: 768px) {
  section {
    transform: translateY(-155px);
    padding: 2rem 0 1rem 0;
    &.open {
      transform: translateY(0);
    }
  }
  div.container {
    > div {
      align-items: flex-start;
      > div:not(.mobile-menu) {
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: 380px) {
  div.container {
    > div {
      > div:not(.mobile-menu) {
        flex-direction: column-reverse;
        align-items: flex-end;
        > div:last-of-type {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
