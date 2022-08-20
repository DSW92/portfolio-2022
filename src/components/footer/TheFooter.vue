<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 footer-logo__container">
          <site-logo position="footer-logo"></site-logo>
          <p>&copy; 2022</p>
        </div>
        <div class="col-12 col-md-3 footer-contact__container">
          <h3>Kontakt</h3>
          <a :href="emailLink">{{ email }}</a>
          <a :href="phoneNumberLink">{{ phoneNumber }}</a>
          <p>Poznań</p>
        </div>
        <div class="col-12 col-md-2">
          <h3>Menu</h3>
          <nav>
            <site-menu class="footer-menu"></site-menu>
          </nav>
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
import SiteMenu from "../ui/SiteMenu.vue";

export default {
  components: {
    SiteLogo,
    LinkedLink,
    SiteMenu,
  },
  data() {
    return {
      email: "dominik.s.wojtowicz@gmail.com",
      phoneNumber: "+48 510 215 014",
    };
  },
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
    phoneNumberLink() {
      return "callto:" + this.phoneNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #222;
  padding: 5rem 0;
  h3 {
    margin: 0 0 1rem 0;
    color: #fff;
  }
}

.footer-contact__container,
.footer-logo__container {
  > p,
  > a {
    font-size: 14px;
    color: #777;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }
  > a {
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.5s;
    &:hover {
      color: #fff;
    }
  }
}
</style>
