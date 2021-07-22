<template>
  <div class="view">
    <div class="header">
      <v-btn variant="back" @click="updateView('Payment')"/>
      <div class="title">Select method</div>
      <v-btn variant="add" @click="updateView('NewCard')"/>
    </div>
    <div class="mb-4" v-if="cardOptions.length">
      <div class="title">Credit/debit cards</div>
      <div class="mb-4">
        <div v-for="card in cardOptions" class="card" @click="selectMethod(card)">
          <div class="figure"></div>
          <div class="fullname">{{ card.fullName }}</div>
          <div class="flex">
            <div class="card-number">{{ card.cardNumber }}</div>
            <div class="expiry-date">{{ card.expiryDate }}</div>
          </div>
          <v-btn variant="more"/>
        </div>
      </div>
    </div>
    <div class="mb-4" v-if="bankOptions.length">
      <div class="title">Bank accounts</div>
      <div class="mb-4">
        <div v-for="bank in bankOptions" class="card" @click="selectMethod(bank)">
          <div class="figure"></div>
          <div class="fullname">{{ bank.accountName }}</div>
          <div class="flex">
            <div class="card-number">{{ bank.accountNumber }}</div>
            <div class="expiry-date">{{ bank.bsb }}</div>
          </div>
          <v-btn variant="more" @click.prevent/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const updateView = inject('updateView');
      const cardOptions = inject('cardOptions');
      const bankOptions = inject('bankOptions');
      const updateMethodSelected = inject('updateMethodSelected');

      return { updateView, cardOptions, bankOptions, updateMethodSelected };
    },
    methods: {
      selectMethod(value) {
        this.updateMethodSelected(value);
        this.updateView('Payment');
      },
    },
  }
</script>

<style scoped>
  .view {
    @apply pt-0;
  }
  .card {
    @apply relative block w-full px-3 py-1 mb-4 bg-gray-100 border border-gray-200 select-none cursor-pointer;
  }
  .card .figure {
    @apply mb-2 w-8 h-6 bg-green-400;
  }
  .card .fullname {
    @apply font-normal text-base;
  }
  .card .expiry-date {
    @apply ml-auto font-normal text-base text-gray-400;
  }
  .card .btn-more {
    @apply absolute top-1 right-0;
  }
</style>
