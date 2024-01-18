<template>
  <div class="wrap">
    <lms-header />
    <lms-container />    
  </div> <!--// wrap end -->
</template>

<script>
import LmsHeader from '@/components/lms/common/LmsHeader.vue'
import LmsContainer from '@/components/lms/common/LmsContainer.vue'


export default {
  name: 'LmsIndex',
  props: {
    msg: String
  },
  components: {
    LmsHeader,
    LmsContainer
  }
}
</script>


<style scoped>
</style>
