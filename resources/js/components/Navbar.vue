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
        <ul class="tabs tabs-transparent row">
          <li class="tab col s2"><router-link to="/">Top</router-link></li>
          <li class="tab col s2"><router-link to="/about">ABOUT</router-link></li>
          <li class="tab col s2"><router-link to="/skills">SKILLS</router-link></li>
          <li class="tab col s2"><router-link to="/study">STUDY</router-link></li>
          <li class="tab col s2"><router-link to="/garallery">Garallery</router-link></li>
          <li class="tab col s2"><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: {
    hoverTab: '',
  },
  computed: {
    isLogin() {
      return this.$store.getters['auth/check'];
    },
    username() {
      return this.$store.getters['auth/username'];
    }
  },
  methods: {
    mouseOver: function() {
      this.hoverTab = '';
    },
    mouseleave: function() {
      this.hoverTab = '';
    }
  }
}
</script>

