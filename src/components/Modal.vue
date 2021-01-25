<template>
  <div>
    <h1>Modal</h1>
    <!-- <pre>{{ $v.emailPass }}</pre> -->

    <div class="container d-flex">
      <div class="popup-p modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLongTitle">
              Login In
            </h5>
            <button
              @click="closeModal"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit" novalidate>
              <div class="form-group">
                <div class="label__wrap d-flex justify-content-around">
                  <label
                    :style="[
                      phoneClick
                        ? {
                            color: 'green',
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
                    :style="[
                      emailClick
                        ? {
                            color: 'green',
                          }
                        : { color: 'red' },
                    ]"
                    @click="
                      (emailClick = !emailClick), (phoneClick = !phoneClick)
                    "
                    for="exampleInputEmail1"
                    >Email address</label
                  >
                </div>
                <input
                  v-if="emailClick"
                  v-model="email"
                  @blur="$v.email.$touch()"
                  :class="{ 'is-invalid': $v.email.$error }"
                  type="email"
                  class="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <input
                  v-else
                  v-model="phone"
                  type="tel"
                  class="form-control"
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
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  v-if="emailClick"
                  v-model="emailPass"
                  @blur="$v.emailPass.$touch()"
                  :class="{ 'is-invalid': $v.emailPass.$error }"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />

                <input
                  v-else
                  v-model="phonePass"
                  @blur="$v.phonePass.$touch()"
                  :class="{ 'is-invalid': $v.phonePass.$error }"
                  type="password"
                  class="form-control"
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
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <button
                v-if="emailClick"
                type="submit"
                :disabled="$v.email.$invalid || $v.emailPass.$invalid"
                class="btn btn-lg btn-success col-12"
              >
                Submit
              </button>
              <button
                v-else
                type="submit"
                :disabled="$v.phone.$invalid || $v.phonePass.$invalid"
                class="btn btn-lg btn-success col-12"
                to=""
              >
                Submit
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <p @click="closeModal">
              <router-link class="btn btn-primary" to="/signup">
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
  height: 527px;
  width: 560px;
  left: 20px;
  top: 20px;
  border-radius: 0px;
}
</style>
