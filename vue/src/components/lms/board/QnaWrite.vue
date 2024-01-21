<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">Q & A</h1>
      <div class="board-box board-write">
        <form id="inquiry" name="inquiry" method="" action="">
          <table>
            <colgroup>
              <col style="width:15%;">
              <col style="width:35%;">
              <col style="width:15%;">
              <col style="width:35%;">
            </colgroup>
            <tr>
              <th>이름</th>
              <td colspan="3">김홍길동길동</td>
            </tr>
            <tr>
              <th>강의</th>
              <td colspan="3">화폐금융론 (0028301-81)</td>
            </tr>
            <tr>
              <th>제목</th>
              <td colspan="3"><input type="text" placeholder="제목을 입력해주세요." class="w100"></td>
            </tr>
            <tr>
              <th>내용</th>
              <td colspan="3">
                <textarea name="" id="" class="w100" placeholder="내용을 입력해주세요."></textarea>    
              </td>
            </tr>
          </table>
        </form>        
        <div class="ea flex__d__m">
          <div class="la flex__s__m">
            <button @click="$router.push('/lms/qna'); openPopup('popupDel-3')" type="button" class="ty2">삭제</button>
            <button @click="$router.push('/lms/qna')" type="button" class="ty2">취소</button>
          </div>
          <div class="ra flex__e__m">
            <button @click="$router.push('/lms/qna'); openPopup('popupReg')" type="button">등록</button>
            <button @click="$router.push('/lms/qna/view'); openPopup('popupEdit')" type="button">수정</button>
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
      files: []
    }
  },
  methods: {
    handleFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    removeFile(index) {
      this.files.splice(index, 1);
    }
  }
}
</script>