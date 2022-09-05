<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          <p>{{ $t("my-offer.paragraph-1") }}</p>
        </div>
        <div class="col-12 col-md-5">
          <div class="picture__container websites">
            <div></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="picture__container"></div>
        </div>
        <div class="col-12 col-md-7">
          <p>{{ $t("my-offer.paragraph-2") }}</p>
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
      background-image: url("../assets/web-design.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      min-height: 300px;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
}
.row {
  margin-bottom: 5rem;
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
