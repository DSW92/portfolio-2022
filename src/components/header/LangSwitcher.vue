<template>
  <div class="select">
    <div class="selected-option" @click="toggleDropdown">
      <span>{{ selectedLanguage }}</span>
      <span><img src="../../assets/chevron-down.png" alt="" /></span>
    </div>
    <div :class="{ dropdownVisible: optionsToggle }" class="options">
      <span
        v-if="selectedLanguage === 'en'"
        value="pl"
        @click="
          changeSelectedLanguage('pl');
          toggleDropdown();
        "
        >PL</span
      >
      <span
        v-if="selectedLanguage === 'pl'"
        value="en"
        @click="
          changeSelectedLanguage('en');
          toggleDropdown();
        "
        >EN</span
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkBrowserLanguage();
    this.displayInitialLanguage();
    console.log(this.selectedLanguage);
  },
  data() {
    return {
      selectedLanguage: "",
      browserLanguage: "",
      optionsToggle: false,
    };
  },
  methods: {
    checkBrowserLanguage() {
      this.browserLanguage = navigator.language;
    },

    displayInitialLanguage() {
      if (this.browserLanguage === "pl") {
        this.selectedLanguage = "pl";
      } else {
        this.selectedLanguage = "en";
      }
    },

    changeSelectedLanguage(lang) {
      this.selectedLanguage = lang;
    },

    toggleDropdown() {
      this.optionsToggle = !this.optionsToggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  cursor: pointer;
  .selected-option {
    display: flex;
    flex-direction: row;
    border: 1px solid #222;
    padding: 2px 5px;
    span {
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }
    span:nth-of-type(2) {
      img {
        transform: rotate(180deg);
        width: 10px;
        margin-left: 3px;
      }
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    opacity: 0;
    pointer-events: none;
    // transition-duration: 0.2s;
    span {
      cursor: pointer;
      padding: 2px 5px;
    }

    &.dropdownVisible {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
