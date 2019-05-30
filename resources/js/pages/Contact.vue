<template>
  <div>
    <form action="">
      <div class="row card contact__wrapper">
        <div class="col s4">
          <label>
            <input class="with-gap" name="group" type="radio" @click="tab = 1"  />
            <span>INDIVIDUAL</span>
          </label>
        </div>
        <div class="col s4">
          <label>
            <input class="with-gap" name="group" type="radio" value="2" @click="tab = 2"/>
            <span>COMPANY</span>
          </label>
        </div>
        <div class="col s12">
          <p  v-show="tab === 0">Choose your group</p>
        </div>
        <div v-show="tab === 1">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id="name" type="text">
            <label for="name">NAME</label>
            <span class="helper-text">Write your name</span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate">
            <label for="email">EMAIL</label>
            <span class="helper-text" data-error="wrong" data-success="right">Write your email</span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">message</i>
            <textarea class="materialize-textarea" name="message" id="message" cols="30" rows="10"></textarea>
            <label for="inquiry">MESSAGE</label>
            <span class="helper-text">Write your message</span>
          </div>
          <button class="btn waves-effect waves-light submit-btn" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
        <div v-show="tab === 2">
          <div class="input-field col s6">
            <i class="material-icons prefix">computer</i>
            <input id="company-name" type="text">
            <label for="company-name">COMPANY NAME</label>
            <span class="helper-text">Write your company name</span>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">devices</i>
            <input id="department" type="text">
            <label for="department">DEPARTMENT</label>
            <span class="helper-text">Write your department</span>
          </div>
          <div class="input-field col s8">
            <i class="material-icons prefix">account_circle</i>
            <input id="name" type="text">
            <label for="name">NAME</label>
            <span class="helper-text">Write your name</span>
          </div>
          <div class="input-field col s8">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate">
            <label for="email">EMAIL</label>
            <span class="helper-text" data-error="wrong" data-success="right">Write your email</span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">message</i>
            <textarea class="materialize-textarea" name="message" id="message"></textarea>
            <label for="message">MESSAGE</label>
            <span class="helper-text">Write your message</span>
          </div>
          <button class="btn waves-effect waves-light left submit-btn" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    }
  }
}
</script>