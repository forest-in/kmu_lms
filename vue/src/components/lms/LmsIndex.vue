<template>
  <div class="wrap">
    <lms-header />
    <lms-container />  
    <lms-popup />
  </div> <!--// wrap end -->
</template>

<script>
import LmsHeader from '@/components/lms/common/LmsHeader.vue'
import LmsContainer from '@/components/lms/common/LmsContainer.vue'
import LmsPopup from '@/components/lms/popup/LmsModal.vue'




export default {
  name: 'LmsIndex',
  props: {
    msg: String
  },
  components: {
    LmsHeader,
    LmsContainer,
    LmsPopup
  },
}
</script>


<style scoped>
</style>
