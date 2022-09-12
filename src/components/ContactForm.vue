<template>
  <section>
    <div class="container">
      <form @submit.prevent="submitForm()">
        <div :class="{ invalidInput: firstNameValid === 'invalid' }">
          <label for="first_name"
            >{{ $t("contact-form.fistname") }} <span>*</span></label
          >
          <input
            id="first_name"
            name="first_name"
            type="text"
            v-model.trim="firstName"
            @blur="validateFirstName"
            @focus="
              {
                firstNameValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-if="firstNameValid === 'invalid'">
              Proszę podać poprawne imię
            </span>
          </transition>
        </div>

        <div :class="{ invalidInput: lastNameValid === 'invalid' }">
          <label for="last_name">{{ $t("contact-form.lastname") }}</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            v-model.trim="lastName"
            @blur="validateLastName"
            @focus="
              {
                lastNameValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-show="lastNameValid === 'invalid'">
              Proszę podać poprawne nazwisko
            </span>
          </transition>
        </div>
        <div class="email-phone__wrapper">
          <div :class="{ invalidInput: emailValid === 'invalid' }">
            <label for="email"
              >{{ $t("contact-form.email") }} <span>*</span></label
            >
            <input
              id="email"
              name="email"
              type="email"
              v-model.trim="email"
              @blur="validateEmail"
              @focus="
                {
                  emailValid = 'pending';
                }
              "
            />
            <transition name="show">
              <span class="error-msg" v-show="emailValid === 'invalid'">
                Proszę podać poprawny adres e-mail
              </span>
            </transition>
          </div>
          <div :class="{ invalidInput: phoneValid === 'invalid' }">
            <label for="phone">{{ $t("contact-form.phone") }}</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              v-model="phone"
              @blur="validatePhone"
              @focus="
                {
                  phoneValid = 'pending';
                }
              "
            />
            <transition name="show">
              <span class="error-msg" v-show="phoneValid === 'invalid'">
                Proszę podać poprawny numer telefonu
              </span>
            </transition>
          </div>
        </div>
        <div :class="{ invalidInput: msgValid === 'invalid' }">
          <label for="message"
            >{{ $t("contact-form.message") }} <span>*</span></label
          >
          <textarea
            rows="3"
            id="message"
            name="message"
            v-model="message"
            @blur="validateMsg"
            @focus="
              {
                msgValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-show="msgValid === 'invalid'">
              Pole "wiadomość" nie może być puste
            </span>
          </transition>
        </div>
        <div>
          <input type="submit" :value="$t('contact-form.send')" />
        </div>
        <div>
          <p><span>*</span> {{ $t("contact-form.required") }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      firstNameValid: "pending",
      lastNameValid: "pending",
      emailValid: "pending",
      phoneValid: "pending",
      msgValid: "pending",
      regName: /[a-zA-Z]+$/,
      regEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      regPhone: /^(?=.*[0-9])[- +()0-9]+$/,
      clearedInputs: [],
    };
  },
  methods: {
    validateFirstName() {
      if (this.regName.test(this.firstName)) {
        this.firstNameValid = "valid";
      } else {
        this.firstNameValid = "invalid";
      }
    },
    validateLastName() {
      if (this.regName.test(this.lastName) || this.lastName === "") {
        this.lastNameValid = "valid";
      } else {
        this.lastNameValid = "invalid";
      }
    },
    validateEmail() {
      if (this.regEmail.test(this.email)) {
        this.emailValid = "valid";
      } else {
        this.emailValid = "invalid";
      }
    },
    validatePhone() {
      if (this.regPhone.test(this.phone) || this.phone === "") {
        this.phoneValid = "valid";
      } else {
        this.phoneValid = "invalid";
      }
    },
    validateMsg() {
      if (this.message.length > 0) {
        this.msgValid = "valid";
      } else {
        this.msgValid = "invalid";
      }
    },
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
  min-height: calc(100vh - 277.5px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 5rem;
  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
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
      margin-bottom: 0.5rem;
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

  span.error-msg {
    font-size: 12px;
    color: transparent;
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
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
    }
    .invalidInput {
      label {
        color: rgb(249, 171, 184);
      }
      input,
      textarea {
        border-bottom: 1px solid rgb(249, 171, 184);
      }
      span.error-msg {
        color: rgb(249, 171, 184);
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
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
    }
    .invalidInput {
      label {
        color: #ff0000;
      }
      input,
      textarea {
        border-bottom: 1px solid #ff0000;
      }
      span.error-msg {
        color: #ff0000;
      }
    }
  }
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.2s ease;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
  height: 0;
}
</style>
