<template>
  <contact-form></contact-form>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
div {
  background: grey;
  // height: 300px;
}
</style>
