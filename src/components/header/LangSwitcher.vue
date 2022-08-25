<template>
  <div class="select">
    <div class="selected-option" @click="toggleDropdown">
      <transition name="fade" mode="out-in">
        <span :key="selectedLanguage">{{ selectedLanguage }}</span>
      </transition>
      <span><img src="../../assets/chevron-down.png" alt="" /></span>
    </div>
    <div :class="{ dropdownVisible: optionsToggle }" class="options">
      <span
        v-if="selectedLanguage === 'en'"
        @click="
          changeSelectedLanguage('pl');
          toggleDropdown();
        "
        >PL</span
      >
      <span
        v-if="selectedLanguage === 'pl'"
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
    this.displayLanguage();
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
      const browserLang = navigator.language;

      if (browserLang === "pl") {
        this.browserLanguage = "pl";
      } else {
        this.browserLanguage = "en";
      }
    },

    displayLanguage() {
      if (localStorage.getItem("lang") === "pl") {
        this.selectedLanguage = "pl";
      } else if (localStorage.getItem("lang") === "en") {
        this.selectedLanguage = "en";
      } else {
        this.selectedLanguage = this.browserLanguage;
      }
    },

    changeSelectedLanguage(lang) {
      this.selectedLanguage = lang;
      localStorage.setItem("lang", lang);
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
    color: #222;
    span {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-weight: 500;
    }
    span:first-of-type {
      width: 24px;
    }
    span:nth-of-type(2) {
      img {
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
    span {
      cursor: pointer;
      padding: 5px 5px 2px 5px;
      font-weight: 500;
      color: #222;
    }

    &.dropdownVisible {
      opacity: 1;
      pointer-events: all;
      transition-duration: 0.3s;
    }
  }
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition-duration: 0.3s;
}

// .fade-leave-from {
//   display: none;
// }
// .fade-leave-to {
//   display: none;
// }

.fade-leave-active {
  display: none;
}
</style>
