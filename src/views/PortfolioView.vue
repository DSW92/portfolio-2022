<template>
  <div class="container">
    <div class="row tabs__container">
      <button @click="changeTab('wordpress-tab')">WordPress</button>
      <button @click="changeTab('ecommerce-tab')">E-commerce</button>
      <button @click="changeTab('miscellaneous-tab')">Pozostałe</button>
    </div>
    <div class="row">
      <component :is="activeComponent"></component>
    </div>
  </div>
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
.tabs__container {
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  button {
    border: none;
    background: none;
    display: block;
    width: initial;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }
}

.theme-wrapper.dark-mode {
  .tabs__container {
    button {
      color: #fafafa;
      transition-duration: 0.2s;
    }
  }
}

.theme-wrapper.light-mode {
  .tabs__container {
    button {
      color: #222;
      transition-duration: 0.2s;
    }
  }
}
</style>
