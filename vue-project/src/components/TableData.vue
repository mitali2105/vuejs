<script setup>
import { useUserStore } from '../Store/UserStore.ts'
const UserStore = useUserStore()
</script>

<template>
  <div class="mt-10 overflow-x-auto">
    <h2 class="text-lg font-semibold mb-4 px-4">User Records</h2>
    <table class="min-w-full bg-white border border-gray-300 text-sm md:text-base">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">Email</th>
          <th class="py-2 px-4 border">Date</th>
          <th class="py-2 px-4 border">Languages</th>
          <th class="py-2 px-4 border">City</th>
          <th class="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in UserStore.users"
          :key="user.id"
          class="hover:bg-gray-50"
        >
          <td class="py-2 px-4 border">
            <input
              v-if="UserStore.editingId === user.id"
              v-model="user.name"
              class="border rounded px-2 py-1 w-full"
            />
            <span v-else>{{ user.name }}</span>
          </td>
          <td class="py-2 px-4 border">
            <input
              v-if="UserStore.editingId === user.id"
              v-model="user.email"
              class="border rounded px-2 py-1 w-full"
            />
            <span v-else>{{ user.email }}</span>
          </td>
          <td class="py-2 px-4 border">
            <input
              type="date"
              v-if="UserStore.editingId === user.id"
              v-model="user.date"
              class="border rounded px-2 py-1 w-full"
            />
            <span v-else>{{ user.date }}</span>
          </td>
          <td class="py-2 px-4 border">
            <ul>
              <li v-for="lang in user.language" :key="lang.code">
                {{ lang.name }}
              </li>
            </ul>
          </td>
          <td class="py-2 px-4 border">
            <input
              v-if="UserStore.editingId === user.id"
              v-model="user.city"
              class="border rounded px-2 py-1 w-full"
            />
            <span v-else>{{ user.city }}</span>
          </td>
          <td class="py-2 px-4 border space-y-1">
            <div v-if="UserStore.editingId === user.id" class="flex gap-2 flex-wrap">
              <button
                @click="UserStore.updateUserInline(user)"
                class="text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-sm"
              >
                Save
              </button>
              <button
                @click="UserStore.stopEdit()"
                class="text-white bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </div>
            <div v-else class="flex gap-2 flex-wrap">
              <button
                @click="UserStore.startEdit(user.id)"
                class="text-blue-500 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                @click="UserStore.deleteUser(user.id)"
                class="text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
