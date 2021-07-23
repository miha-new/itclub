<template>
  <v-view class="p-6">
    <div class="mb-8">
      <div class="flex items-center justify-center w-28 h-28 mx-auto my-4 bg-green-500 rounded-full">
        <div class="w-8 h-12 -mt-2 border-b-8 border-r-8 border-white transform rotate-45"></div>
      </div>
      <div class="mb-8 text-center font-medium text-xl">
        Payment completed<br>
        successfully
      </div>
    </div>
    <div class="mt-auto mb-2">
      <v-btn variant="primary" class="w-full" @click="updateView('Payment')">
        Make another one
      </v-btn>
    </div>
  </v-view>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const updateView = inject('updateView');
      return { updateView };
    },
  }
</script>
