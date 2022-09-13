<template>
  <slot>
    <div class="row">
      <div class="col-12 col-lg-4" v-for="item in results" :key="item.id">
        <div class="portfolio-card__container">
          <img :src="item.thumbnail" alt="" />
          <div class="overlay">
            <h3>Podgląd na żywo</h3>
            <div class="tags__container">
              <span v-show="item.tags">Tagi: </span>
              <span v-for="(tag, index) in item.tags" :key="index"
                >{{ tag }}<span>, </span></span
              >
            </div>
          </div>
          <a target="blank" :href="item.url"></a>
        </div>
      </div>
    </div>
  </slot>
</template>

<script>
// import PortfolioCard from "./PortfolioCard.vue";
export default {
  // components: { PortfolioCard },
  props: ["category"],
  mounted() {
    const projects = this.projects.filter(
      (project) => project.category === this.category
    );
    this.results = projects;
  },
  data() {
    return {
      results: [],
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
};
</script>

<style lang="scss" scoped>
.col-12 {
  margin-bottom: 2rem;
}
.portfolio-card__container {
  background: #f1f1f1;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition-duration: 0.3s;
    h3,
    span {
      color: #fafafa;
    }
    .tags__container {
      span:last-of-type {
        span {
          display: none;
        }
      }
    }
  }
  a {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  &:hover {
    .overlay {
      opacity: 1;
      pointer-events: all;
    }
  }
}

.theme-wrapper.dark-mode {
  .portfolio-card__container {
    background: #555;
    transition-duration: 0.2s;
  }
}

.theme-wrapper.light-mode {
  .portfolio-card__container {
    background: #f1f1f1;
    transition-duration: 0.2s;
  }
}
</style>
