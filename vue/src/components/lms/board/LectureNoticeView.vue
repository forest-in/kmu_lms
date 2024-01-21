<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">강의 공지사항</h1>
      <div class="board-box board-view">
        <div class="ta">
          <article>
            <div class="bv-tit">
              <h2>2024년 1학기 강의 공지사항</h2>
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
              2024년 1학기 강의 공지사항입니다.
            </div>
          </article>
        </div>
        <div class="ea">
          <div class="flex__d__m">
            <div class="la flex__s__m">
              <button @click="$router.push('/lms/lecture-notice')" type="button">목록</button>
            </div>
            <div class="ra flex__e__m">
              <button @click="$router.push('/lms/lecture-notice'); openPopup('popupDel-3')" class="ty2">삭제</button>
              <button @click="$router.push('/lms/lecture-notice/write');" type="button">수정</button>
            </div>
          </div>
          <div class="bv-list">
            <table>
              <colgroup>
                <col style="width:10%;">
                <col style="width:70%;">
                <col style="width:10%;">
              </colgroup>
              <tr class="b-prev">
                <td class="t1 rel">이전글</td>
                <td class="tl tit">
                  <router-link to="/lms/lecture-notice/view">2024년 1학기 강의 공지사항</router-link>
                </td>
                <td class="num tr">2024.01.01</td>
              </tr>
              <tr class="b-next">
                <td class="t1 rel">다음글</td>
                <td class="tl tit">
                  <router-link to="/lms/lecture-notice/view">2024년 1학기 강의 공지사항</router-link>
                </td>
                <td class="num tr">2024.01.01</td>
              </tr>
            </table>
          </div>
        </div>         
      </div>
    </div>
  </section>
</template>

<script>
</script>