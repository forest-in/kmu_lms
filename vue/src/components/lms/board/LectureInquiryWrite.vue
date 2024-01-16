<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">공지사항</h1>
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
              <th>카테고리</th>
              <td colspan="3">                  
                <label class="rad t2"><input type="radio" name="cat"><i></i><span>카테고리1</span></label>
                <label class="rad t2"><input type="radio" name="cat"><i></i><span>카테고리2</span></label>
                <label class="rad t2"><input type="radio" name="cat"><i></i><span>카테고리3</span></label>
                <label class="rad t2"><input type="radio" name="cat"><i></i><span>카테고리4</span></label>
              </td>
            </tr>
            <tr>
              <th>비밀글</th>
              <td>                    
                <label class="chk"><input type="checkbox"><i></i></label>
              </td>
              <th>비밀번호</th>
              <td>                    
                <input type="password" placeholder="" class="w100">
              </td>
            </tr>
            <tr>
              <th>선택</th>
              <td colspan="3">                  
                <select name="" id="" class="w50 mgr10">
                  <option value="1">선택1</option>
                  <option value="2">선택2</option>
                  <option value="3">선택3</option>
                  <option value="4">선택4</option>
                </select>
                <select name="" id="" class="w50 mgr10">
                  <option value="1" selected>선택을하세요1</option>
                  <option value="2">선택을하세요2</option>
                  <option value="3">선택을하세요3</option>
                  <option value="4">선택을하세요4</option>
                </select>
                <select name="" id="" class="w50 m-mt10">
                  <option value="1">최종선택을하세요1</option>
                  <option value="2" selected>최종선택을하세요2</option>
                  <option value="3">최종선택을하세요3</option>
                  <option value="4">최종선택을하세요4</option>
                </select>
              </td>
            </tr>
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
                <input type="file" id="files" multiple>
              </td>
            </tr>
          </table>
        </form>
        
        <div class="ea flex__d__m">
          <div class="la flex__s__m">
            <select name="" id="">
              <option value="1">옵션1</option>
              <option value="2">옵션2</option>
            </select>
            <button type="button">삭제하기</button>
            <button type="button">수정하기</button>
          </div>
          <div class="ra flex__e__m">
            <button type="button">확인</button>
          </div>              
        </div>

      </div>          
    </div>
  </section>
</template>

<script>
export default{
    
}
</script>

<style scoped>
</style>
