<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">강의 공지사항</h1>
      <div class="board-box board-list tc">            
        <form id="search" name="search" action="" method="">
          <div class="search-box flex__e__m">            
            <select name="" id="" v-model="selectedValue" class="m-non">
              <option value="title" selected>제목</option>
              <option value="date">등록일</option>
              <option value="school">학교</option>
            </select>
            <div :class="{'option-show':selectedValue === 'date'}" class="search-type inline mgl10 clear">              
              <div class="item-date fl">
                <vue-date-picker v-model="date" range locale="ko" :enable-time-picker="false" cancelText="취소" selectText="확인" class="vue-datapicker" />
              </div>
              <div class="fl">
                <input type="text" placeholder="검색어를 입력해주세요." title="검색 내용 입력">                
              </div>
              <button class="mgl10 inline-t fr"><span class="material-symbols-outlined">search</span></button>
            </div>   
          </div>
        </form>
        <div class="search-txt tl mgt10">총 <strong class="cl1">1</strong>개의 게시글이 있습니다.</div>
        <table>
          <colgroup v-if="!isMobile">
            <col style="width:7%;">
            <col style="width:7%;">
            <col style="width:50%;">
            <col style="width:16%;">
            <col style="width:10%;">
            <col style="width:10%;">
          </colgroup>
          <colgroup  v-if="isMobile"><!-- 모바일 버전 -->
            <col style="width:60%;">
            <col style="width:20%;">
            <col style="width:20%;">
          </colgroup>
          <tr>
            <th class="m-non t-m-non">선택</th>
            <th class="m-non t-m-non">번호</th>
            <th>제목</th>
            <th>학교명</th>
            <th>작성일</th>
            <th class="m-non t-m-non">조회수</th>
          </tr>
          <tr>
            <td class="m-non t-m-non"><label class="chk"><input type="checkbox"><i></i></label></td>
            <td class="num m-non t-m-non">2</td>
            <td class="tl tit">
              <router-link to="/lms/lecture-notice/view">2024년 1학기 강의 공지사항</router-link>
              <span class="material-symbols-outlined">attach_file</span>
            </td>
            <td class="cl1 bold">국민대학교</td>
            <td>2024.01.01</td>
            <td class="num m-non t-m-non">112</td>
          </tr>
        </table>
        <div class="ea flex__d__m">
          <div class="la flex__s__m">
            <button @click="openPopup('popupDel-2')" type="button" class="ty2 m-non t-m-non">삭제</button>
          </div>
          <div class="ra flex__e__m">
            <button @click="$router.push('/lms/lecture-notice/write')">등록</button>
          </div>              
        </div>
        <div class="pagination">
          <ul class="flex__m__c">
            <li class="ar"><router-link to="" class="block"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></router-link></li>
            <li class="ar"><router-link to="" class="block"><span class="material-symbols-outlined">chevron_left</span></router-link></li>
            <li><router-link to="">1</router-link></li>
            <li class="ar"><router-link to="" class="block"><span class="material-symbols-outlined">navigate_next</span></router-link></li>
            <li class="ar"><router-link to="" class="block"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></router-link></li>
          </ul>
        </div>          
      </div>          
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: {
    VueDatePicker,
  },
  setup() {
    const date = ref([]);
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });
    return {
      date,
    };
  },
  data() {
    return {
      selectedValue: 'title',
      isMobile: false,
    };
  },
  methods: {
    handleResize() {
      this.isMobile = this.calculateIsMobile();
    },
    calculateIsMobile() {
      return window.innerWidth <= 720;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped lang="scss">
.vue-datapicker { width:auto; }
@media (max-width: #{$tablet - 1px}) {
  .board-list {
    table {      
      tr {
        th:nth-child(3)::before {display:none;}
      }
    }    
  }
}
</style>