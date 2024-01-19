import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/lms-css/reset.min.css'
import './assets/lms-css/common.css'
import './assets/lms-css/style.css'

const app = createApp(App);
app.use(router).use(store).mount('#app');

/* date picker */
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
app.component('VueDatePicker', VueDatePicker);


/* popup */
