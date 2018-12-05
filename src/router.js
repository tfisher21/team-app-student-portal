import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import Experience from "./views/Experience.vue";

=======

import StudentInfo from "./views/StudentInfo.vue";
import EduSkillsCapstoneDisplay from "./views/EduSkillsCapstoneDisplay.vue";


>>>>>>> c5ecfc405b24e5905eebcd20513a5f3d8b11cc2a
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
<<<<<<< HEAD
      path: "/experience",
      name: "experience",
      component: Experience
=======
      path: "/studentinfo",
      name: "studentinfo",
      component: StudentInfo
    },
    {
      path: "/eduskillscapstonedisplay",
      name: "eduskillscapstonedisplay",
      component: EduSkillsCapstoneDisplay
>>>>>>> c5ecfc405b24e5905eebcd20513a5f3d8b11cc2a
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
