<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          <p>{{ $t("my-offer.paragraph-1") }}</p>
          <p>{{ $t("my-offer.paragraph-1a") }}</p>
        </div>
        <div class="col-12 col-md-5">
          <div class="picture__container websites">
            <div></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="picture__container ecommerce">
            <div></div>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <p>{{ $t("my-offer.paragraph-2") }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-7">
          <p>{{ $t("my-offer.paragraph-3") }}</p>
          <p>{{ $t("my-offer.paragraph-3a") }}</p>
        </div>
        <div class="col-12 col-md-5">
          <div class="picture__container frontend">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 5rem 0 0 0;
  .row {
    align-items: center;
    margin-bottom: 3rem;
    .col-12 {
      p {
        font-size: 1.5rem;
        line-height: 1.7;
        font-weight: 500;
        margin: 0 0 1rem 0;
      }
    }
  }
}

.picture__container {
  width: 100%;
  height: 100%;
  background: #fafafa;
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
  .container {
    border-top: 1px solid #fafafa;
  }
}

.theme-wrapper.light-mode {
  .container {
    border-top: 1px solid #222;
  }
}
</style>
