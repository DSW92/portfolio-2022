<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <site-logo position="footer-logo"></site-logo>
        </div>
        <div class="col-12 col-md-3">
          <h3>Kontakt</h3>
        </div>
        <div class="col-12 col-md-2">
          <h3>Menu</h3>
        </div>
        <div class="col-12 col-md-2">
          <linked-link></linked-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SiteLogo from "../ui/SiteLogo.vue";
import LinkedLink from "../ui/LinkedLink.vue";

export default {
  components: {
    SiteLogo,
    LinkedLink,
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #222;
}
</style>
