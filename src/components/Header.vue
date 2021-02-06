<template>
  <div class="container-fluid bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="header__logo navbar-brand" to="/">
          <img src="../assets/svg/meddLogo.svg" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav d-flex justify-end">
            <li class="nav-item active">
              <a
                class=" btn btn-outline-secondary btn-lg rounded px-5 mr-md-1"
                href="/main"
                >Look up Catalog <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a
                class=" btn btn-outline-secondary btn-lg rounded px-5 mr-md-1"
                href="#"
                @click="visible = !visible"
                >Log in <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active" @click="visible = false">
              <router-link
                class=" btn btn-success btn-lg rounded  text-white px-5 mr-md-1"
                to="/signup"
                >Sign Up <span class="sr-only">(current)</span></router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <Modal v-if="visible" ref="" @closeModal="parentCloseModal"> </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "Header",
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    parentCloseModal() {
      this.visible = false;
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

<style lang="scss" scoped></style>
