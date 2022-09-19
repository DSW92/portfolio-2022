<template>
  <section id="my-offer">
    <div class="my-offer__tab">
      <router-link :to="{ name: 'home', hash: '#my-offer' }">
        <div class="container">
          <span>Moja oferta</span>
        </div>
      </router-link>
    </div>
    <div class="container my-offer__container">
      <div class="row">
        <div class="col-12 col-md-3">
          <h3>{{ $t("my-offer.heading") }}</h3>
        </div>
        <div class="col-12 col-md-9">
          <div v-scrollanimation>
            <h2>{{ $t("my-offer.websites.title") }}</h2>
            <p>{{ $t("my-offer.websites.description") }}</p>
            <p>{{ $t("my-offer.websites.description-2") }}</p>
          </div>
          <div v-scrollanimation>
            <h2>{{ $t("my-offer.ecommerce.title") }}</h2>
            <p>{{ $t("my-offer.ecommerce.description") }}</p>
          </div>
          <div v-scrollanimation>
            <h2>{{ $t("my-offer.frontend.title") }}</h2>
            <p>{{ $t("my-offer.frontend.description") }}</p>
            <!-- <p>{{ $t("my-offer.frontend.description-2") }}</p> -->
            <div>
              <router-link to="/contact">{{
                $t("my-offer.frontend.link")
              }}</router-link>
              <span>, </span>
              <a href="">{{ $t("my-offer.frontend.link-2") }}</a>
              <span>, </span>
              <a href="mailto:dominik.s.wojtowicz@gmail.com">{{
                $t("my-offer.frontend.link-3")
              }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <h3>{{ $t("my-offer.heading-2") }}</h3>
        </div>
        <div class="col-12 col-md-9">
          <div v-scrollanimation>
            <p>{{ $t("my-offer.stack.description") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.my-offer__tab {
  background: #f1f1f1;
  height: 50px;
  a {
    text-decoration: none;
    > .container {
      height: 100%;
      span {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
}

.container.my-offer__container {
  padding: 5rem 0 0 0;
  .row {
    margin-bottom: 3rem;
    .col-12.col-md-9 {
      > div {
        margin-bottom: 4rem;
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        > div {
          a {
            color: #222;
            font-weight: 500;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

.picture__container {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  box-sizing: border-box;
  overflow: hidden;
  &.websites {
    padding: 4.75rem 4.75rem 0 4.75rem;
    > div {
      background-image: url("../assets/website.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      min-height: 250px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
  &.ecommerce {
    padding: 4.75rem 4.75rem 0 4.75rem;
    > div {
      background-image: url("../assets/ecommerce.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      min-height: 250px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
  &.frontend {
    padding: 4.75rem 4.75rem 0 4.75rem;
    > div {
      background-image: url("../assets/programmer.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      min-height: 250px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
}

.theme-wrapper.dark-mode {
  .my-offer__tab {
    border-bottom: 1px solid #fafafa;
    background: #444;
    transition-duration: 0.2s;
    a {
      .container {
        span {
          color: #fafafa;
          transition-duration: 0.2s;
        }
      }
    }
  }
  .container.my-offer__container {
    // border-top: 1px solid #fafafa;
    .row {
      .col-12 {
        p {
          a {
            color: #fafafa;
            transition-duration: 0.2s;
          }
        }
        > div {
          > div {
            a {
              color: #fafafa;
              transition-duration: 0.2s;
            }
          }
        }
      }
    }
  }
  .picture__container {
    background: #555;
    transition-duration: 0.2s;
  }
}

.theme-wrapper.light-mode {
  .my-offer__tab {
    border-bottom: 1px solid #222;
    background: #f1f1f1;
    transition-duration: 0.2s;
    a {
      .container {
        span {
          color: #222;
          transition-duration: 0.2s;
        }
      }
    }
  }
  .container.my-offer__container {
    // border-top: 1px solid #222;
    .row {
      .col-12 {
        p {
          a {
            color: #222;
            transition-duration: 0.2s;
          }
        }
        > div {
          > div {
            a {
              color: #222;
              transition-duration: 0.2s;
            }
          }
        }
      }
    }
  }
  .picture__container {
    background: #f1f1f1;
    transition-duration: 0.2s;
  }
}

.scroll-before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s cubic-bezier(1, 0.65, 0.45, 1.54);
}

.scroll-enter {
  opacity: 1;
  transform: translateX(0);
}
</style>
