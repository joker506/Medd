<template>
  <div>
    <h1>Modal</h1>
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
            <form>
              <div class="form-group">
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

                <input
                  v-if="emailClick"
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <input
                  v-else
                  v-model="phone"
                  type="phone"
                  class="form-control"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                />
                <small
                  v-if="emailClick"
                  id="emailHelp"
                  class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
                <small v-else id="phonelHelp" class="form-text text-muted"
                  >We'll never share your phone with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  v-if="emailClick"
                  v-model="emailPass"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <input
                  v-else
                  v-model="phonePass"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password P"
                />
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
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <router-link class="btn btn-primary" to="/signup">
              Sign up for new user
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  props: {
    popTitle: {
      type: String,
      default: "popName",
    },
  },
  methods: {
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
