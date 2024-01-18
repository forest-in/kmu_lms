<template>
  <!-- <nav id="gnb">
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
  </nav> -->
  <div>
    <AccordionGroup :items="menuItems" />
  </div>
</template>

<script>
import AccordionGroup from './LmsGnbSub.vue';

export default {
  components: {
    AccordionGroup,
  },
  data() {
    return {
      menuItems: [
        {
          title: '공지사항',
          link: '/lms/notice',
          subItems: [
            { title: '목록', link: '/lms/notice' },
            { title: '등록', link: '/lms/notice/write' },
            { title: '상세', link: '/lms/notice/view' },
          ],
        },
        {
          title: 'Top Item 2',
          link: '/top2',
          subItems: [
            { title: 'Sub Item 2-1', link: '/top2/sub1' },
            { title: 'Sub Item 2-2', link: '/top2/sub2' },
            { title: 'Sub Item 2-3', link: '/top2/sub3' },
          ],
        },
        {
          title: 'Top Item 3',
          link: '/top3',
          subItems: [
            { title: 'Sub Item 3-1', link: '/top3/sub1' },
            { title: 'Sub Item 3-2', link: '/top3/sub2' },
            { title: 'Sub Item 3-3', link: '/top3/sub3' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Your styles for MainMenu */
</style>