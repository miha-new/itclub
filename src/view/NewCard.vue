<template>
  <v-view class="px-6 pb-6">
    <v-header text="New Card" class="header">
      <v-btn variant="back" class="absolute top-1/2 left-6 transform -translate-y-1/2" @click="updateView('SelectMethod')"/>
    </v-header>
    <div class="flex mb-4">
      <v-btn
        v-for="(option, index) in tabs.options"
        variant="primary"
        class="w-full"
        :class="{ active: isActiveTab(index) }"
        @click="setActiveTab(index)"
      >
        {{ option }}
      </v-btn>
    </div>
    <div class="mb-4" v-if="isActiveTab(0)">
      <div class="mb-4">
        <div class="inline-block mb-2">Full Name</div>
        <input type="text" class="form-control" name="fullName" v-model="cardFields.fullName"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Card number</div>
        <input type="text" class="form-control" name="cardNumber" v-model="cardFields.cardNumber"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Expiry date</div>
        <input type="text" class="form-control" name="expiryDate" v-model="cardFields.expiryDate"/>
      </div>
    </div>
    <div class="mb-4" v-else-if="isActiveTab(1)">
      <div class="mb-4">
        <div class="inline-block mb-2">Account name</div>
        <input type="text" class="form-control" name="accountName" v-model="bankFields.accountName"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">Account number</div>
        <input type="text" class="form-control" name="accountNumber" v-model="bankFields.accountNumber"/>
      </div>
      <div class="mb-4">
        <div class="inline-block mb-2">BSB</div>
        <input type="text" class="form-control" name="bsb" v-model="bankFields.bsb"/>
      </div>
    </div>
    <div class="mt-auto mb-2">
      <v-btn variant="success" class="w-full" @click="addNewMethod">
        Save
      </v-btn>
    </div>
  </v-view>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const updateView = inject('updateView');
      const updateCardOptions = inject('updateCardOptions');
      const updateBankOptions = inject('updateBankOptions');
      return { updateView, updateCardOptions, updateBankOptions };
    },
    created() {
      this.tabs.selected = this.tabs.options[0];
    },
    data: () => ({
      tabs: {
        selected: null,
        options: [
          'Card',
          'Bank account'
        ],
      },
      cardFields: {
        fullName: '',
        cardNumber: '',
        expiryDate: '',
      },
      bankFields: {
        accountName: '',
        accountNumber: '',
        bsb: '',
      },
    }),
    methods: {
      isActiveTab(index) {
        return this.tabs.selected === this.tabs.options[index];
      },
      setActiveTab(index) {
        this.tabs.selected = this.tabs.options[index];
        this.cardFields = { fullName: '', cardNumber: '', expiryDate: '' };
        this.bankFields = { accountName: '', accountNumber: '', bsb: '' };
      },
      addNewMethod() {
        const { fullName, cardNumber, expiryDate } = this.cardFields;
        const { accountName, accountNumber, bsb } = this.bankFields;

        if (fullName && cardNumber && expiryDate) {
          this.updateCardOptions(this.cardFields);
          this.updateView('SelectMethod');
        } else if (accountName && accountNumber && bsb) {
          this.updateBankOptions(this.bankFields);
          this.updateView('SelectMethod');
        }
      },
    },
  }
</script>
