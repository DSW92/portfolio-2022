<template>
  <keep-alive>
    <home-hero></home-hero>
  </keep-alive>
</template>

<script>
import HomeHero from "../components/HomeHero.vue";

export default {
  components: {
    HomeHero,
  },
};
</script>
