<template>
  <section class="sct1">
    <div class="inner">
      <h1 class="tit">공지사항</h1>
      <div class="board-box board-list tc">            
        <form id="search" name="search" action="" method="">
          <div class="search-box flex__e__m">
            <select name="" id="">
              <option value="선택1">선택1</option>
              <option value="선택2">선택2</option>
              <option value="선택3">선택3</option>
              <option value="선택4">선택4</option>
            </select>
            <input type="text" id="searchText" name="searchText" placeholder="검색어를 입력해주세요." title="검색 내용 입력">
            <button id="aSearchBtn"><span class="material-symbols-outlined">search</span></button>                
          </div>
        </form>
        <table>
          <colgroup>
            <col style="width:8%;">
            <col style="width:8%;">
            <col style="width:44%;">
            <col style="width:12%;">
            <col style="width:12%;">
            <col style="width:8%;">
            <col style="width:8%;">
          </colgroup>
          <tr>
            <th>구분</th>
            <th>숫자</th>
            <th>제목</th>
            <th>파일</th>
            <th>선택</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>

          <tr>
            <td><label class="chk"><input type="checkbox"><i></i></label></td>
            <td class="num">1</td>
            <td class="tl tit"><a href="">2024년 1월 신설된 강의 목록입니다.</a></td>
            <td><button type="button">다운로드</button></td>
            <td>
              <select name="" id="" class="t2">
                <option value="선택1">선택1</option>
                <option value="선택2">선택2</option>
                <option value="선택3">선택3</option>
                <option value="선택4">선택4</option>
                <option value="선택5">선택5</option>
                <option value="선택6">선택6</option>
              </select>
            </td>
            <td><button type="button">수정</button></td>
            <td><button type="button" class="t2">삭제</button></td>
          </tr>

          <tr>
            <td>
              <label class="chk"><input type="checkbox"><i></i></label>
            </td>                
            <td class="num">2024.01.10</td>
            <td class="tl tit"><a href="">2024년 1월 신설된 강의 목록입니다. 2024년 1월 신설된 강의 목록입니다. 2024년 1월 신설된 강의 목록입니다.</a></td>
            <td><button type="button" class="t3">다운로드</button></td>
            <td>
              <select name="" id="" class="t2">
                <option value="선택1">선택1</option>
                <option value="선택2">선택2</option>
                <option value="선택3">선택3</option>
                <option value="선택4">선택4</option>
                <option value="선택5">선택5</option>
                <option value="선택6">선택6</option>
              </select>
            </td>
            <td><button type="button">수정</button></td>
            <td><button type="button" class="t2">삭제</button></td>
          </tr>

          <tr>
            <td colspan="7" class="empty">등록된 게시글이 없습니다.</td>                
          </tr>

        </table>
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
            <button type="button">글쓰기</button>
          </div>              
        </div>
        <div class="pagination">
          <ul class="flex__m__c">
            <li class="ar"><a href=""><span class="material-symbols-outlined">keyboard_double_arrow_left</span></a></li>
            <li class="ar"><a href=""><span class="material-symbols-outlined">chevron_left</span></a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li class="ar"><a href=""><span class="material-symbols-outlined">navigate_next</span></a></li>
            <li class="ar"><a href=""><span class="material-symbols-outlined">keyboard_double_arrow_right</span></a></li>
          </ul>
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
