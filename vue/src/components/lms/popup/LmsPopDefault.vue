<!-- components/ReusablePopup.vue -->
<template>
  <div v-if="isPopupOpen" class="popup fix flex__c__m" @click="closePopupOutside">
    <div class="popup-content">
      <p v-if="popupData.txt1" >{{ popupData.txt1 }}</p>
      <p v-if="popupData.txt2">{{ popupData.txt2 }}</p>      
      <div>
        <button v-if="popupData.addBtn" @click="closePopup" type="button">취소</button>
        
        <button v-if="popupData.nextDelOpen" @click="this.closePopup();openPopup('popupDel-3')" type="button">확인</button>
        <button v-else @click="closePopup" type="button">확인</button>
      </div>
      <button @click="closePopup" type="button">Close</button>
    </div>
  </div>
</template>



<script>
export default {
  props: ['popupId', 'popupData'],
  computed: {
    isPopupOpen() {
      return this.$store.getters.getPopupById(this.popupId) !== undefined;
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch('closePopup', this.popupId);
    },
    closePopupOutside(event) {
      if (event.target.classList.contains('popup')) {
        this.closePopup();
      }
    },
    
  }
};
</script>


<style scoped>

</style>




