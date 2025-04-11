<script setup>
import { reactive, ref, computed } from 'vue'
import Header from './Header.vue'
import Chartbar from './Chartbar.vue'
import Polararea from './PolarareaChart.vue'
import BubbleChart from './BubbleChart.vue'
</script>

<template>
  <div class="">
    <Header headername="Dashboard"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div class="p-6 rounded-lg shadow-md text-left">
        <i class="material-icons text-[#00B233] border-0 rounded-full p-1.5 bg-[#c7efc7]"
          >group</i>
        <p class="text-gray-600 pt-1.5 pb-1.5">Customer</p>
        <h1 class="text-xl font-bold">673</h1>
      </div>

      <div class="p-6 rounded-lg shadow-md text-left">
        <i class="material-icons text-[#0ac3ef] border-0 rounded-full p-1.5 bg-[#c7eaef]">incomplete_circle</i>
        <p class="text-gray-600 pt-1.5 pb-1.5">Conversions</p>
        <h1 class="text-xl font-bold">673</h1>
      </div>

      <div class="p-6 rounded-lg shadow-md text-left">
        <i class="material-icons text-[#ff7146] border-0 rounded-full p-1.5 bg-[#efccc7]">paid</i>
        <p class="text-gray-600 pt-1.5 pb-1.5">Conversions</p>
        <h1 class="text-xl font-bold">673</h1>
      </div>

      <div class="p-6 rounded-lg shadow-md text-left">
        <i class="material-icons text-[#ffc425] border-0 rounded-full p-1.5 bg-[#f3e7bd]">shopping_cart</i>
        <p class="text-gray-600 pt-1.5 pb-1.5">Conversions</p>
        <h1 class="text-xl font-bold">673</h1>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 p-4 h-[300px]">
      <div class="p-6 rounded-lg shadow-md text-center">
        <Chartbar />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 p-4 ">
      <div class="p-6 rounded-lg shadow-md text-center">
        <Polararea />
      </div>

       <div class="p-6 rounded-lg shadow-md text-center">
        <BubbleChart />
      </div>
    </div>
  </div>
</template>
