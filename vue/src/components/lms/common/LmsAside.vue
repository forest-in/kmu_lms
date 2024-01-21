<template>
  <aside>
    <div class="ta tc rel">
      <div class="u-logo inline abs">NCCOSS</div>
      <div class="user rel">
        <span class="inline"><strong>성수빈</strong>님</span> 환영합니다.
      </div>      
    </div>
    <top-menu></top-menu>
    <lms-gnb />    
  </aside>
</template>

<script>
import LmsGnb from '@/components/lms/common/LmsGnb.vue'
import TopMenu from '@/components/lms/common/LmsTopMenu.vue';

export default {
  name: 'LmsAside',
  components: {
    LmsGnb,
    TopMenu
  }
}
</script>

<style scoped>
</style>