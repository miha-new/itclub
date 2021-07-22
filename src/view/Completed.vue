<template>
  <div class="view">
    <div class="mb-8">
      <div class="figure-success"></div>
      <div class="title">
        Payment completed<br>
        successfully
      </div>
    </div>
    <div class="mt-auto mb-2">
      <v-btn variant="primary" class="w-full" @click="updateView('Payment')">
        Make another one
      </v-btn>
    </div>
  </div>
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

<style scoped>
  .figure-success {
    @apply flex items-center justify-center w-28 h-28 mx-auto my-4;
    @apply bg-green-500 rounded-full;
  }
  .figure-success::before {
    @apply w-8 h-12 -mt-2;
    @apply border-b-8 border-r-8 border-white transform rotate-45;
    content: '';
  }
  .title {
    @apply mb-8 text-xl;
  }
</style>
