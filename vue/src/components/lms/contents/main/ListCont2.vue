<template>
  <div class="list2">
    <ul class="flex__s__t">
      <li v-for="index in 5" :key="index">
        <router-link :to="'/course/' + index">
          <div><img src="@/assets/lms-img/badge.png" alt=""></div>
          <p>인공지능융합대학</p>
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