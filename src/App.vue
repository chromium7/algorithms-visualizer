<template>
  <div id="app">
    <Header />
    <div class="body">
      <router-view />
      <div class="push"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss">
.body {
  min-height: 100vh;

  /* Equal to height of footer */
  margin-bottom: -400px;
}

.push {
  height: 400px;
}
</style>
