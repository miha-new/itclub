<template>
  <v-view class="px-6 pb-6">
    <v-header text="Select contact" class="header">
      <v-btn variant="back" class="absolute top-1/2 left-6 transform -translate-y-1/2" @click="updateView('Payment')"/>
      <v-btn variant="add" class="absolute top-1/2 right-6 transform -translate-y-1/2" @click="updateView('NewContact')"/>
    </v-header>
    <div class="mb-4">
      <item-contact
        v-for="contact in contactOptions"
        :fullName="`${contact.firstName} ${contact.lastName}`"
        :email="contact.email"
        @click="selectContact(contact)"
      />
    </div>
  </v-view>
</template>

<script>
  import { inject } from 'vue';
  import ItemContact from '../components/ItemContact';

  export default {
    components: {
      ItemContact,
    },
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
