<script setup>
defineProps({
  headername: String,
})
</script>

<template>
  <div class="container">
    <div class="grid p-2.5">
      <h1>{{ headername }}</h1>
    </div>
  </div>
</template>
