<template>
  <div :class="position">
    <router-link :to="homePageLink" @click="closeDropdown">{{
      $t("navigation.home")
    }}</router-link>
    <router-link :to="aboutPageLink" @click="closeDropdown">{{
      $t("navigation.portfolio")
    }}</router-link>
    <router-link :to="contactPageLink" @click="closeDropdown">{{
      $t("navigation.contact")
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    homePageLink() {
      return { name: "home" };
    },
    offerLink() {
      return { name: "offer" };
    },
    aboutPageLink() {
      return { name: "portfolio" };
    },
    contactPageLink() {
      if (
        localStorage.getItem("lang") === "pl" &&
        navigator.language === "pl"
      ) {
        return { name: "pl-contact" };
      } else if (
        localStorage.getItem("lang") === "pl" &&
        navigator.language.startsWith("en")
      ) {
        return { name: "pl-contact" };
      } else if (!localStorage.getItem("lang") && navigator.language === "pl") {
        return { name: "pl-contact" };
      } else {
        return { name: "contact" };
      }
    },
  },
  methods: {
    closeDropdown() {
      this.$store.dispatch("toggleMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-menu {
  margin: 0 2rem 0 0;
  > a {
    color: #0d0e15;
    text-decoration: none;
    font-weight: 500;
    // padding: 0.5rem 1.5rem;
    margin: 0.5rem 2rem;
    display: inline-block;
    position: relative;
    &:hover {
      opacity: 0.8;
      color: #333;
    }
    &.router-link-active.router-link-exact-active:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      display: inline-block;
      height: 1em;
      width: 100%;
      border-bottom: 1px solid;
      margin-top: 5px;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: scale(0, 1);
      transform: scale(0, 1);
    }
    &:hover:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}

.footer-menu {
  display: flex;
  flex-direction: column;
  > a {
    text-decoration: none;
    color: #777;
    transition-duration: 0.2s;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    &:hover {
      color: #fff;
    }
  }
}

.mobile-menu {
  display: flex;
  flex-direction: row;
  a {
    color: #fafafa;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    margin: 0 1rem 0 0;
    &:hover,
    &.router-link-active.router-link-exact-active {
      text-decoration: underline;
    }
  }
}

.theme-wrapper.dark-mode {
  .header-menu {
    a {
      color: #fafafa;
      transition-duration: 0.2s;
      &:hover {
        color: #fff;
      }
    }
  }
  .mobile-menu {
    a {
      color: #fafafa;
      transition-duration: 0.2s;
    }
  }
}

.theme-wrapper.light-mode {
  .header-menu {
    a {
      color: #0d0e15;
      transition-duration: 0.2s;
      &:hover {
        opacity: 0.8;
        color: #333;
      }
    }
  }
  .mobile-menu {
    a {
      color: #222;
      transition-duration: 0.2s;
    }
  }
}

@media (max-width: 768px) {
  .mobile-menu {
    flex-direction: column;
    a {
      margin: 0 0 1rem 0;
    }
  }
}
</style>
