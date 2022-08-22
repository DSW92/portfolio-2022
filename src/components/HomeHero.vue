<template>
  <section>
    <div class="container">
      <transition name="show">
        <h1 v-if="isLoaded">DZIEŃ DOBRY.</h1>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // animacja napisu hero
    return this.$store.dispatch("changeHeroAnimationLoadedStatus");
  },
  computed: {
    isLoaded() {
      return this.$store.getters.homeHeroAnimationLoaded;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
      font-size: 150px;
      color: #222;
    }
  }
}

.show-enter-from {
  opacity: 0;
}
.show-enter-to {
  opacity: 1;
}
.show-enter-active {
  transition: all 1s ease-in;
}

.show-leave-from {
  opacity: 1;
}
.show-leave-to {
  opacity: 0;
}
.show-leave-active {
  transition: all 1s ease-out;
}
</style>
