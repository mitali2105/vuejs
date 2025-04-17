<script setup>
import { reactive, ref, computed } from 'vue'
import Header from './Header.vue'
import Chartbar from './Chartbar.vue'
import Polararea from './PolarareaChart.vue'
import BubbleChart from './BubbleChart.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Timeline from "./TimelinePage.vue"
import Setting from './Setting.vue'

const categories = ref({
  Activity: [],
  Timeline: [],
  Setting: [],
})

</script>

<template>
  <div class="">
    <Header headername="Profile"/>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 ">
      <div
        class="p-6 rounded-lg shadow-md md:col-span-1 order-1 md:order-1  flex flex-col items-center border-t-4 border-t-[#007bff]"
      >
        <img src="../assets/user.jpg" alt="" class="rounded-full w-[100px] h-[100px]" />

        <h1 class="font-semibold text-2xl">Nina Mcintire</h1>
        <p class="text-[grey] p-1.5">Software Engineer</p>

        <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

        <div class="flex justify-between w-full p-2.5">
          <h1 class="font-bold">Followers</h1>
          <p class="text-[#007bff] font-medium">1,322</p>
        </div>

        <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

        <div class="flex justify-between w-full p-2.5">
          <h1 class="font-bold">Following</h1>
          <p class="text-[#007bff] font-medium">543</p>
        </div>

        <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

        <div class="flex justify-between w-full p-2.5">
          <h1 class="font-bold">Friends</h1>
          <p class="text-[#007bff] font-medium">13,287</p>
        </div>

        <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

        <div class="p-2.5 w-full">
          <button
            type="submit"
            class="bg-[#007bff] w-[100%] text-white p-1.5 text-[18px] rounded-md"
          >
            Follow
          </button>
        </div>
      </div>

      <div class="p-6 rounded-lg shadow-md md:col-span-3 order-2 md:order-2 ">
        <div class="w-full px-2 sm:px-0">
          <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                v-for="category in Object.keys(categories)"
                as="template"
                :key="category"
                v-slot="{ selected }"
              >
                <button
                  :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  ]"
                >
                  {{ category }}
                </button>
              </Tab>
            </TabList>

            <TabPanels class="mt-2">
              <TabPanel
                :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <div class="p-1.5">
                  <div class="border-1 border-[#D3D3D3] w-[100%]"></div>
                  <div class="w-full flex flex-row items-center mt-2.5">
                    <div class="">
                      <img
                        src="../assets/user2.jpg"
                        alt=""
                        class="w-[50px] rounded-full"
                      />
                    </div>
                    <div class="p-3.5">
                      <h1 class="text-[#007bff] font-bold text-[15px]">
                        Jonathan Burke Jr.
                      </h1>
                      <p class="text-[#848484] text-[11px] font-semibold">
                        Shared publicly - 7:30 PM today
                      </p>
                    </div>
                  </div>
                  <p class="text-[grey] text-[13px]">
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for its
                    demise, but others ignore the hate as they create awesome tools to
                    help create filler text for everyone from bacon lovers to Charlie
                    Sheen fans.
                  </p>

                  <div class="flex mb-2.5">
                    <!-- Share and Like on the left side -->
                    <div class="flex">
                      <div class="flex flex-row items-center mt-2.5 cursor-pointer">
                        <i
                          class="material-icons transform rotate-180 text-[grey] text-[12px]"
                          >reply</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Share</p>
                      </div>

                      <div
                        class="flex flex-row items-center mt-2.5 ml-2.5 cursor-pointer"
                      >
                        <i class="material-icons transform text-[grey] text-[10px]"
                          >thumb_up</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Like</p>
                      </div>
                    </div>

                    <!-- Comment pushed to the right -->
                    <div class="flex ml-auto flex-row items-center mt-2.5 cursor-pointer">
                      <i class="material-icons transform text-[grey] text-[10px]"
                        >forum</i
                      >
                      <p class="text-[grey] text-[13px] ml-1">Comment</p>
                    </div>
                  </div>
                  <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

                  <div class="w-full flex flex-row items-center mt-2.5">
                    <div class="">
                      <img
                        src="../assets/user2.jpg"
                        alt=""
                        class="w-[50px] rounded-full"
                      />
                    </div>
                    <div class="p-3.5">
                      <h1 class="text-[#007bff] font-bold text-[15px]">
                        Jonathan Burke Jr.
                      </h1>
                      <p class="text-[#848484] text-[11px] font-semibold">
                        Shared publicly - 7:30 PM today
                      </p>
                    </div>
                  </div>
                  <p class="text-[grey] text-[13px]">
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for its
                    demise, but others ignore the hate as they create awesome tools to
                    help create filler text for everyone from bacon lovers to Charlie
                    Sheen fans.
                  </p>

                  <div class="flex mb-2.5">
                    <!-- Share and Like on the left side -->
                    <div class="flex">
                      <div class="flex flex-row items-center mt-2.5 cursor-pointer">
                        <i
                          class="material-icons transform rotate-180 text-[grey] text-[12px]"
                          >reply</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Share</p>
                      </div>

                      <div
                        class="flex flex-row items-center mt-2.5 ml-2.5 cursor-pointer"
                      >
                        <i class="material-icons transform text-[grey] text-[10px]"
                          >thumb_up</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Like</p>
                      </div>
                    </div>

                    <!-- Comment pushed to the right -->
                    <div class="flex ml-auto flex-row items-center mt-2.5 cursor-pointer">
                      <i class="material-icons transform text-[grey] text-[10px]"
                        >forum</i
                      >
                      <p class="text-[grey] text-[13px] ml-1">Comment</p>
                    </div>
                  </div>
                  <div class="border-1 border-[#D3D3D3] w-[100%]"></div>

                  <div class="w-full flex flex-row items-center mt-2.5">
                    <div class="">
                      <img
                        src="../assets/user2.jpg"
                        alt=""
                        class="w-[50px] rounded-full"
                      />
                    </div>
                    <div class="p-3.5">
                      <h1 class="text-[#007bff] font-bold text-[15px]">
                        Jonathan Burke Jr.
                      </h1>
                      <p class="text-[#848484] text-[11px] font-semibold">
                        Shared publicly - 7:30 PM today
                      </p>
                    </div>
                  </div>
                  <p class="text-[grey] text-[13px]">
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for its
                    demise, but others ignore the hate as they create awesome tools to
                    help create filler text for everyone from bacon lovers to Charlie
                    Sheen fans.
                  </p>

                  <div class="flex mb-2.5">
                    <!-- Share and Like on the left side -->
                    <div class="flex">
                      <div class="flex flex-row items-center mt-2.5 cursor-pointer">
                        <i
                          class="material-icons transform rotate-180 text-[grey] text-[12px]"
                          >reply</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Share</p>
                      </div>

                      <div
                        class="flex flex-row items-center mt-2.5 ml-2.5 cursor-pointer"
                      >
                        <i class="material-icons transform text-[grey] text-[10px]"
                          >thumb_up</i
                        >
                        <p class="text-[grey] text-[13px] ml-1">Like</p>
                      </div>
                    </div>

                    <!-- Comment pushed to the right -->
                    <div class="flex ml-auto flex-row items-center mt-2.5 cursor-pointer">
                      <i class="material-icons transform text-[grey] text-[10px]"
                        >forum</i
                      >
                      <p class="text-[grey] text-[13px] ml-1">Comment</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>

            <TabPanels>
              <TabPanel
                :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >

                <Timeline/>
              </TabPanel> 
            </TabPanels>

            <TabPanels>
              <TabPanel
                :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >

                <Setting/>
              </TabPanel> 
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  </div>
</template>
