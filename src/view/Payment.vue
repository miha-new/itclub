<template>
  <v-view class="p-6">
    <div class="mb-4">
      <div class="mb-4 text-center font-medium text-base">Make a payment</div>
      <div class="mb-4">
        <div class="inline-block mb-2">Select contact</div>
        <button class="btn btn-select w-full" @click="updateView('SelectContact')">
          {{ contact }}
        </button>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Select payment method</div>
        <button class="btn btn-select w-full" @click="updateView('SelectMethod')">
          {{ method }}
        </button>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Enter amount</div>
        <input type="number" class="form-control" name="enterAmount" v-model="amount"/>
      </div>
    </div>
    <div class="mt-auto mb-2">
      <button class="btn btn-success w-full" @click="makePayment">
        Pay
      </button>
    </div>
  </v-view>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const updateView = inject('updateView');
      const contactSelected = inject('contactSelected');
      const methodSelected = inject('methodSelected');
      const updateContactSelected = inject('updateContactSelected');
      const updateMethodSelected = inject('updateMethodSelected');

      return {
        updateView,
        contactSelected,
        methodSelected,
        updateContactSelected,
        updateMethodSelected,
      };
    },
    data: () => ({
      amount: null,
    }),
    computed: {
      contact() {
        const { firstName, lastName, email } = this.contactSelected;

        let contact = null;

        if (firstName && lastName && email) {
          contact = `${firstName} ${lastName}, ${email}`;
        }

        return contact;
      },
      method() {
        const { fullName, cardNumber, expiryDate, accountName, accountNumber, bsb } = this.methodSelected;

        let method = null;

        if (fullName && cardNumber && expiryDate) {
          method = `${fullName}, ${cardNumber}, ${expiryDate}`;
        } else if (accountName && accountNumber && bsb) {
          method = `${accountName}, ${accountNumber}, ${bsb}`;
        }

        return method;
      },
    },
    methods: {
      makePayment() {
        if (this.contact && this.method && this.amount) {
          this.updateContactSelected('');
          this.updateMethodSelected('');
          this.amount = null;
          this.updateView('Completed');
        }
      },
    },
  }
</script>
