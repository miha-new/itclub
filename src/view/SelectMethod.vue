<template>
  <v-view class="px-6 pb-6">
    <v-header text="Select method" class="header">
      <button
        class="btn btn-back absolute top-1/2 left-6 transform -translate-y-1/2"
        @click="updateView('Payment')"
      />
      <button
        class="btn btn-add absolute top-1/2 right-6 transform -translate-y-1/2"
        @click="updateView('NewCard')"
      />
    </v-header>
    <div class="mb-4" v-if="cardOptions.length">
      <div class="mb-4 text-left font-medium text-base">Credit/debit cards</div>
      <div class="mb-4">
        <item-card
          v-for="card in cardOptions"
          :name="card.fullName"
          :number="card.cardNumber"
          :code="card.expiryDate"
          @click="selectMethod(card)"
        >
          <button class="btn btn-more absolute top-1 right-0" @click.prevent/>
        </item-card>
      </div>
    </div>
    <div class="mb-4" v-if="bankOptions.length">
      <div class="mb-4 text-left font-medium text-base">Bank accounts</div>
      <div class="mb-4">
        <item-card
          v-for="bank in bankOptions"
          :name="bank.accountName"
          :number="bank.accountNumber"
          :code="bank.bsb"
          @click="selectMethod(bank)"
        >
          <button class="btn btn-more absolute top-1 right-0" @click.prevent/>
        </item-card>
      </div>
    </div>
  </v-view>
</template>

<script>
  import { inject } from 'vue';
  import ItemCard from '../components/ItemCard';

  export default {
    components: {
      ItemCard,
    },
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
