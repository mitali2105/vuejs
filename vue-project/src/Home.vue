<script setup>
import { reactive, ref, computed } from 'vue'
import TableData from './components/TableData.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {useRouter} from "vue-router"

const router = useRouter();
// Reactive form state
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirm_pass: '',
  selectGender: null,
  developer: false,
  designer: false,
  male: false,
  female: false,
})

const passwordMatch = (value) => value === form.password || 'Passwords do not match'

// Validation rules
const rules = {
  name: { required },
  email: { required, email },
  password: { required },
  confirm_pass: {
    required,
    passwordMatch,
  },
  selectGender: { required },
}

// Vuelidate hook
const $v = useVuelidate(rules, form)

// Users list and control variables
const users = ref([])
const showData = ref(false)

// Form submission logic
const getData = () => {
  $v.value.$touch() // Trigger validation

  if (!$v.value.$invalid) {
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      confirm_pass: form.confirm_pass,
      developer: form.developer,
      designer: form.designer,
      male: form.male,
      female: form.female,
      gender: form.selectGender,
    }

    users.value.push(newUser)
    showData.value = true
    clearForm()

    router.push('./dashboard')
  }
}

// Clear form data
const clearForm = () => {
  form.name = ''
  form.email = ''
  form.password = ''
  form.confirm_pass = ''
  form.selectGender = null
  form.developer = false
  form.designer = false
  form.male = false
  form.female = false
  $v.value.$reset() // Reset validation state
}

// Remove user from the list
const removeData = (user) => {
  users.value = users.value.filter((t) => t !== user)
}
</script>

<template >
<div class="m-[10%] p-10">

  <h1 class="text-3xl font-bold text-[#728FCE] p-2.5 text-center">Register Form</h1>
  <div class="grid grid-cols-2 p-5 shadow-lg shadow-[#b8b8b8] bg-white rounded-md">
    <div class="grid">
      <input
        v-model="form.name"
        type="text"
        placeholder="Enter name"
        class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
      />
      <span v-if="$v.name.$error" class="text-red-500">Name is required!</span>
      <br />

      <input
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
      />
      <span v-if="$v.email.$error" class="text-red-500">Invalid email!</span>
      <br />

      <input
        v-model="form.password"
        type="password"
        placeholder="Enter password"
        class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
      />
      <span v-if="$v.password.$error" class="text-red-500">Password is required!</span>
      <br />

      <input
        v-model="form.confirm_pass"
        type="password"
        placeholder="Confirm password"
        class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md"
      />
      <span v-if="$v.confirm_pass.$error" class="text-red-500">{{
        $v.confirm_pass.$passwordMatch || 'Passwords do not match!'
      }}</span>
      <br />

      <div class="flex justify-center gap-1.5 mb-2.5">
        <label class="text-[grey]">Developer</label>
        <input type="checkbox" v-model="form.developer" />

        <label class="text-[grey]">Designer</label>
        <input type="checkbox" v-model="form.designer" />
      </div>

      <div class="flex justify-center gap-1.5 mb-0.5">
        <label for="male" class="text-[grey]">Male</label>
        <input
          type="radio"
          value="male"
          name="gender"
          id="male"
          v-model="form.selectGender"
        />

        <label for="female" class="text-[grey]">Female</label>
        <input
          type="radio"
          value="female"
          name="gender"
          id="female"
          v-model="form.selectGender"
        />
      </div>
      <span v-if="$v.selectGender.$error" class="text-red-500 flex justify-center mb-2.5"
        >Gender is required!</span
      >

      <button
        @click="getData()"
        type="button"
        class="bg-[#728FCE] h-8 rounded-md text-white cursor-pointer"
      >
        Submit
      </button>
    </div>

    <div>
      <img src="./assets/login.jpg" class="w-[400px] h-[300px]" />
    </div>
  </div>

  <!-- <TableData
    :details="users"
    :showData="showData"
    :selectGender="form.selectGender || ''"
    :removeData="removeData"
  /> -->
</div>

</template>

<style scoped>
.inputbox {
  margin-top: 10px;
}
</style>
