<template>
  <section>
    <div class="container">
      <transition name="show">
        <h1 v-if="isHeadingLoaded">{{ $t("welcome-msg") }}.</h1>
      </transition>
      <transition name="show">
        <div v-if="isHeadingLoaded" class="labels__container">
          <h3 :class="{ typing: firstLabelAnimate }">Web dev</h3>
          <h3 :class="{ typing: secondLabelAnimate }">Frontend</h3>
          <h3 :class="{ typing: thirdLabelAnimate }">WordPress</h3>
        </div>
      </transition>
      <transition name="banner">
        <div v-if="finalBannerStatus" class="labels-static__container">
          <h3>Web dev</h3>
          <span>/</span>
          <h3>Frontend</h3>
          <span>/</span>
          <h3>WordPress</h3>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstLabelAnimate: false,
      secondLabelAnimate: false,
      thirdLabelAnimate: false,
    };
  },
  computed: {
    isHeadingLoaded() {
      return this.$store.getters.homeHeroAnimationLoaded;
    },
    labelsAnimationStatus() {
      return this.$store.getters.labelsWereAnimated;
    },
    finalBannerStatus() {
      return this.$store.getters.finalBannerStatus;
    },
  },
  methods: {
    animateFirstLabel() {
      this.firstLabelAnimate = true;
    },
    animateSecondLabel() {
      this.firstLabelAnimate = false;
      this.secondLabelAnimate = true;
    },
    animateThirdLabel() {
      this.secondLabelAnimate = false;
      this.thirdLabelAnimate = true;
    },
    finishLabelsAnimation() {
      this.thirdLabelAnimate = false;
    },
    callHeroAnimationAction() {
      return this.$store.dispatch("changeHeroAnimationLoadedStatus");
    },
    animateLabels() {
      if (!this.labelsAnimationStatus) {
        setTimeout(() => {
          this.animateFirstLabel();
        }, 1500);

        setTimeout(() => {
          this.animateSecondLabel();
        }, 3000);

        setTimeout(() => {
          this.animateThirdLabel();
        }, 4500);

        setTimeout(() => {
          this.finishLabelsAnimation();
        }, 6000);
      }
      return this.$store.dispatch("changeLabelsAnimationStatus");
    },
  },
  mounted() {
    this.callHeroAnimationAction();
    this.animateLabels();
  },
};
</script>

<style lang="scss" scoped>
section {
  height: calc(100vh - 50px);
  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 0;
      font-size: 150px;
      color: #222;
      text-transform: uppercase;
      text-align: center;
    }
    .labels__container {
      display: flex;
      min-height: 29px;
      h3 {
        display: none;
        margin: 0;
        font-size: 1.5rem;
      }
    }
    .labels-static__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      h3 {
        margin: 0;
        font-size: 3rem;
        font-weight: 400;
      }
      span {
        font-size: 2.5rem;
        font-weight: 500;
        margin: 0 1rem;
      }
    }
  }
}

.theme-wrapper.light-mode {
  section {
    .labels__container {
      .typing {
        display: initial;
        // color: #222;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid #222; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.15em; /* Adjust as needed */
        animation: typing 1s steps(20, end), blink-caret 0.5s step-end infinite;
      }
    }
    .labels-static__container {
      span {
        transition-duration: 0.3s;
        color: #222;
      }
    }
  }
}

.theme-wrapper.dark-mode {
  section {
    .labels__container {
      .typing {
        display: initial;
        // color: #222;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid #fafafa; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.15em; /* Adjust as needed */
        animation: typing 1s steps(20, end),
          blink-caret-dark-mode 0.5s step-end infinite;
      }
    }
    .labels-static__container {
      span {
        transition-duration: 0.3s;
        color: #fafafa;
      }
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
  transition: all 1s ease-in !important;
}

.show-leave-from {
  opacity: 1;
}
.show-leave-to {
  opacity: 0;
}
.show-leave-active {
  transition: all 1s ease-out !important;
}

.banner-enter-from {
  opacity: 0;
}
.banner-enter-to {
  opacity: 1;
}
.banner-enter-active {
  transition: all 1s ease-in !important;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #222;
  }
}

@keyframes blink-caret-dark-mode {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fafafa;
  }
}

@media (max-width: 1400px) {
  section {
    > div {
      > h1 {
        font-size: 120px;
      }
    }
  }
}

@media (max-width: 992px) {
  section {
    > div {
      > h1 {
        font-size: 90px;
      }
      .labels-static__container {
        h3 {
          font-size: 2.5rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  section {
    > div {
      > h1 {
        font-size: 70px;
      }
      .labels-static__container {
        h3 {
          font-size: 1.8rem;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  section {
    > div {
      > h1 {
        text-align: center;
        font-size: 60px;
      }
      .labels-static__container {
        flex-wrap: wrap;
        justify-content: center;
        span {
          display: none;
        }
        h3 {
          margin: 0 1rem 1rem 1rem;
        }
      }
    }
  }
}
</style>
