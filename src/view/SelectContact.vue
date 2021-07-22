<template>
  <div class="view">
    <div class="header">
      <v-btn variant="back" @click="updateView('Payment')"/>
      <div class="title">Select contact</div>
      <v-btn variant="add" @click="updateView('NewContact')"/>
    </div>
    <div class="mb-4">
      <div v-for="contact in contactOptions" class="contact" @click="selectContact(contact)">
        <div class="fullname">
          {{ contact.firstName }} {{ contact.lastName }}
        </div>
        <div class="email">{{ contact.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const contactOptions = inject('contactOptions');
      const updateView = inject('updateView');
      const updateContactSelected = inject('updateContactSelected');
      return { contactOptions, updateView, updateContactSelected };
    },
    methods: {
      selectContact(value) {
        this.updateContactSelected(value);
        this.updateView('Payment');
      },
    },
  }
</script>

<style scoped>
  .view {
    @apply pt-0;
  }
  .contact {
    @apply block w-full px-3 py-1 mb-4 bg-gray-100 border border-gray-200 select-none cursor-pointer;
  }
  .contact .fullname {
    @apply font-normal text-base;
  }
  .contact .email {
    @apply font-normal text-base text-gray-400;
  }
</style>
