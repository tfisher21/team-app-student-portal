<template>
  <div class="home">
    <h1 class="mb-2">Edit Student Info</h1>

    <div class="container border py-2">
      <form v-on:submit.prevent="editStudent();">
        <div class="form-group row">
          <div class="form-group col-6">
            <label>First name</label>
            <input
              class="form-control"
              v-model="editFirstName"
              type="text"
              placeholder="First Name"
            />
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
import axios from "axios";

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
  created: function() {
    // Will need to update for current user when auth is implemented
    axios
      .get("https://gentle-sierra-69054.herokuapp.com/api/students/1")
      .then(response => {
        console.log(response.data.linkedin_url);
        const student = response.data;
        this.editFirstName = student.first_name;
        this.editLastName = student.last_name;
        this.editEmail = student.email;
        this.editPhoneNumber = student.phone_number;
        this.editShortBio = student.short_bio;
        this.editLinkedinUrl = student.linkedin_url;
        this.editTwitterHandle = student.twitter_handle;
        this.editWebsiteUrl = student.website_url;
        this.editOnlineResumeUrl = student.online_resume_url;
        this.editGithubUrl = student.github_url;
        this.editPhoto = student.photo;
      });
  },
  methods: {},
  computed: {}
};
</script>
