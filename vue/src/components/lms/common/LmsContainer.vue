<template>
  <div class="container grid">      
    <lms-aside />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div><!-- //container end -->
</template>

<script>
import LmsAside from '@/components/lms/common/LmsAside.vue'

export default {
  name: 'LmsContainer',
  components: {
    LmsAside
  }
}
</script>

<style scoped>
</style>