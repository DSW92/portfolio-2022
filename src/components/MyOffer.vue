<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          {{ $t("my-offer.paragraph-1") }}
        </div>
        <div class="col-12 col-md-5">
          <div class="picture__container"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="picture__container"></div>
        </div>
        <div class="col-12 col-md-7">
          {{ $t("my-offer.paragraph-2") }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.picture__container {
  width: 100%;
  height: 100%;
  background: #fafafa;
}
.row {
  margin-bottom: 5rem;
}
</style>
