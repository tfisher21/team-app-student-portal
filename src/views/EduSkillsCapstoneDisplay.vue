<template>
  <div class="home">
    <div class="container">
      <h1 class="mb-2">{{ message }}</h1>
    </div>
    <div class="container border">
      <h2 class="mt-2">Education</h2>
      <form class="form">
        <div class="form-group row">
          <label class="col-form-label col">Start Date:</label>
          <label class="col-form-label col">{{
            educationInfo.startDate
          }}</label>
          <div class="col">
            <input
              class="form-control"
              type="text"
              v-model="educationInfo.startDate"
            />
          </div>
          <div class="col"><input class="btn btn-primary" type="submit" /></div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col">End Date:</label>
          <label class="col-form-label col">{{ educationInfo.endDate }}</label>
          <div class="col">
            <input
              class="form-control"
              type="text"
              v-model="educationInfo.endDate"
            />
          </div>
          <div class="col"><input class="btn btn-primary" type="submit" /></div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col">Degree:</label>
          <label class="col-form-label col">{{ educationInfo.degree }}</label>
          <div class="col">
            <input
              class="form-control"
              type="text"
              v-model="educationInfo.degree"
            />
          </div>
          <div class="col"><input class="btn btn-primary" type="submit" /></div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col">University:</label>
          <label class="col-form-label col">{{
            educationInfo.university
          }}</label>
          <div class="col">
            <input
              class="form-control"
              type="text"
              v-model="educationInfo.university"
            />
          </div>

        </div>
      </form>
    </div>
    <div class="container border">
      <h2 class="mt-2">Skills</h2>
      <form class="form">
        <div class="form-group row">
          <label class="col-form-label col">Skills:</label>
          <div class="col">
            <textarea v-model="skills" v-bind:placeholder="skills"></textarea>
          </div>
        </div>
        <div class="col"><input class="btn btn-primary" type="submit" /></div>
      </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Education, Skills, & Capstone Info",
      educationInfo: {
        startDate: "09-01-2018",
        endDate: "05-31-2022",
        degree: "Computer Science",
        university: "DePaul University"
      },
      skills: "Ruby"
    };
  },
  created: function() {
    /* HOLD - Waiting for backend deployment */
    axios.get("localhost:3000/api/students").then(response => {});

    /* Will go into .then */
  },
  methods: {},
  computed: {}
};
</script>
