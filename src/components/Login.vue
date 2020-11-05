<template>
  <section>
    <div v-if="logged">
      <header-vue />
    </div>
    <b-container >
      <b-form  inline @submit.prevent="signin()" v-if="!logged">
        <label class="sr-only" for="inline-form-input-email">Email</label>
        <b-input
          id="inline-form-input-email"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Email"
          v-model="email"
        ></b-input>

        <label class="sr-only" for="inline-form-input-password">Password</label>

        <b-input
          id="inline-form-input-password"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Password"
          v-model="password"
        ></b-input>

        <button variant="primary">Login</button>
      </b-form>
    </b-container>
    <div v-if="!logged">
      <b-button v-b-toggle.collapse-1 variant="primary">S'inscrire</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <register-vue />
      </b-collapse>
    </div>
  </section>
</template>


<script>
import { Auth } from "../services/auth";
import RegisterVue from "./Register.vue";
import HeaderVue from "./Header.vue";

export default {
  components: {
    RegisterVue,
    HeaderVue,
  },
  data() {
    return {
      email: "",
      password: "",
      logged: false,
      message: "",
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.logged = true;
    }
  },
  methods: {
    signin() {
      const auth = new Auth();
      auth
        .login(this.email, this.password)
        .then(() => (this.logged = true))
        .catch(() => (this.message = "Credentials errors"));
    },
    logout() {
      localStorage.removeItem("token");
      this.logged = false;
    },
  },
};
</script>

<style>
</style>