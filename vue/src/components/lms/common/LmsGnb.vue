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
          title: '게시판',
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