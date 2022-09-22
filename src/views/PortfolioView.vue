<template>
  <section>
    <div class="container tabs__container">
      <button
        :class="{ active: activeComponent === 'wordpress-tab' }"
        @click="changeTab('wordpress-tab')"
      >
        WordPress
      </button>
      <button
        :class="{ active: activeComponent === 'ecommerce-tab' }"
        @click="changeTab('ecommerce-tab')"
      >
        E-commerce
      </button>
      <button
        :class="{ active: activeComponent === 'miscellaneous-tab' }"
        @click="changeTab('miscellaneous-tab')"
      >
        {{ $t("portfolio.tabs.other") }}
      </button>
    </div>
    <div class="container">
      <transition name="fade" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </section>
</template>

<script>
import WordpressTab from "../components/portfolio_tabs/WordpressTab.vue";
import EcommerceTab from "../components/portfolio_tabs/EcommerceTab.vue";
import MiscellaneousTab from "../components/portfolio_tabs/MiscellaneousTab.vue";

export default {
  components: {
    WordpressTab,
    EcommerceTab,
    MiscellaneousTab,
  },
  data() {
    return {
      activeComponent: "wordpress-tab",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeComponent = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: calc(100vh - 277.5px);
  box-sizing: border-box;
}
.tabs__container {
  padding-top: 12rem;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  button {
    border: none;
    background: none;
    display: block;
    width: initial;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    outline: none;
  }
}

div.container:not(.tabs__container) {
  padding-bottom: 2rem;
}

.theme-wrapper.dark-mode {
  .tabs__container {
    button {
      color: #fafafa;
      transition-duration: 0.2s;
      &.active,
      &:hover {
        color: #fff;
        font-weight: 500;
      }
    }
  }
}

.theme-wrapper.light-mode {
  .tabs__container {
    button {
      color: #797979;
      transition-duration: 0.2s;
      &.active,
      &:hover {
        color: #222;
        font-weight: 500;
      }
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

@media (max-width: 992px) {
  .tabs__container {
    padding-top: 8rem;
    margin-bottom: 3rem;
  }
}
</style>
