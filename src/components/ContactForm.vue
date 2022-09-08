<template>
  <section>
    <div class="container">
      <form @submit.prevent="submitForm()">
        <div>
          <label for="first_name">{{ $t("contact-form.fistname") }} *</label>
          <input id="first_name" name="first_name" type="text" />
        </div>
        <div>
          <label for="last_name">{{ $t("contact-form.lastname") }} *</label>
          <input id="last_name" name="last_name" type="text" />
        </div>
        <div class="email-phone__wrapper">
          <div>
            <label for="email">{{ $t("contact-form.email") }} *</label>
            <input id="email" name="email" type="email" />
          </div>
          <div>
            <label for="phone">{{ $t("contact-form.phone") }}</label>
            <input id="phone" name="phone" type="tel" />
          </div>
        </div>
        <div>
          <label for="message">{{ $t("contact-form.message") }} *</label>
          <textarea rows="3" id="message" name="message" />
        </div>
        <div><input type="submit" :value="$t('contact-form.send')" /></div>
        <div>
          <p><span>*</span> {{ $t("contact-form.required") }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log("submited");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 12rem;
}

form {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 5rem;
  > div {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: 500;
    }
    input,
    textarea {
      border: none;
      border-bottom: 1px solid #222;
      outline: none;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      padding: 10px 0 5px 0;
      margin-bottom: 2rem;
    }
    input[type="submit"] {
      border: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      background: #f1f1f1;
      cursor: pointer;
      width: 100px;
      padding: 10px 0;
      margin-bottom: 1rem;
    }
    textarea {
      overflow: hidden;
    }
    &.email-phone__wrapper {
      flex-direction: row;
      > div {
        width: 50%;
      }
      > div:first-of-type {
        margin-right: 1rem;
      }
      > div:last-of-type {
        margin-left: 1rem;
      }
    }
    p {
      span {
        font-weight: 500;
      }
    }
  }
}

.theme-wrapper.dark-mode {
  form {
    > div {
      label {
        color: #fafafa;
        transition-duration: 0.2s;
      }
      input,
      textarea {
        background: #333;
        border-bottom: 1px solid #fafafa;
        color: #fafafa;
        transition-duration: 0.2s;
      }
      input[type="submit"] {
        background: #555;
        border: none;
        &:hover {
          background: #656565;
        }
      }
    }
  }
}

.theme-wrapper.light-mode {
  form {
    > div {
      label {
        color: #222;
        transition-duration: 0.2s;
      }
      input,
      textarea {
        background: #fff;
        border-bottom: 1px solid #222;
        color: #222;
        transition-duration: 0.2s;
      }
      input[type="submit"] {
        background: #f1f1f1;
        border: none;
        &:hover {
          background: #e9e9e9;
        }
      }
    }
  }
}
</style>
