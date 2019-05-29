<template>
  <div class="navbar-fixed">
    <nav class="nav-extended">
      <div class="nav-wrapper container">
        <RouterLink class="brand-logo" to="/">PORTFOLIO</RouterLink>
        <ul class="right hide-on-med-and-down">
          <li v-if="isLogin">{{ username }}</li>
          <li v-else><router-link class="waves-effect waves-light btn" to="/login"><i class="material-icons left">person</i>/<i class="material-icons right">person_add</i></router-link></li>
        </ul>
      </div>
      <div class="nav-content container">
        <ul class="tabs tabs-transparent">
          <li class="tab"><router-link to="/"><i class="material-icons left">adb</i>Top</router-link></li>
          <li class="tab"><router-link to="/about"><i class="material-icons left">android</i>ABOUT</router-link></li>
          <li class="tab"><router-link to="/skills"><i class="material-icons left">build</i>SKILLS</router-link></li>
          <li class="tab"><router-link to="/study"><i class="material-icons left">border_color</i>STUDY</router-link></li>
          <li class="tab"><router-link to="/garallery">GARALLERY</router-link></li>
          <li class="tab"><router-link to="/contact"><i class="material-icons left">contact_mail</i>CONTACT</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters['auth/check'];
    },
    username() {
      return this.$store.getters['auth/username'];
    }
  }
}
</script>

