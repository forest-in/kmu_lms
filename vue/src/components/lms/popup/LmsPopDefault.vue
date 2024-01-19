<!-- components/ReusablePopup.vue -->
<template>
  <div v-if="isPopupOpen" class="popup">
    <div class="popup-content">
      <p>{{ popupData.data }}</p>
      <p>This is additional content for Popup 1.</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['popupId'],
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
  },
};
</script>

<style scoped>

</style>
