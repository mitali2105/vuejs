<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar 
      :isOpen="isSidebarOpen" 
      @toggleSidebar="toggleSidebar" 
      v-if="!hideSidebar" 
      class="sidebar"
      :class="{ 'w-0': !isSidebarOpen, 'w-64': isSidebarOpen }" 
    />

    <!-- Main content -->
   <main 
  :class="{ 'ml-19.5': !isSidebarOpen && !Homepage && !Logout, 'ml-64': isSidebarOpen && !Homepage && !Logout }" 
  class="flex-1 p-6 bg-gray-100 transition-all duration-300 overflow-y-auto main_layout"
>
  <router-view />
</main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './Sidebar.vue';

const isSidebarOpen = ref(true);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};


const route = useRoute();
const hideSidebar = computed(() => route.meta.hideSidebar);

const Homepage = computed(() => route.path === "/")
const Logout = computed(() => route.path === "/logout")

console.log("Current route:", route.path);

</script>

<style>
/* Sidebar styles */
.sidebar {
  position: fixed; 
  top: 0;
  left: 0;
  height: 100vh; 
  background-color: #1a202c;
  transition: width 0.3s ease; 
  overflow: hidden;
  z-index: 1000; 
}

/* Main content */
.main_layout {
  transition: margin-left 0.3s ease; 
  /* overflow-y-auto; */
}

/* Responsive behavior */
@media (max-width: 768px) {
  .sidebar {
    width: 0 !important;
  }
  .main_layout {
    margin-left: 0 !important;
  }
}
</style>
