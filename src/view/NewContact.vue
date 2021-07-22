<template>
  <div class="view">
    <div class="header">
      <v-btn variant="back" @click="updateView('SelectContact')"/>
      <div class="title">New Contact</div>
    </div>
    <div class="mb-4">
      <div class="mb-4">
        <div class="form-label">First Name</div>
        <input type="text" class="form-control" name="firstName" v-model="fields.firstName"/>
      </div>
      <div class="mb-4">
        <div class="form-label">Last name</div>
        <input type="text" class="form-control" name="lastName" v-model="fields.lastName"/>
      </div>
      <div class="mb-4">
        <div class="form-label">Email</div>
        <input type="text" class="form-control" name="email" v-model="fields.email"/>
      </div>
    </div>
    <div class="mt-auto mb-2">
      <v-btn variant="success" class="w-full" @click="addNewContact">
        Save
      </v-btn>
    </div>
  </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const updateView = inject('updateView');
      const updateContactOptions = inject('updateContactOptions');
      return { updateView, updateContactOptions };
    },
    data: () => ({
      fields: {
        firstName: '',
        lastName: '',
        email: '',
      },
    }),
    methods: {
      addNewContact() {
        const firstName = this.fields.firstName;
        const lastName = this.fields.lastName;
        const email = this.fields.email;

        if (firstName && lastName && email) {
          this.updateContactOptions(this.fields);
          this.updateView('SelectContact');
        }
      },
    },
  }
</script>

<style scoped>
  .view {
    @apply pt-0;
  }
</style>
