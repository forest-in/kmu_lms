<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">Q & A</h1>
      <div class="board-box board-view">
        <div class="ta">
          <article>
            <div class="bv-tit">
              <p>문의 드립니다.</p>
              <div class="flex__d__m t2">
                <div class="flex">
                  <span class="inline">홍길동길동</span>
                  <span class="inline">2024. 01 .12
                    <span class="material-symbols-outlined inline-m">schedule</span>10:10
                  </span>
                </div>
              </div>
            </div>
            <div class="bv-con">
              온라인 강의는 언제 개강하나요?
            </div>
            <div class="bv-ans">
              <div class="tit flex__d__m">
                <p>답변</p>
                <ul class="flex">
                  <li><button type="button" class="ty2">수정</button></li>
                  <li class="mgl10"><button type="button" class="ty2">삭제</button></li>
                </ul>
              </div>
              <div>
                <div class="bv-txt mgb30">
                  답변드립니다.<br>
                  2024년 1학기 온라인 강의 리스트를 확인해주세요.                
                </div>
                <div class="bv-textarea flex__d__m">
                  <textarea name="" id="" placeholder="답변을 입력하세요."></textarea>
                  <button class="ty3">등록</button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="ea">
          <div class="flex__d__m">
            <div class="la flex__s__m">
              <button @click="$router.push('/lms/qna')" type="button">목록</button>
            </div>
            <div class="ra flex__e__m">
              <button @click="$router.push('/lms/qna'); openPopup('popupDel-3')" class="ty2">삭제</button>
              <button @click="$router.push('/lms/qna/write');" type="button">수정</button>
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
                  <router-link to="/lms/qna/view">2024년 1월 신설된 강의 목록입니다.</router-link>
                </td>
                <td class="num tr m-non t-m-non">2024.01.01</td>
              </tr>
              <tr class="b-next">
                <td class="t1 rel">다음글</td>
                <td class="tl tit">
                  <router-link to="/lms/qna/view">2024년 1월 신설된 강의 목록입니다.</router-link>
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