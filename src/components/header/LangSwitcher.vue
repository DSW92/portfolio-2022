<template>
  <div class="select">
    <div class="selected-option" @click="toggleDropdown">
      <transition name="fade" mode="out-in">
        <span :key="selectedLanguage">{{ selectedLanguage }}</span>
      </transition>
      <span>
        <!-- <img src="../../assets/chevron-down.png" alt="" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
    </div>
    <div :class="{ dropdownHidden: dropdownHide }" class="options">
      <span
        v-if="selectedLanguage === 'en'"
        @click="
          changeSelectedLanguage('pl');
          hideDropdown();
        "
        >PL</span
      >
      <span
        v-if="selectedLanguage === 'pl'"
        @click="
          changeSelectedLanguage('en');
          hideDropdown();
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
      dropdownHide: false,
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

      if (this.$route.matched.some(({ name }) => name === "pl-contact")) {
        this.$router.push({ name: "contact" }).then(() => {
          window.location.reload();
        });
      } else if (this.$route.matched.some(({ name }) => name === "contact")) {
        this.$router.push({ name: "pl-contact" }).then(() => {
          window.location.reload();
        });
      } else {
        window.location.reload();
      }
    },

    hideDropdown() {
      this.dropdownHide = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  margin: 0 0 0 1rem;
  cursor: pointer;
  .selected-option {
    display: flex;
    flex-direction: row;
    // border: 1px solid #222;
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
      svg {
        margin: 0 0 -0.5px 3px;
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
    transition-duration: 0.3s;
    span {
      cursor: pointer;
      padding: 5px 5px 2px 5px;
      font-weight: 500;
      color: #222;
    }
    &.dropdownHidden {
      display: none;
    }
  }
  &:hover {
    .options {
      opacity: 1;
      pointer-events: all;
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

.fade-leave-active {
  display: none;
}

.theme-wrapper.dark-mode {
  .selected-option,
  .options {
    span {
      color: #fafafa;
      transition-duration: 0.2s;
      svg {
        fill: #fafafa;
        transition-duration: 0.2s;
      }
    }
  }
}

.theme-wrapper.light-mode {
  .selected-option,
  .options {
    span {
      color: #0d0e15;
      transition-duration: 0.2s;
      svg {
        fill: #0d0e15;
        transition-duration: 0.2s;
      }
    }
  }
}
</style>
