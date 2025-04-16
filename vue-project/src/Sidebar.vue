<template>
  <div :class="['h-screen bg-gray-800 text-white transition-all duration-300', { 'w-20': !isOpen, 'w-64': isOpen }]">
    <div class="flex items-center justify-between p-4">
      <h2 class="text-xl font-bold" v-if="isOpen">Dashboard</h2>
      <button @click="$emit('toggleSidebar')" class="text-white focus:outline-none">
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <ul class="mt-4 space-y-1">
      <li class="p-4 hover:bg-gray-700 cursor-pointer">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>

      <!-- FORMS DROPDOWN -->
      <li class="p-4 hover:bg-gray-700 cursor-pointer" @click="toggleDropdown">
        <div class="flex justify-between items-center">
          <span>Forms</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isDropdownOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"
            />
          </svg>
        </div>
      </li>
      <ul v-if="isDropdownOpen" class="ml-6 space-y-1 text-sm">
        <li class="p-2 hover:bg-gray-600 rounded">
          <router-link to="/form/form">Form A</router-link>
        </li>
        <!-- <li class="p-2 hover:bg-gray-600 rounded">
          <router-link to="/form/form-b">Form B</router-link>
        </li> -->
      </ul>

      <li class="p-4 hover:bg-gray-700 cursor-pointer">
        <router-link to="/profile">Profile</router-link>
      </li>
      <li class="p-4 hover:bg-gray-700 cursor-pointer">
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
