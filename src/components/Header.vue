<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="navbar-horizontal"
    >
      <b-navbar-brand href="#">What a fix</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/">
                <span class="nav-link nav-link-inner--text">Home</span>
              </a>
            </li>
            <li class="nav-item" v-if="logged">
              <a class="nav-link nav-link-icon" href="/profil">
                <span class="nav-link nav-link-inner--text">Profil</span>
              </a>
            </li>
            <li class="nav-item" v-if="logged">
              <a class="nav-link nav-link-icon" href="/" @click="logout()">Logout</a>
            </li>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { Auth } from "../services/auth";


export default {
  data() {
    return {
      logged: false,
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
      this.$forceUpdate();
    },
  },
};
</script>

<style>
</style

