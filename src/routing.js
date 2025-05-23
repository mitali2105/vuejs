import { createRouter, createWebHistory } from "vue-router";
import Layout from "./Layout.vue";
import Home from "./Home.vue";
import Dashboard from "./components/HomeDashboard.vue";
import Form from "./components/FormData.vue";
import Profile from "./components/Profile.vue";
import Table from "./components/TableData.vue";
import Logout from "./Logout.vue";
import { h } from "vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        name: "Home",
        path: "",
        component: Home,
        meta: { hideSidebar: true },
      },
      {
        name: "Dashboard",
        path: "dashboard",
        component: Dashboard,
      },
      {
        name: "Table",
        path: "tabledata",
        component: Table,
      },
      {
        path: "form",
        name: "Forms",
        children: [
          {
            path: "form",
            name: "FormA",
            component: Form,
          },
        ],
      },      
      
      {
        name: "Profile",
        path: "profile",
        component: Profile,
      },
      {
        name: "Logout",
        path: "logout",
        component: Logout,
        meta: { hideSidebar: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
