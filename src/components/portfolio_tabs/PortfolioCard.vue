<template>
  <slot>
    <div class="row">
      <div class="col-12 col-lg-6" v-for="item in results" :key="item.id">
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
  background: #fafafa;
  padding: 4rem 4rem 0 4rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
</style>
