<template>
  <div class="container">
    <!-- --------------------------------------------------- About --------------------------------------------------- -->
    <div class="row">
      <div class="col l4 m4 left">
        <h1 class="grey-text">About me</h1>
        <h5 class="grey-text lighten-1">About explains about me.<br>
                                                    I hope you get to know my outline.</h5>
        <h1 class="subtitle indigo-text text-lighten-5">01</h1>
      </div>
      <div class="col l4 m8 right">
        <div class="card">
          <div class="card-image">
            <img src="../../../public/fig/CrazyMe.jpg" alt="">
            <span class="card-title black-text">Wow! it's me?</span>
            <router-link class="btn-floating halfway-fab waves-effect waves-light red" to="/garallery"><i class="material-icons">add</i></router-link>
          </div>
          <div class="card-content">
            <p>I'm very sad.<br>If you want more pictures, push button.<br>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</p>
          </div>
        </div>
      </div>
      <div class="col l4 m8 right">
        <div class="card">
          <div class="card-content">
            <span class="card-title">About</span>
            <p>I'm Ryoya Eguchi.<br>I show you a picture. It's me.</p>
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width" ref="tabs">
              <li class="tab"><a href="#skill" @click.prevent>SKILL</a></li>
              <li class="tab"><a href="#study" @click.prevent>STUDY</a></li>
            </ul>
          </div>
          <div class="card-content grey lighten-4">
            <div id="skill">
              <p>
                I have many skills.<br>
                If you want to see my skills, you will click links.
              </p>
              <router-link class="waves-effect waves-light btn link-btn" to="/skills">MORE READ</router-link>
            </div>
            <div id="study">
              <p>
                I did studys. For example, deep-learning, birds AI, Gender bias, and more.<br>
                If you want to see detail of studys, you will click links.
              </p>
              <router-link class="waves-effect waves-light btn link-btn" to="/study">MORE READ</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col s8 m8 right">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
      </div>
    </div>
    </div>
    <div class="divider"></div>
    <!-- --------------------------------------------------- Skills --------------------------------------------------- -->
    <div class="row">
      <div class="col l4 s4 right">
        <h1 class="grey-text">It's my skills</h1>
        <h5 class="grey-text lighten-1">About explains about me.<br>
                                        I hope you get to know my outline.</h5>
        <h1 class="subtitle indigo-text text-lighten-5 col s4 m4">02</h1>
      </div>
    </div>
    <div class="divider"></div>
    <!-- --------------------------------------------------- Study --------------------------------------------------- -->
    <div class="row">
      <div class="col l4 s4 left">
        <h1 class="grey-text">It's my skills</h1>
        <h5 class="grey-text lighten-1">About explains about me.<br>
                                        I hope you get to know my outline.</h5>
        <h1 class="subtitle indigo-text text-lighten-5 col s4 m4">03</h1>
      </div>
    </div>
    <div class="divider"></div>
    <!-- --------------------------------------------------- Garallery --------------------------------------------------- -->
    <div class="row">
      <div class="col l4 s4 right">
        <h1 class="grey-text">It's my skills</h1>
        <h5 class="grey-text lighten-1">About explains about me.<br>
                                        I hope you get to know my outline.</h5>
        <h1 class="subtitle indigo-text text-lighten-5 col s4 m4">04</h1>
      </div>
    </div>
    <div class="divider"></div>
    <!-- --------------------------------------------------- Contact --------------------------------------------------- -->
    <div class="row">
      <div class="col l4 s4 left">
        <h1 class="grey-text">If you want contact</h1>
        <h5 class="grey-text lighten-1">About explains about me.<br>
                                        I hope you get to know my outline.</h5>
        <h1 class="subtitle indigo-text text-lighten-5 col s4 m4">05</h1>
      </div>
      <div class="col l8 m8 right">
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
import Contact from './Contact.vue'
export default {
  components: {
    Contact
  },
  data() {
    return {
      tab: null,
    }
  },
  mounted() {
    this.tab = window.M.Tabs.init(this.$refs.tabs);
  }
}
</script>