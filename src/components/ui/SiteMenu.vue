<template>
  <div :class="position">
    <router-link :to="homePageLink">{{ $t("navigation.home") }}</router-link>
    <router-link :to="aboutPageLink">{{
      $t("navigation.portfolio")
    }}</router-link>
    <router-link :to="contactPageLink">{{
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
}
</style>
