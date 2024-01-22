<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">자료실</h1>
      <div class="board-box board-view">
        <div class="ta">
          <article>
            <div class="bv-tit">
              <h2>24학년도 1학기 수강신청 내역 반영 일정</h2>
              <div class="flex t2">
                <span class="inline">국민대학교</span>
                <span class="inline">2024. 01 .12
                  <span class="material-symbols-outlined inline-m">schedule</span>10:10
                </span>                
              </div>
            </div>
            <div class="bv-file">
              <a href="path/to/your/file.txt" download="filename.txt" class="flex__d__s">
                <span class="inline mgr10">첨부파일</span>
                <span class="material-symbols-outlined">download</span>
              </a>
            </div>
            <div class="bv-con">
              2024-1학기 스포츠사회학 온라인 수업과 관련하여 다음과 같이 안내드립니다.<br>
              많은 관심과 참여 부탁드립니다.
            </div>
          </article>
        </div>
        <div class="ea">
          <div class="flex__d__m">
            <div class="la flex__s__m">
              <button @click="$router.push('/lms/dataroom')" type="button">목록</button>
            </div>
            <div class="ra flex__e__m">
              <button @click="$router.push('/lms/dataroom'); openPopup('popupDel-3')" class="ty2">삭제</button>
              <button @click="$router.push('/lms/dataroom/write');" type="button">수정</button>
            </div>
          </div>
          <div class="bv-list">
            <table>
              <colgroup v-if="!isMobile">
                <col style="width:10%;">
                <col style="width:75%;">
                <col style="width:15%;">
              </colgroup>
              <colgroup  v-if="isMobile"><!-- 모바일 버전 -->
                <col style="width:20%;">
                <col style="width:80%;">
              </colgroup>
              <tr class="b-prev">
                <td class="t1 rel">이전글</td>
                <td class="tl tit">
                  <router-link to="/lms/dataroom/view">교육철학및교육사 (010670H-81)</router-link>
                </td>
                <td class="num tr m-non t-m-non">2024.01.01</td>
              </tr>
              <tr class="b-next">
                <td class="t1 rel">다음글</td>
                <td class="tl tit">
                  <router-link to="/lms/dataroom/view">교육철학및교육사 (010670H-81)</router-link>
                </td>
                <td class="num tr m-non t-m-non">2024.01.01</td>
              </tr>
            </table>
          </div>
        </div>         
      </div>
    </div>
  </section>
</template>

<script>
export default {  
  data() {
    return {
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