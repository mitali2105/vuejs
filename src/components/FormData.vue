<template>
  <div>
    <Header headername="Form"/>
    <div
      class="grid grid-cols-1 p-5 shadow-lg shadow-[#b8b8b8] bg-white rounded-md justify-center items-middle">
      <div class="grid">
        <input
          type="text"
          v-model = "UserStore.formUser.name"
          placeholder="Enter name"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
        />
        <!-- <span v-if="$v.name.$error" class="text-red-500">Name is required!</span> -->
        <br />

        <input
          type="email"
          v-model = "UserStore.formUser.email"
          placeholder="Enter email"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
        />
        <!-- <span v-if="$v.email.$error" class="text-red-500">Invalid email!</span> -->
        <br />

        <input
          type="text"
          :value="date.toLocaleDateString()"
          @focus="toggleDatepicker"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
          readonly
        />

        <DatePicker
          v-model="UserStore.formUser.date"
          v-if="datepickerVisible"
          @update:model-value="handledatepicker"
        />

        <!-- <span v-if="$v.password.$error" class="text-red-500">Password is required!</span> -->
        <br />

        <multiselect
          v-model="UserStore.formUser.language"
          :options="language"
          :multiple="true"
          @tag="addTag"
          track-by="code"
          label="name"
          class="border-1 rounded-md"
        >
        </multiselect>

        <br />
        <select
          v-model="UserStore.formUser.city"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-1 rounded-md"
        >
          <option v-for="city in cities" :key="city.id" :value="city.name">
            {{ city.name }}
          </option>
        </select>

        <br />
        <div class="flex justify-center ">
         <button
          type="button"
          @click="UserStore.addUser"
          class="bg-[#728FCE] h-8 rounded-md max-w-2xs w-[300px]  text-center  text-white cursor-pointer"
        >
          Submit
        </button>
        </div>
       
      </div>

      <TableData />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './Header.vue'
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import {useUserStore} from '../Store/UserStore.ts'
import TableData from '../components/TableData.vue'

const cities = ref([
  { id: 1, name: 'New York' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'Chicago' },
  { id: 4, name: 'Houston' },
  { id: 5, name: 'Phoenix' },
])

const UserStore = useUserStore()


const selectCity = ref(cities.value[0])

const date = ref(new Date())
const datepickerVisible = ref(false)

function addTag(newTag) {
  UserStore.formUser.language.push(newTag)
}

function toggleDatepicker() {
  datepickerVisible.value = !datepickerVisible.value
}

function handledatepicker(selectDate) {
  date.value = selectDate
  datepickerVisible.value = false
}

const language = ref([
  { name: 'Vue.js', code: 'vu' },
  { name: 'Javascript', code: 'js' },
  { name: 'Open Source', code: 'os' },
])

const value = ref([{ name: 'Javascript', code: 'js' }])

function aadLan(newLan) {
  const tag = {
    name: newLan,
    code: newLan.substring(0, 2) + Math.floor(Math.random() * 10000000),
  }
  language.value.push(tag)
  value.value.push(tag)
}
</script>
