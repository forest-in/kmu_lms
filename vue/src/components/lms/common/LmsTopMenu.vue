<template>
  <ul class="t-menu flex__m tc">
    <li>
      <router-link to="" class="block">
        <div class="flex__d__m">
          <div class="rel">
            <span class="material-symbols-outlined">notifications</span>
            <i class="abs block tc">1</i>
          </div>                
          <p>알림</p>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="" class="block">
        <div class="flex__d__m">
          <div class="rel">
            <span class="material-symbols-outlined">mail</span>
            <i class="abs block tc">2</i>
          </div>                
          <p>쪽지</p>
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="" class="block rel">
        <div class="flex__d__m">
          <div>
            <span class="material-symbols-outlined">account_circle</span>
          </div>
          <p>내 정보</p>
        </div>
      </router-link>
    </li>
    <li class="logout">
      <button type="button" class="flex__c__m">
        <span class="material-symbols-outlined">logout</span> 
        <span>로그아웃</span>
      </button>
    </li>
  </ul>
</template>

<script>

export default {
}
</script>

<style scoped>
/* Your styles for MainMenu */
</style>