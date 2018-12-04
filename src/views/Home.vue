<template>
  <div class="home">
    <h1>We going to the top!</h1>
    <img alt="Vue logo" src="../assets/logo.png" /> <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Test Mike</h1>
    <h1>Hey, Mike this is Dan!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
