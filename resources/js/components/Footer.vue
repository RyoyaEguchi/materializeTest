<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
          <p class="grey-text text-lighten-4">You can use rows and columns</p>
        </div>
        <!-- <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><router-link class="grey-text text-lighten-3" to="/">Top</router-link></li>
            <li><router-link class="grey-text text-lighten-3" to="/about">ABOUT</router-link></li>
            <li><router-link class="grey-text text-lighten-3" to="/skills">SKILLS</router-link></li>
            <li><router-link class="grey-text text-lighten-3" to="/study">STUDY</router-link></li>
            <li><router-link class="grey-text text-lighten-3" to="/contact">CONTACT</router-link></li>
          </ul>
        </div> -->
        <div>
          <button v-if="isLogin" class="waves waves-light btn" @click="logout"><i class="material-icons">person_outline</i></button>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2019 Copyright Ryoya Eguchi
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters['auth/check'];
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');

      this.$router.push('/login');
    }
  }
}
</script>