<template>
  <div class="copntainer">
    <h1>Experience</h1>
    <form>
      <label>Start Date: <input v-model="Start_Date" /> </label> <br />
      <label>End Date: <input v-model="End_Date" /> </label> <br />
      <label>Job Title: <input v-model="Job_Title"/></label> <br />
      <label>Company Name: <input v-model="Company_Name" /> </label> <br />
      <label>Details: <input v-model="Details"/></label> <br />
      <button>Update</button>
    </form>
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
