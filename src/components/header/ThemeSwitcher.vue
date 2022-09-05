<template>
  <button
    class="theme-toggle"
    :class="isDarkMode ? 'dark-mode' : 'light-mode'"
    id="theme-toggle"
    @click="changeMode"
  >
    <svg
      class="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
      <circle
        class="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="currentColor"
      />
      <g class="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    changeMode() {
      if (!this.$store.getters.darkMode) {
        this.$store.dispatch("changeMode", true);
      } else {
        this.$store.dispatch("changeMode", false);
      }
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.darkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-toggle {
  background: none;
  border: none;
  margin: 0 0 -3px 0;
  color: #555;
  > svg {
    width: 30px;
    height: 30px;
    stroke-linecap: round;
    &.sun-and-moon {
      stroke-width: 2px;
      .sun-beams,
      .sun {
        transform-origin: center;
      }
    }
  }
  &:hover {
    cursor: pointer;
    color: #777;
  }
}

.theme-toggle.dark-mode {
  color: #777;
  svg {
    .sun-beams {
      transform: rotate(-45deg);
      transition-duration: 0.3s;
      opacity: 0;
    }
    .sun {
      transform: scale(1.5);
      transition-duration: 0.3s;
    }
    mask.moon {
      circle {
        cx: 17;
        transition-duration: 0.3s;
        transition-delay: 0.2s;
      }
    }
  }
  &:hover {
    color: #999;
  }
}

.theme-toggle.light-mode {
  svg {
    .sun-beams {
      transform: rotate(45deg);
      transition-duration: 0.3s;
      opacity: 1;
    }
    .sun {
      transform: scale(1);
      transition-duration: 0.3s;
    }
    mask.moon {
      circle {
        cx: 24;
        transition-duration: 0.3s;
      }
    }
  }
}
</style>
