<template>
  <header>
    <div class="top rel">
      <div class="inner">
        <div class="flex__d__m">
          <router-link to="/lms/" class="logo block"><img src="@/assets/lms-img/logo_wh.png" alt="NCCOSS 첨단분야 혁신 융합대학 LMS"></router-link>
          <top-menu></top-menu>
          <p class="ham-btm"><button type="button" >모바일메뉴</button></p>
        </div> 
      </div>
    </div>
  </header>
</template>

<script>
import TopMenu from '@/components/lms/common/LmsTopMenu.vue';
export default{
  components: {TopMenu}
}

</script>

<style scoped>
</style>