<template>
  <nav id="gnb">
    <accordion-group :items="menuItems" />
  </nav>
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
          title: '내 강의실',
          link: '/lms/my',
          subItems: [
            { title: '내 강의', link: '/lms/my' },
            { title: '성적 조회', link: '/lms/my' },
            { title: '이의신청', link: '/lms/my' },
            { title: '강의 공지사항', link: '/lms/my' },
            { title: '강의 문의사항', link: '/lms/my' },
          ],
        },
        {
          title: '디지털배지',
          link: '/lms/badge',
          subItems: [],
        },
        {
          title: '강의 관리',
          link: '/lms/course',
          subItems: [
            { title: '강의 관리', link: '/lms/course' },
            { title: '평가 관리', link: '/lms/course' },
          ],
        },
        {
          title: '설문 관리',
          link: '/lms/survey',
          subItems: [],
        },
        {
          title: '성적 관리',
          link: '/lms/grade',
          subItems: [
            { title: '성적 관리', link: '/lms/grade' },
            { title: '이의신청', link: '/lms/grade' },
          ],
        },
        {
          title: '회원 관리',
          link: '/lms/member',
          subItems: [
            { title: '회원 관리', link: '/lms/member' },
            { title: '권한 관리', link: '/lms/member' },
          ],
        },
        {
          title: '컨텐츠 관리',
          link: '/lms/contents',
          subItems: [],
        },
        {
          title: '게시판 관리',
          link: '/lms/notice',
          subItems: [
            { title: '공지사항', link: '/lms/notice' },
            { title: '자료실', link: '/lms/dataroom' },
            { title: 'Q&A', link: '/lms/qna' },
            { title: '강의 공지사항', link: '/lms/lecture-notice' },
            { title: '강의 문의사항', link: '/lms/lecture-inquiry' },
          ],
        },
        {
          title: '메뉴 관리',
          link: '/lms/menu',
          subItems: [],
        },
        {
          title: '통계 관리',
          link: '/lms/total',
          subItems: [],
        },
        {
          title: '시스템 관리',
          link: '/lms/system',
          subItems: [],
        },
        {
          title: '맞춤강의',
          link: '/lms/custom',
          subItems: [],
        },
        {
          title: '문제뱅크',
          link: '/lms/question',
          subItems: [],
        },
        {
          title: '사업비 관리 시스템',
          link: '/lms/cost',
          subItems: [],
        },
        {
          title: '사이트 관리',
          link: '/lms/site',
          subItems: [
            { title: '팝업 관리', link: '/lms/site' },
            { title: '이벤트 관리', link: '/lms/site' },
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