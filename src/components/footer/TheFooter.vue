<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-5 col-lg-4 col-md-12 footer-logo__container">
          <site-logo position="footer-logo"></site-logo>
          <p>&copy; 2022</p>
        </div>
        <div
          class="col-12 col-xl-3 col-lg-4 col-md-6 footer-contact__container"
        >
          <h3>Kontakt</h3>
          <a :href="emailLink">{{ email }}</a>
          <a :href="phoneNumberLink">{{ phoneNumber }}</a>
          <p>Poznań</p>
        </div>
        <div class="col-12 col-xl-2 col-lg-3 col-md-6 footer-menu__container">
          <h3>Menu</h3>
          <nav>
            <site-menu class="footer-menu"></site-menu>
          </nav>
        </div>
        <div
          class="col-12 col-xl-2 col-lg-1 col-md-12 footer-linked__container"
        >
          <linked-link class="linked-link__footer"></linked-link>
          <github-link></github-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SiteLogo from "../ui/SiteLogo.vue";
import LinkedLink from "../ui/LinkedLink.vue";
import GithubLink from "../ui/GithubLink.vue";
import SiteMenu from "../ui/SiteMenu.vue";

export default {
  components: {
    SiteLogo,
    LinkedLink,
    SiteMenu,
    GithubLink,
  },
  data() {
    return {
      email: "kontakt@dominikwojtowicz.pl",
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
    display: block;
    transition-duration: 0.3s;
    &:hover {
      color: #fff;
    }
  }
}

.linked-link__footer {
  margin: 0 1rem 0 0;
}

.footer-linked__container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 992px) {
  footer {
    padding: 3rem 0;
  }
  .footer-logo__container {
    order: 1;
  }
  .footer-contact__container {
    order: 3;
  }
  .footer-menu__container {
    order: 2;
  }
  .footer-linked__container {
    order: 4;
  }
  .col-12 {
    margin: 0 0 3rem 0;
    &:last-of-type {
      margin: 0 0 0 0;
    }
  }
}

@media (max-width: 768px) {
  .footer-logo__container {
    div {
      display: flex;
      justify-content: center;
      align-content: center;
    }
    p {
      text-align: center;
    }
  }
  .footer-menu__container {
    h3 {
      text-align: center;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .footer-contact__container {
    h3,
    a,
    p {
      text-align: center;
    }
  }
  .footer-linked__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  // .linked-link__footer {
  //   margin: 0 0 0 0;
  // }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .footer-linked__container {
    flex-direction: column;
  }
  .linked-link__footer {
    margin: 0 0 1rem 0;
  }
}
</style>
