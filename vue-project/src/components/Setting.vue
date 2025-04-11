<script setup>

</script>

<template>

    <div>
        <div
      class="md:grid md:grid-cols-1 p-5   justify-center items-middle">
      <div class="grid">
      <div class="md:flex items-center">
       <label class="font-bold mr-3.5">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-3 rounded-md w-full md:ml-10"
        />
      </div>
        <br/>
        <div class="md:flex items-center">
        <label class="font-bold mr-4.5">Email</label>
          <input
          type="email"
          placeholder="Enter email"
          class="h-[30px] border-1 border-grey-50 text-[grey] p-3  rounded-md w-full md:ml-10"
        />
        </div>
      

          <br/>
        <div class="md:flex items-center">
        <label class="font-bold ">Address</label>
          <textarea rows="2" 
          type="text"
          placeholder="Enter Address"
          class=" border-1 border-grey-50 text-[grey] p-3 rounded-md w-full md:ml-10"
        />
        </div>
        <!-- <span v-if="$v.email.$error" class="text-red-500">Invalid email!</span> -->
        
        <br />
        <div class="flex justify-center ">
         <button
          type="button"
          class="bg-[#728FCE] h-8 rounded-md max-w-2xs w-full  text-center  text-white cursor-pointer"
        >
          Submit
        </button>
        </div>
       
      </div>
    </div>
    </div>
</template>