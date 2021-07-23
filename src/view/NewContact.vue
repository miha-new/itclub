<template>
  <v-view class="px-6 pb-6">
    <v-header text="New Contact" class="header">
      <button
        class="btn btn-back absolute top-1/2 left-6 transform -translate-y-1/2"
        @click="updateView('SelectContact')"
      />
    </v-header>
    <div class="mb-4">
      <div class="mb-4">
        <div class="inline-block mb-2">First Name</div>
        <input type="text" class="form-control" name="firstName" v-model="fields.firstName"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Last name</div>
        <input type="text" class="form-control" name="lastName" v-model="fields.lastName"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Email</div>
        <input type="text" class="form-control" name="email" v-model="fields.email"/>
      </div>
    </div>
    <div class="mt-auto mb-2">
      <button class="btn btn-success w-full" @click="addNewContact">
        Save
      </button>
    </div>
  </v-view>
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
