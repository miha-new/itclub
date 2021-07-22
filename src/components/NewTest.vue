<template>
  <div>
    <div>
      <div>
        Make a payment
      </div>
      <div>
        <input type="text" class="form-control" placeholder="Select contact"/>
      </div>
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
  </div>
</template>

<style scoped>
  .form-control {
    @apply block px-3 py-2 w-full;
    @apply font-normal text-base;
    @apply bg-gray-100 border border-gray-200;
    @apply transition-colors ease-in-out;
    @apply placeholder-gray-400;
    @apply focus:ring ring-blue-100 focus:border-blue-300;
  }
</style>
