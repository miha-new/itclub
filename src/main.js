import { createApp, h } from 'vue';
import App from './App.vue';
import View from './components/View';
import Header from './components/Header';
import Button from './components/Button';
import './assets/tailwind.css';

const app = createApp(App);

app.component('v-view', View);
app.component('v-header', Header);
app.component('v-btn', Button);

app.mount('#app');
