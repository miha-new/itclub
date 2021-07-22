import { createApp, h } from 'vue';
import App from './App.vue';
import Button from './components/Button';
import './assets/tailwind.css';

const app = createApp(App);

app.component('v-btn', Button);

app.mount('#app');
