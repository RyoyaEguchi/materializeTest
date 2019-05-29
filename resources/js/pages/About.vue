<template>
  <div class="row">
    <div class="col s12 m8 left">
      <div class="card">
        <div class="card-content">
          <span class="card-title">About</span>
          <p>I'm Ryoya Eguchi.<br>I show you a picture. It's me.</p>
        </div>
        <div class="card-tabs">
          <ul class="tabs tabs-fixed-width">
            <!-- <li class="tab"><router-link tag="a" href="#skill" to="about">Skill</router-link></li> -->
            <!-- <li class="tab"><router-link tag="a" href="#study" to="about">study</router-link></li> -->
            <li class="tab"><a href="#skill" @click.prevent>SKILL</a></li>
            <li class="tab"><a href="#study" @click.prevent>STUDY</a></li>
          </ul>
        </div>
        <div class="card-content grey lighten-4">
          <div id="skill">skill</div>
          <div id="study">study</div>
        </div>
      </div>
    </div>
    <div class="col s12 m4 right">
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
    <div class="col s12 m8">
      <div class="card horizontal">
        <div class="card-image">
          <img src="../../../public/fig/CrazyMe.jpg" alt="">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>It's a simple card.</p>
          </div>
          <div class="card-action">
            <router-link to="/garallery">GO TO GARALLERY</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m12">
      <div class="card-panel teal">
        <span class="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
      </div>
    </div>
  </div>
</tempate>

