<!-- components/Popup2.vue -->
<template>
  <div v-if="isPopupOpen" class="popup">
    <div class="popup-content">
      <p>{{ popupData.data }}</p>
      <!-- Form 내용 추가 -->
      <form>
        <label for="name">Name:dd</label>
        <input type="text" id="name" v-model="formData.name">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">

        <button @click="submitForm">Submit</button>
      </form>
      <button @click="closePopup" type="button">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['popupId'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
    };
  },
  computed: {
    isPopupOpen() {
      return this.$store.getters.getPopupById(this.popupId) !== undefined;
    },
    popupData() {
      return this.$store.getters.getPopupById(this.popupId) || {};
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch('closePopup', this.popupId);
    },
    submitForm() {
      console.log('Form submitted:', this.formData);
      this.closePopup();
    },
  },
};
</script>

<style scoped>

</style>
