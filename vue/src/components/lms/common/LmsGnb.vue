<template>
  <nav id="gnb">
    <ul>
      <li>
        <router-link to="/lms/notice">공지사항</router-link>
        <ul>
          <li><router-link to="/lms/notice">목록</router-link></li>
          <li><router-link to="/lms/notice/write">등록</router-link></li>
          <li><router-link to="/lms/notice/view">상세</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/lms/dataroom">자료실</router-link>
        <ul>
          <li><router-link to="/lms/dataroom">목록</router-link></li>
          <li><router-link to="/lms/dataroom/write">등록</router-link></li>
          <li><router-link to="/lms/dataroom/view">상세</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/lms/qna">Q&A</router-link>
        <ul>
          <li><router-link to="/lms/qna">목록</router-link></li>
          <li><router-link to="/lms/qna/write">등록</router-link></li>
          <li><router-link to="/lms/qna/view">상세</router-link></li>
        </ul>
      </li> 
      <li>
        <router-link to="/lms/lecture-notice">강의 공지사항</router-link>
        <ul>
          <li><router-link to="/lms/lecture-notice">목록</router-link></li>
          <li><router-link to="/lms/lecture-notice/write">등록</router-link></li>
          <li><router-link to="/lms/lecture-notice/view">상세</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/lms/lecture-inquiry">강의 문의사항</router-link>
        <ul>
          <li><router-link to="/lms/lecture-inquiry">목록</router-link></li>
          <li><router-link to="/lms/lecture-inquiry/write">등록</router-link></li>
          <li><router-link to="/lms/lecture-inquiry/view">상세</router-link></li>
        </ul>
      </li>  
    </ul>
  </nav>
</template>

<script>
export default{
    
}

</script>

<style scoped lang="scss">

</style>