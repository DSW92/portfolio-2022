<template>
  <section>
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail()">
        <div :class="{ invalidInput: firstNameValid === 'invalid' }">
          <label for="first_name"
            >{{ $t("contact-form.fistname") }} <span>*</span></label
          >
          <input
            id="first_name"
            name="first_name"
            type="text"
            v-model.trim="firstName"
            autocomplete="off"
            @blur="validateFirstName"
            @focus="
              {
                firstNameValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-if="firstNameValid === 'invalid'">
              {{ $t("contact-form.messages.first-name") }}
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
            autocomplete="off"
            @blur="validateLastName"
            @focus="
              {
                lastNameValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-show="lastNameValid === 'invalid'">
              {{ $t("contact-form.messages.last-name") }}
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
              type="text"
              v-model.trim="email"
              autocomplete="off"
              @blur="validateEmail"
              @focus="
                {
                  emailValid = 'pending';
                }
              "
            />
            <transition name="show">
              <span class="error-msg" v-show="emailValid === 'invalid'">
                {{ $t("contact-form.messages.email") }}
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
              autocomplete="off"
              @blur="validatePhone"
              @focus="
                {
                  phoneValid = 'pending';
                }
              "
            />
            <transition name="show">
              <span class="error-msg" v-show="phoneValid === 'invalid'">
                {{ $t("contact-form.messages.phone") }}
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
            autocomplete="off"
            @blur="validateMsg"
            @focus="
              {
                msgValid = 'pending';
              }
            "
          />
          <transition name="show">
            <span class="error-msg" v-show="msgValid === 'invalid'">
              {{ $t("contact-form.messages.message") }}
            </span>
          </transition>
        </div>
        <div>
          <input type="submit" :value="$t('contact-form.send')" />
          <transition name="show">
            <span
              :class="[
                messageStatus.success
                  ? 'success-status-msg'
                  : 'error-status-msg',
              ]"
              v-show="messageStatus.message !== ''"
              class="msg-status"
            >
              {{ messageStatus.message }}
            </span>
          </transition>
        </div>
        <div>
          <p><span>*</span> {{ $t("contact-form.required") }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";

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
      messageStatus: {
        success: false,
        message: "",
      },
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
    sendEmail() {
      if (
        this.firstNameValid === "valid" &&
        this.lastNameValid === "valid" &&
        this.emailValid === "valid" &&
        this.msgValid === "valid"
      ) {
        emailjs
          .sendForm(
            "service_r50sgzn",
            "template_fcljzkh",
            this.$refs.form,
            "Wb7QcsnDyMe4tPV0H"
          )
          .then(
            (result) => {
              this.messageStatus.success = true;
              this.messageStatus.message = "Wiadomość została wysłana";
              console.log("SUCCESS!", result.text);
              this.firstNameValid = "pending";
              this.emailValid = "pending";
              this.msgValid = "pending";
            },
            (error) => {
              this.messageStatus.success = false;
              this.messageStatus.message =
                "Coś poszło nie tak. Proszę spróbować ponownie później.";
              console.log("FAILED...", error.text);
            }
          )
          .then(() => {
            this.$refs.form.reset();
          });
      } else {
        this.messageStatus.success = false;
        this.messageStatus.message = "Proszę wypełnić wymagane pola";
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
section {
  box-sizing: border-box;
  > div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 12rem;
  }
}

form {
  width: 100%;
  max-width: 800px;
  // margin: 0 auto;
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
        transition-duration: 0.2s;
      }
    }
    .success-status-msg {
      color: #6fc56f;
      transition-duration: 0.2s;
    }
    .error-status-msg {
      color: rgb(249, 171, 184);
      transition-duration: 0.2s;
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
        transition-duration: 0.2s;
      }
    }
    .success-status-msg {
      color: #008000;
      transition-duration: 0.2s;
    }
    .error-status-msg {
      color: #ff0000;
      transition-duration: 0.2s;
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

@media (max-width: 992px) {
  section {
    > div.container {
      padding-top: 8rem;
    }
    form {
      padding-bottom: 1rem;
    }
  }
}

@media (max-width: 575px) {
  form > div.email-phone__wrapper {
    flex-direction: column;
    margin-bottom: 0;
    > div {
      width: 100%;
      margin-bottom: 1.5rem;
    }
    > div:first-of-type {
      margin-right: 0;
    }
    > div:nth-of-type(2) {
      margin-left: 0;
    }
  }
}
</style>
