<template>
  <aside>
    <div class="ta tc">
      <div class="u-logo inline"><img src="@/assets/lms-img/kmu_logo.png" alt="국민대학교"></div>
      <div class="user">
        <span class="inline"><strong>성수빈</strong>님</span> 환영합니다.
      </div>
    </div>
    <lms-gnb />    
  </aside>
</template>

<script>
import LmsGnb from '@/components/lms/common/LmsGnb.vue'

export default {
  name: 'LmsAside',
  components: {
    LmsGnb
  }
}
</script>

<style scoped>
</style>