<template>
  <div class="home">
    <h1 class="mb-2">Student Info</h1>

    <div class="container border py-2">
      <form v-on:submit.prevent="editStudent();">
        <div class="form-group row">
          <div class="form-group col-6">
            <label>First name</label>
            <input class="form-control" v-model="editFirstName" type="text" />
          </div>
          <div class="form-group col-6">
            <label>Last name</label>
            <input class="form-control" v-model="editLastName" type="text" />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-6">
            <label>Email</label>
            <input class="form-control" v-model="editEmail" type="text" />
          </div>
          <div class="form-group col-6">
            <label>Phone Number</label>
            <input class="form-control" v-model="editPhoneNumber" type="text" />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col">
            <label>Short Bio</label>
            <input class="form-control" v-model="editShortBio" type="text" />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-4">
            <label>Linkedin URL</label>
            <input class="form-control" v-model="editLinkedinUrl" type="text" />
          </div>
          <div class="form-group col-4">
            <label>Twitter</label>
            <input
              class="form-control"
              v-model="editTwitterHandle"
              type="text"
            />
          </div>
          <div class="form-group col-4">
            <label>Online Resume URL</label>
            <input
              class="form-control"
              v-model="editOnlineResumeUrl"
              type="text"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-4">
            <label>GitHub</label>
            <input class="form-control" v-model="editGithubUrl" type="text" />
          </div>
          <div class="form-group col-4">
            <label>Photo URL</label>
            <input class="form-control" v-model="editPhoto" type="text" />
          </div>
        </div>
        <button v-on:click="editStudent();" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
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
