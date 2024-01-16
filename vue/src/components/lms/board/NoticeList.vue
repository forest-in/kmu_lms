<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">공지사항</h1>
      <div class="board-box board-list tc">            
        <form id="search" name="search" action="" method="">
          <div class="search-box flex__e__m">
            <VueDatePicker v-model="date" range locale="ko" />
            <select name="" id="">
              <option value="제목">제목</option>
              <option value="등록일">등록일</option>
              <option value="등록학교">등록학교</option>
            </select>
            <input type="text" placeholder="검색어를 입력해주세요." title="검색 내용 입력" class="mgl10">
            <button class="mgl10"><span class="material-symbols-outlined">search</span></button>                
          </div>
        </form>
        <div class="seatch-txt tl mgt10">총 <strong class="cl1">5</strong>개의 공지사항이 있습니다.</div>
        <table>
          <colgroup>
            <col style="width:7%;">
            <col style="width:7%;">
            <col style="width:50%;">
            <col style="width:16%;">
            <col style="width:10%;">
            <col style="width:10%;">
          </colgroup>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>제목</th>
            <th>학교명</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>

          <tr>
            <td><label class="chk"><input type="checkbox"><i></i></label></td>
            <td class="num">2</td>
            <td class="tl tit"><a href="">2024년 1월 신설된 강의 목록입니다. </a> <span class="material-symbols-outlined">attach_file</span></td>
            <td class="cl1 bold">국민대학교</td>
            <td class="num">2024.01.01</td>
            <td class="num">112</td>
          </tr>
          <tr>
            <td><label class="chk"><input type="checkbox"><i></i></label></td>
            <td class="num">1</td>
            <td class="tl tit"><a href="">2024년 1월 신설된 강의 목록입니다.</a></td>
            <td class="cl1 bold">한국어대학교 서울캠퍼스</td>
            <td class="num">2024.01.01</td>
            <td class="num">112</td>
          </tr>
          <tr>
            <td colspan="7" class="empty">등록된 게시글이 없습니다.</td>                
          </tr>

        </table>
        <div class="ea flex__d__m">
          <div class="la flex__s__m">
            <button type="button">삭제</button>
          </div>
          <div class="ra flex__e__m">
            <button type="button">등록</button>
          </div>              
        </div>
        <div class="pagination">
          <ul class="flex__m__c">
            <li class="ar"><a href="" class="block"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></a></li>
            <li class="ar"><a href="" class="block"><span class="material-symbols-outlined">chevron_left</span></a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li class="ar"><a href="" class="block"><span class="material-symbols-outlined">navigate_next</span></a></li>
            <li class="ar"><a href="" class="block"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></a></li>
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



const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));  
  date.value = [startDate, endDate];
}) 

export default{
  components: { VueDatePicker }
}
</script>

<style scoped>
</style>
