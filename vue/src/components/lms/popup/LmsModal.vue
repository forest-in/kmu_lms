<template>
  <div class="pop-wrap">
    <lms-pop-default :popupId="'popupDel-1'" :popupData="popupDel1" />
    <lms-pop-default :popupId="'popupDel-2'" :popupData="popupDel2" />
    <lms-pop-default :popupId="'popupDel-3'" :popupData="popupDel3" />
    <lms-pop-default :popupId="'popupReg'" :popupData="popupReg" />
    <lms-pop-default :popupId="'popupEdit'" :popupData="popupEdit" />
    <lms-pop-Form1 :popupId="'popup4'" />
  </div>
</template>

<script>
import LmsPopDefault from '@/components/lms/popup/LmsPopDefault.vue';
import LmsPopForm1 from '@/components/lms/popup/LmsPopForm1.vue';

export default {
  components: {
    LmsPopDefault,
    LmsPopForm1
  },
  data() {
    return {
      popupDel1: {
        txt1: "삭제할 게시글을 선택해주세요."
      },
      popupDel2: {
        txt1: "선택한 게시글을 삭제하시겠습니까?",
        addBtn: true,
        nextDelOpen: true,
      },
      popupDel3: {
        txt1: "삭제되었습니다."
      },
      popupReg: {
        txt1: "등록되었습니다."
      },
      popupEdit: {
        txt1: "수정되었습니다."
      },
    };
  }
}



</script>


