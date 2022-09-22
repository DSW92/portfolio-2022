<template>
  <div>
    <slot>
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4" v-for="item in results" :key="item.id">
          <div class="portfolio-card__container">
            <img :src="item.thumbnail" alt />
            <div class="overlay">
              <a target="blank" :href="item.url">
                <h3>{{ $t("portfolio.cards.preview") }}</h3>
              </a>
              <div class="tags__container" v-show="item.tags">
                <span>{{ $t("portfolio.cards.tags") }}: </span>
                <span v-for="(tag, index) in item.tags" :key="index">
                  {{ tag }}
                  <span>,</span>
                </span>
              </div>
              <div class="notes__container" v-show="item.notes.show">
                <!-- <span>{{ $t("portfolio.cards.notes.title") }}: </span> -->
                <span v-show="item.notes.privacy">{{ $t("portfolio.cards.notes.msg-privacy") }}</span>
                <span v-show="item.notes.company">{{ $t("portfolio.cards.notes.msg-company") }}
                  <a href="https://mbtmedia.pl">MBT MEDIA</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
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
    padding: 2rem;
    box-sizing: border-box;

    h3,
    span {
      color: #fafafa;
    }

    .tags__container {
      text-align: center;
      margin-bottom: 1rem;

      span:last-of-type {
        span {
          display: none;
        }
      }
    }

    .notes__container {
      text-align: center;

      span {
        >a {
          color: #fafafa;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            font-weight: 500;
          }
        }
      }
    }

    >a {
      text-decoration: none;

      &:hover {
        h3 {
          text-decoration: underline;
        }
      }
    }
  }

  // a.link-overlay {
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   position: absolute;
  // }
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
