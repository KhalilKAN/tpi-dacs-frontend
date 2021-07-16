<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


      <NavBar login = 1 />


      <PrincipalSection />

      <!-- <Footer /> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from  '@/components/NavBar.vue';
import PrincipalSection from  '@/components/PrincipalSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar,
    PrincipalSection,
    Footer
  }
}
</script>
<style lang="postcss" scoped>

</style>