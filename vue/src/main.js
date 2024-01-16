import { createApp } from 'vue'
import App from './App.vue'

import './assets/lms-css/reset.min.css'
import './assets/lms-css/common.css'
import './assets/lms-css/style.css'
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);
app.use(router).mount('#app');
app.component('VueDatePicker', VueDatePicker);
