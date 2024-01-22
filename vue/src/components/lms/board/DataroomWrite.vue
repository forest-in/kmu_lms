<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">자료실</h1>
      <div class="board-box board-write">
        <form id="inquiry" name="inquiry" method="" action="">
          <table>
            <colgroup>
               <col style="width:15%">
              <col style="width:45%;">
              <col style="width:15%;">
              <col style="width:25%;">
            </colgroup>
            <tr>
              <th>제목</th>
              <td colspan="3"><input type="text" placeholder="제목을 입력해주세요." class="w100"></td>
            </tr>
            <tr>
              <th>내용</th>
              <td colspan="3">
                <div class="tc" style="padding: 20rem 0;">
                  에디터 삽입
                </div>
              </td>
            </tr>
            <tr>
              <th>첨부파일</th>
              <td colspan="3">
                <div id="filePicker">
                  <input type="file" id="filepicker" @change="handleFileChange" multiple>
                  <ul id="output">
                    <li v-for="file in files" :key="file.name" class="inline mgr10">
                      {{ file.name }}
                      <button @click="removeFile(index)" type="button" class="file-del ty2">
                        <span class="material-symbols-outlined">close</span>
                      </button>
                    </li>
                  </ul>
                </div>                
              </td>
            </tr>
            <tr>
              <th>노출 여부</th>
              <td>                  
                <label class="rad"><input type="radio" name="data1" checked><i></i><span>노출</span></label>
                <label class="rad"><input type="radio" name="data1"><i></i><span>비노출</span></label>
              </td>
              <th>상단고정</th>
              <td>      
                <label class="chk"><input type="checkbox"><i></i></label>
              </td>
            </tr>
            <tr>
              <th>비밀글</th>
              <td colspan="3">            
                <label class="chk"><input type="checkbox"><i></i></label>
                <input type="password" placeholder="" class="mgl20">
              </td>
            </tr>
            <tr>
              <th>등록일</th>
              <td colspan="3">
                2024-01-25 12:00  
              </td>
            </tr>
          </table>
        </form>        
        <div class="ea flex__d__m">
          <div class="la flex__s__m">
            <button @click="$router.push('/lms/dataroom'); openPopup('popupDel-3')" type="button" class="ty2">삭제</button>
            <button @click="$router.push('/lms/dataroom')" type="button" class="ty2">취소</button>
          </div>
          <div class="ra flex__e__m">
            <button @click="$router.push('/lms/dataroom'); openPopup('popupReg')" type="button">등록</button>
            <button @click="$router.push('/lms/dataroom/view'); openPopup('popupEdit')" type="button">수정</button>
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