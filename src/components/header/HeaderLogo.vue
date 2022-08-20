<template>
  <div>
    <router-link :to="homePageLink">
      <h1>Dominik</h1>
      <h1>Wojtowicz</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    homePageLink() {
      return { name: "home" };
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0 0 0 0;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #0d0e15;
}
</style>
