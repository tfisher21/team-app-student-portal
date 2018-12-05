<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <h2>Student Info</h2>
    <form action="/action_page.php">
      First name: <input v-model="editFirstName" type="text" /><br />
      Last name: <input v-model="editLastName" type="text" /><br />
      Email: <input v-model="editEmail" type="text" /><br />
      Phone Number: <input v-model="editPhoneNumber" type="text" /><br />
      Short Bio: <input v-model="editShortBio" type="text" /><br />
      Linkedin URL: <input v-model="editLinkedinUrl" type="text" /><br />
      Twitter Handle: <input v-model="editTwitterHandle" type="text" /><br />
      Website URL: <input v-model="editWebsiteUrl" type="text" /><br />
      Online Resume URL: <input v-model="editOnlineResumeUrl" type="text" /><br />
      Github URL: <input v-model="editGithubUrl" type="text" /><br />
      Photo: <input v-model="editPhoto" type="text" /><br />
      <button v-on:click="editStudent();" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      Students: [],
      editFirstName: "",
      editLastName: "",
      editEmail: "",
      editPhoneNumber: "",
      editShortBio: "",
      editLinkedinUrl: "",
      editTwitterHandle: "",
      editWebsiteUrl: "",
      editOnlineResumeUrl: "",
      editGithubUrl: "",
      editPhoto: ""
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
