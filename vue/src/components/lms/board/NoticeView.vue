<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">공지사항</h1>
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
              교수학습개발센터에서는 10월의 마지막 날에 2023-2학기 마지막 학습법 특강으로<br>
              "정용실 KBS 아나운서와 함께하는 꿈, 진로, 책 이야기"를 진행합니다.<br>
              중간시험으로 지친 마음, 앞으로의 삶에 대한 두려움과 걱정을<br>
              그 시기를 버티고 살아낸 누군가의 이야기로 위로 받고, 인싸이트를 얻어가는 시간이 되기를 바랍니다.<br>
              <br>
              많은 관심과 참여를 부탁드립니다.<br>
              신청 : <a href="ctl.kookmin.ac.kr" target="_blank">ctl.kookmin.ac.kr</a><br>
              <br>
              로그인 후 [프로그램신청] > [2024-2학습법특강&워크숍] 히든K*어로 신청!<br>
              또는 K*Star Track에서 바로 신청!!
            </div>
          </article>
        </div>
        <div class="ea">
          <div class="flex__d__m">
            <div class="la flex__s__m">
              <button @click="$router.push('/lms/notice')" type="button">목록</button>
            </div>
            <div class="ra flex__e__m">
              <button @click="$router.push('/lms/notice'); openPopup('popupDel-3')" class="ty2">삭제</button>
              <button @click="$router.push('/lms/notice/write');" type="button">수정</button>
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
                  <router-link to="/lms/notice/view">2024년 1월 신설된 강의 목록입니다.</router-link>
                </td>
                <td class="num tr m-non t-m-non">2024.01.01</td>
              </tr>
              <tr class="b-next">
                <td class="t1 rel">다음글</td>
                <td class="tl tit">
                  <router-link to="/lms/notice/view">2024년 1월 신설된 강의 목록입니다.</router-link>
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
