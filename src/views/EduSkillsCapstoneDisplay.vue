<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {
    /* HOLD - Waiting for backend deployment */
    axios.get("localhost:3000/api/students").then(response => {});

    /* Will go into .then */
    this.message = "Test";
  },
  methods: {},
  computed: {}
};
</script>
