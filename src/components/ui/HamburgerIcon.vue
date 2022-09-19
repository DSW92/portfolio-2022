<template>
  <section>
    <div :class="{ open: menuOpen }" class="menu-btn" @click="openMenu">
      <div class="menu-btn__burger"></div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen;
    },
  },
  methods: {
    openMenu() {
      this.$store.dispatch("openMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0 0 0 1rem;
  /* border: 3px solid #fff; */
}
.menu-btn__burger {
  width: 35px;
  height: 4px;
  background: #fafafa;
  border-radius: 5px;
  //   box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.2s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 35px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  //   box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.2s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-10px);
}
.menu-btn__burger::after {
  transform: translateY(10px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-15px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(10px, -10px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(10px, 10px);
}

.theme-wrapper.dark-mode {
  .menu-btn {
    .menu-btn__burger,
    .menu-btn__burger::before,
    .menu-btn__burger::after {
      background: #fafafa;
    }
    &.open {
      .menu-btn__burger {
        background: transparent;
      }
    }
  }
}

.theme-wrapper.light-mode {
  .menu-btn {
    .menu-btn__burger,
    .menu-btn__burger::before,
    .menu-btn__burger::after {
      background: #222;
    }
    &.open {
      .menu-btn__burger {
        background: transparent;
      }
    }
  }
}
</style>
