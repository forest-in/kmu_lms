import { createRouter, createWebHashHistory } from 'vue-router'
import LmsMain from '@/components/lms/contents/LmsMain.vue'

const routes = [
  // ---------------------- LMS main ---------------------- //
  {
    path: '/lms/',
    name: 'LmsMain',
    component: LmsMain
  },
  // ---------------------- LMS Board ---------------------- //
  {
    path: '/lms/notice',
    name: 'Notice',
    component: () => import('@/components/lms/board/NoticeList.vue')
  },
  {
    path: '/lms/notice/write',
    name: 'NoticeWrite',
    component: () => import('@/components/lms/board/NoticeWrite.vue')
  },
  {
    path: '/lms/notice/view',
    name: 'NoticeView',
    component: () => import('@/components/lms/board/NoticeView.vue')
  },
  {
    path: '/lms/dataroom',
    name: 'Dataroom',
    component: () => import('@/components/lms/board/DataroomList.vue')
  },
  {
    path: '/lms/dataroom/write',
    name: 'DataroomWrite',
    component: () => import('@/components/lms/board/DataroomWrite.vue')
  },
  {
    path: '/lms/dataroom/view',
    name: 'DataroomView',
    component: () => import('@/components/lms/board/DataroomView.vue')
  },
  {
    path: '/lms/qna',
    name: 'QnaList',
    component: () => import('@/components/lms/board/QnaList.vue')
  },
  {
    path: '/lms/qna/write',
    name: 'QnaWrite',
    component: () => import('@/components/lms/board/QnaWrite.vue')
  },
  {
    path: '/lms/qna/view',
    name: 'QnaView',
    component: () => import('@/components/lms/board/QnaView.vue')
  },
  {
    path: '/lms/lecture-notice',
    name: 'LectureNoticeList',
    component: () => import('@/components/lms/board/LectureNoticeList.vue')
  },
  {
    path: '/lms/lecture-notice/write',
    name: 'LectureNoticeWrite',
    component: () => import('@/components/lms/board/LectureNoticeWrite.vue')
  },
  {
    path: '/lms/lecture-notice/view',
    name: 'LectureNoticeView',
    component: () => import('@/components/lms/board/LectureNoticeView.vue')
  },
  {
    path: '/lms/lecture-inquiry',
    name: 'LectureInquiryList',
    component: () => import('@/components/lms/board/LectureInquiryList.vue')
  },
  {
    path: '/lms/lecture-inquiry/write',
    name: 'LectureInquiryWrite',
    component: () => import('@/components/lms/board/LectureInquiryWrite.vue')
  },
  {
    path: '/lms/lecture-inquiry/view',
    name: 'LectureInquiryView',
    component: () => import('@/components/lms/board/LectureInquiryView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
