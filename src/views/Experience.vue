<template>
  <div>
    <h1>Start Date</h1>
    <input v-model="Start_Date" />
    <h1>End Date</h1>
    <input v-model="End_Date" />
    <h1>Job Title</h1>
    <input v-model="Job_Title" />
    <h1>Company Name</h1>
    <input v-model="Company_Name" />
    <h1>Details</h1>
    <input v-model="Details" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Start_Date: 2010,
      End_Date: 2013,
      Job_Title: "Temp Job",
      Company_Name: "Actualize",
      Details: "These are the details"
    };
  }
};
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };
</script>
