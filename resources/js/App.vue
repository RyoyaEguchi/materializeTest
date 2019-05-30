<template>
  <div class="app-container">
    <header>
      <Navbar />
    </header>
    <main>
      <div>
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>

