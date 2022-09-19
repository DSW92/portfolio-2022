<template>
  <div>
    <home-hero></home-hero>
    <!-- <keep-alive>
      <my-offer></my-offer>
    </keep-alive> -->
  </div>
</template>

<script>
import HomeHero from "../components/HomeHero.vue";
// import MyOffer from "../components/MyOffer.vue";

export default {
  name: "HomeView",
  components: {
    HomeHero,
    // MyOffer,
  },
};
</script>
