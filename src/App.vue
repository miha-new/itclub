<template>
  <transition :name="fadeOrRight">
    <Payment v-if="view === 'Payment'"/>
  </transition>
  <transition :name="leftOrRight">
    <SelectContact v-if="view === 'SelectContact'"/>
  </transition>
  <transition name="slide-lr">
    <NewContact v-if="view === 'NewContact'"/>
  </transition>
  <transition :name="leftOrRight">
    <SelectMethod v-if="view === 'SelectMethod'"/>
  </transition>
  <transition name="slide-lr">
    <NewCard v-if="view === 'NewCard'"/>
  </transition>
  <transition name="fade">
    <Completed v-if="view === 'Completed'"/>
  </transition>
</template>

<script>
  import { provide, reactive, ref } from 'vue';
  import Payment from './view/Payment.vue';
  import SelectContact from './view/SelectContact.vue';
  import NewContact from './view/NewContact.vue';
  import SelectMethod from './view/SelectMethod.vue';
  import NewCard from './view/NewCard.vue';
  import Completed from './view/Completed.vue';

  export default {
    components: {
      Payment,
      SelectContact,
      NewContact,
      SelectMethod,
      NewCard,
      Completed,
    },
    setup() {
      const view = ref('Payment');
      const oldView = ref('');

      const updateView = (value) => {
        oldView.value = view.value;
        view.value = value;
      };

      const contactSelected = ref('');
      const contactOptions = reactive(JSON.parse(localStorage.getItem('contacts')) || []);

      const updateContactSelected = (value) => {
        contactSelected.value = value;
      }

      const updateContactOptions = (value) => {
        contactOptions.push(value);
        localStorage.setItem('contacts', JSON.stringify(contactOptions));
      }

      const methodSelected = ref('');
      const cardOptions = reactive(JSON.parse(localStorage.getItem('cards')) || []);
      const bankOptions = reactive(JSON.parse(localStorage.getItem('banks')) || []);

      const updateMethodSelected = (value) => {
        methodSelected.value = value;
      }

      const updateCardOptions = (value) => {
        cardOptions.push(value);
        localStorage.setItem('cards', JSON.stringify(cardOptions));
      }

      const updateBankOptions = (value) => {
        bankOptions.push(value);
        localStorage.setItem('banks', JSON.stringify(bankOptions));
      }

      provide('view', view);
      provide('updateView', updateView);
      provide('contactSelected', contactSelected);
      provide('contactOptions', contactOptions);
      provide('updateContactSelected', updateContactSelected);
      provide('updateContactOptions', updateContactOptions);
      provide('methodSelected', methodSelected);
      provide('cardOptions', cardOptions);
      provide('bankOptions', bankOptions);
      provide('updateMethodSelected', updateMethodSelected);
      provide('updateCardOptions', updateCardOptions);
      provide('updateBankOptions', updateBankOptions);

      return { view, oldView };
    },
    computed: {
      fadeOrRight() {
        return this.view === 'Completed' || this.oldView === 'Completed' ? 'fade' : 'slide-rl';
      },
      leftOrRight() {
        return this.view === 'Payment' || this.oldView === 'Payment' ? 'slide-lr' : 'slide-rl';
      },
    },
  }
</script>

<style>
  .slide-rl-leave-active,
  .slide-rl-enter-active {
    @apply absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out;
  }
  .slide-rl-enter-active {
    @apply transform -translate-x-full;
  }
  .slide-rl-leave-active {
    @apply transform translate-x-0;
  }
  .slide-rl-enter-to {
    @apply transform translate-x-0;
  }
  .slide-rl-leave-to {
    @apply transform -translate-x-full;
  }

  .slide-lr-leave-active,
  .slide-lr-enter-active {
    @apply absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out;
  }
  .slide-lr-enter-active {
    @apply transform translate-x-full;
  }
  .slide-lr-leave-active {
    @apply transform translate-x-0;
  }
  .slide-lr-enter-to {
    @apply transform translate-x-0;
  }
  .slide-lr-leave-to {
    @apply transform translate-x-full;
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    @apply opacity-0
  }
</style>
