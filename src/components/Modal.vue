<template>
  <div>
    <!-- <pre>{{ $v.emailPass }}</pre> -->
    <div class="container d-flex modal__wrap">
      <div
        class="popup-p modal-dialog modal-dialog-centered"
        role="document"
        style="max-width:600px"
      >
        <div class="modal-content bg-white border-0">
          <div
            class="modal-header justify-content-center align-items-center border-0"
          >
            <h5
              class="modal-title text-center mt-md-3 mb-md-3"
              id="exampleModalLongTitle"
            >
              Log In
            </h5>
            <!-- <button
              @click="closeModal"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> -->
          </div>
          <div class="modal-body border-0">
            <form @submit.prevent="onSubmit" novalidate>
              <div class="form-group">
                <div class="label__wrap d-flex ">
                  <label
                    class=" col-md-4 p-md-3 font-weight-bold"
                    :style="[
                      phoneClick
                        ? {
                            color: 'rgba(0, 203, 173, 1)',
                            borderBottom: '3px solid',
                          }
                        : { color: 'red' },
                    ]"
                    @click="
                      (phoneClick = !phoneClick), (emailClick = !emailClick)
                    "
                    for="exampleInputPhone"
                  >
                    by Mobile Phone</label
                  >
                  <label
                    class="col-md-4 p-md-3 font-weight-bold "
                    :style="[
                      emailClick
                        ? {
                            color: 'rgba(0, 203, 173, 1)',
                            borderBottom: '3px solid',
                          }
                        : { color: 'red' },
                    ]"
                    @click="
                      (emailClick = !emailClick), (phoneClick = !phoneClick)
                    "
                    for="exampleInputEmail1"
                    >by Email</label
                  >
                </div>

                <input
                  v-if="emailClick"
                  v-model="email"
                  @blur="$v.email.$touch()"
                  :class="{ 'is-invalid': $v.email.$error }"
                  type="email"
                  class="input__param form-control p-md-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <input
                  v-else
                  v-model="phone"
                  type="tel"
                  class="input__param p-md-3 form-control"
                  @blur="$v.phone.$touch()"
                  :class="{ 'is-invalid': $v.phone.$error }"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                />

                <span
                  v-if="!$v.email.required && emailClick === true"
                  class="invalid-feedback"
                >
                  Please choose a email!
                </span>
                <span
                  v-if="!$v.email.email && emailClick === true"
                  class="invalid-feedback"
                >
                  Bad email!
                </span>

                <span
                  v-if="!$v.phone.required && phoneClick === true"
                  class="invalid-feedback"
                >
                  Please choose a phone!
                </span>
                <span
                  v-if="!$v.phone.containsNumber && phoneClick === true"
                  class="invalid-feedback"
                >
                  Bad phone! <br />format 123-456-7899
                </span>
                <!-- <span
                  v-if="!$v.phone.minLength && phoneClick === true"
                  class="invalid-feedback"
                >
                  MinLength-10
                </span> -->
              </div>
              <div class="form-group mt-md-4">
                <!-- <label for="exampleInputPassword1">Password</label> -->
                <input
                  v-if="emailClick"
                  v-model="emailPass"
                  @blur="$v.emailPass.$touch()"
                  :class="{ 'is-invalid': $v.emailPass.$error }"
                  type="password"
                  class="input__param form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />

                <input
                  v-else
                  v-model="phonePass"
                  @blur="$v.phonePass.$touch()"
                  :class="{ 'is-invalid': $v.phonePass.$error }"
                  type="password"
                  class="input__param form-control"
                  id="exampleInputPassword2"
                  placeholder="Password P"
                />
                <span
                  v-if="!$v.emailPass.required && emailClick === true"
                  class="invalid-feedback"
                >
                  Password required
                </span>
                <span
                  v-if="!$v.emailPass.minLength && emailClick === true"
                  class="invalid-feedback"
                >
                  Password minLength 6
                </span>
                <span
                  v-if="!$v.phonePass.required && phoneClick === true"
                  class="invalid-feedback"
                >
                  Password required
                </span>
                <span
                  v-if="!$v.phonePass.minLength && phoneClick === true"
                  class="invalid-feedback"
                >
                  Password minLength 6
                </span>
                <!-- <small class="error" v-if="!$v.password.$error">
                  Field is required
                </small> -->
              </div>
              <!-- <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input "
                  id="exampleCheck1"
                />
                <label class="form-check-label " for="exampleCheck1"
                  >Check me out</label
                >
              </div> -->
              <button
                v-if="emailClick"
                type="submit"
                :disabled="$v.email.$invalid || $v.emailPass.$invalid"
                class="btn btn__modal btn-lg text-white rounded mt-md-4 col-12"
                :style="[
                  disabled
                    ? {
                        backgroundColor: 'rgba(0, 203, 173, 0.3)',
                      }
                    : { backgroundColor: 'rgba(0, 203, 173, 1)' },
                ]"
              >
                Continue
              </button>
              <button
                v-else
                type="submit"
                :disabled="$v.phone.$invalid || $v.phonePass.$invalid"
                to=""
                class="btn btn__modal btn-lg text-white rounded mt-md-4 col-12"
                :style="[
                  disabled
                    ? {
                        backgroundColor: 'rgba(0, 203, 173, 0.3)',
                      }
                    : { backgroundColor: 'rgba(0, 203, 173, 1)' },
                ]"
              >
                Continue
              </button>
            </form>
          </div>
          <div class="modal-footer border-0 justify-content-center">
            <p>
              <span class="px-1">Forgot your password?</span
              ><span class="px-1">
                <a style="color:#00CBAD" href="/"
                  >Send email with linkfor reset password</a
                >
              </span>
            </p>
            <p @click="closeModal">
              <router-link class="new__user" to="/signup">
                Sign up for new user
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Modal",
  data() {
    return {
      phoneClick: true,
      emailClick: false,
      email: "",
      phone: "",
      emailPass: "",
      phonePass: "",
      //  modalShow: true,
      activeIndex: -1,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    phone: {
      required,
      containsNumber: function(value) {
        return /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(value);
      },
      minLength: minLength(6),
    },
    phonePass: {
      required,
      minLength: minLength(6), // I assume you'd want something like this too
      // containsNumber: function(value) {
      //   return /[[0-9]{3}-[0-9]{3}-[0-9]{4}]/.test(value);
      // },
      // containsUppercase: function(value) {
      //   return /[A-Z]/.test(value);
      // },
      // containsLowercase: function(value) {
      //   return /[a-z]/.test(value);
      // },
      // containsNumber: function(value) {
      //   return /[0-9]/.test(value);
      // },
      // containsSpecial: function(value) {
      //   return /[#?!@$%^&*-]/.test(value);
      // },
    },
    emailPass: {
      required,
      minLength: minLength(6), // I assume you'd want something like this too
      // containsUppercase: function(value) {
      //   return /[A-Z]/.test(value);
      // },
      // containsLowercase: function(value) {
      //   return /[a-z]/.test(value);
      // },
      // containsNumber: function(value) {
      //   return /[0-9]/.test(value);
      // },
      // containsSpecial: function(value) {
      //   return /[#?!@$%^&*-]/.test(value);
      // },
    },
  },
  props: {
    popTitle: {
      type: String,
      default: "popName",
    },
  },
  methods: {
    onSubmit() {
      console.log("s");
    },
    closeModal() {
      this.$emit("closeModal");
      //this.modalShow = !this.modalShow;
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["popup_p"]) {
        vm.closeModal();
        //console.log(123);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.modal-content {
  width: 580px;
  height: 527px;
  // left: 20px;
  // top: 20px;
  border-radius: 3%;
}

.modal-title {
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  //letter-spacing: 0.10000000149011612px;
  text-align: left;
}
.input__param {
  //styleName: FormFields / FieldPlaceholder;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  height: 58px;
}
.new__user {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #00cbad;
}
@media (max-width: 576px) {
  .modal-content {
    max-width: 320px;
  }
}
</style>
