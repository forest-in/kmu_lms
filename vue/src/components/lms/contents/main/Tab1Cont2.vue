<template>
  <div class="list">
    <ul>
      <li v-for="index in 5" :key="index">
        <router-link :to="'/course/' + index" class="flex__d__m">
          <p>[캘린더 명] Text</p>
          <span>2023.10.20</span>                  
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
</style>