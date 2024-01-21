import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/lms-css/reset.min.css'
import '@/assets/lms-css/common.css'
import '@/assets/lms-css/style.css'

const app = createApp(App)
app.use(router).use(store)

/* popup */
import LmsPopup from '@/components/lms/popup/LmsModal.vue'
app.component('LmsPopup', LmsPopup)
const openPopup = function (id, data) {
  this.$store.dispatch('openPopup', { id, data });
};
app.mixin({
  methods: { openPopup:openPopup }
});

app.mount('#app')