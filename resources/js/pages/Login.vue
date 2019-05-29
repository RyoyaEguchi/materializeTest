<template>
  <div>
    <ul>
      <li @click="tab = 1">Login</li>
      <li @click="tab = 2">Register</li>
    </ul>

    <div v-show="tab === 1">
      <form @submit.prevent="login">
        <label for="login-email">Email</label>
        <input type="text" id="login-email" v-model="loginForm.email">
        <label for="login-password">Password</label>
        <input type="password" id="login-password" v-model="loginForm.password">
        <div>
          <button type="submit" class="waves-effect waves-light btn">login</button>
        </div>
      </form>
    </div>

    <div v-show="tab === 2">
      <form @submit.prevent="register">
        <label for="username">Name</label>
        <input type="text" id="username" v-model="registerForm.name">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="registerForm.email">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="registerForm.password">
        <label for="password-confirmation">Password (confirm)</label>
        <input type="password" id="password-confirmation" v-model="registerForm.password_confirmation">
        <div>
          <button type="submit" class="waves-effect waves-light btn">register</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginForm);

      this.$router.push('/');
    },
    async register() {
      await this.$store.dispatch('auth/register', this.registerForm);

      this.$router.push('/');
    }
  },
}
</script>