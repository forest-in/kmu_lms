<!-- components/ReusablePopup.vue -->
<template>
  <div class="pop-wrap">
    <!-- <button @click="openPopup('popup1', 'Popup Content 1')">Open Popup 1</button> -->
    <button @click="openPopup('popup2', 'Popup Content 2')">Open Popup 2</button>
    <button @click="openPopup('popup3', 'Popup Content 3')">Open Popup 3</button>

    <lms-pop-default :popupId="'popup1'" />
    <lms-pop-default :popupId="'popup2'" />
    <lms-pop-Form1 :popupId="'popup3'" />
  </div>
</template>

<script>
import LmsPopDefault from '@/components/lms/popup/LmsPopDefault.vue';
import LmsPopForm1 from '@/components/lms/popup/LmsPopForm1.vue';

export default {
  components: {
    LmsPopDefault,
    LmsPopForm1
  },
  methods: {
    openPopup(id, data) {
      this.$store.dispatch('openPopup', { id, data });
    },
  },
}
</script>

<style scoped>

</style>
