import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Experience from "./views/Experience.vue";
import StudentInfo from "./views/StudentInfo.vue";
import EduSkillsCapstoneDisplay from "./views/EduSkillsCapstoneDisplay.vue";
import EditStudentInfo from "./views/EditStudentInfo.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "/studentinfo",
      name: "studentinfo",
      component: StudentInfo
    },
    {
      path: "/studentinfo/edit",
      name: "editstudentinfo",
      component: EditStudentInfo
    },
    {
      path: "/eduskillscapstonedisplay",
      name: "eduskillscapstonedisplay",
      component: EduSkillsCapstoneDisplay
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
