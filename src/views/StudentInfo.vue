<template>
  <div class="studentinfo">
    <div class="container border">
      <div class="row">
        <div class="col-6">
          <h2>
            Student Info
            <a class="btn btn-sm btn-success" href="#/studentinfo/edit">Edit</a>
          </h2>
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <p v-for="(value, key) in user" class="card-text">
                    <strong>{{ key }}</strong> {{ value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h2>
            Experience <button class="btn btn-sm btn-success">Edit</button>
          </h2>
        </div>
        <div class="col-6">
          <h2>
            Education <button class="btn btn-sm btn-success">Edit</button>
          </h2>
          <div class="card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <div
                    v-for="school in education"
                    class="card-body border my-1"
                  >
                    <p v-for="(value, key) in school" class="card-text">
                      <strong>{{ key }}</strong> {{ value }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h2>Skills <button class="btn btn-sm btn-success">Edit</button></h2>
        </div>
        <div class="col-6">
          <h2>Capstone <button class="btn btn-sm btn-success">Edit</button></h2>
        </div>
      </div>
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
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        shortBio: "",
        linkedinUrl: "",
        twitterHandle: "",
        websiteUrl: "",
        onlineResumeUrl: "",
        githubUrl: "",
        photo: ""
      },
      education: []
    };
  },
  created: function() {
    // Will need to update for current user when auth is implemented
    axios
      .get("https://gentle-sierra-69054.herokuapp.com/api/students/1")
      .then(response => {
        console.log(response.data.linkedin_url);
        const student = response.data;
        this.user.firstName = student.first_name;
        this.user.lastName = student.last_name;
        this.user.email = student.email;
        this.user.phoneNumber = student.phone_number;
        this.user.shortBio = student.short_bio;
        this.user.linkedinUrl = student.linkedin_url;
        this.user.twitterHandle = student.twitter_handle;
        this.user.websiteUrl = student.website_url;
        this.user.onlineResumeUrl = student.online_resume_url;
        this.user.githubUrl = student.github_url;
        this.user.photo = student.photo;

        student.education.forEach(school => {
          this.education.push({
            startDate: school.start_date,
            endDate: school.end_date,
            degree: school.degree,
            university: school.university_name,
            details: school.details
          });
        });
      });
  },
  methods: {},
  computed: {}
};
</script>
