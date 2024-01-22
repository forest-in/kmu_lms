<template>
  <section class="main">
    <div class="inner">
      <h1 class="hidden">국민대학교 LMS 대시보드 화면</h1>

      <div class="contsnts grid">
        <div class="box">
          <div class="tit flex__d__b">
            <p>수강중인 강의목록</p>
            <router-link to="" class="more block">더보기</router-link>
          </div>
          <list-cont1></list-cont1>
        </div>

        <div class="box">
          <div class="tit flex__s__m rel">
            <div class="tab flex__d__b" v-for="tab in tabs1" :key="tab.id" @click="changeTab(tab.id, 1)" :class="{ 'active': activeTab1 === tab.id }">
              <p class="rel">{{ tab.label }}</p>
              <router-link to="" class="more block abs">더보기</router-link>
            </div>
          </div>
          
          <div v-for="tabContent in tabContents1" :key="tabContent.id" v-show="activeTab1 === tabContent.id" class="tab-content">
            <component :is="tabContent.component" />
          </div>
        </div>

        <div class="box">
          <div class="tit flex__s__m rel">
            <div class="tab flex__d__b" v-for="tab in tabs2" :key="tab.id" @click="changeTab(tab.id, 2)" :class="{ 'active': activeTab2 === tab.id }">
              <p class="rel">{{ tab.label }}</p>
              <router-link to="" class="more block abs">더보기</router-link>
            </div>
          </div>          
          <div v-for="tabContent in tabContents2" :key="tabContent.id" v-show="activeTab2 === tabContent.id" class="tab-content">
            <component :is="tabContent.component" />
          </div>
        </div>

        <div class="box">
          <div class="tit flex__d__b">
            <p>나의 디지털배지</p>
            <router-link to="" class="more block">더보기</router-link>
          </div>
          <list-cont2></list-cont2>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import ListCont1 from './main/ListCont1.vue';
import ListCont2 from './main/ListCont2.vue';
import Tab1Cont1 from './main/Tab1Cont1.vue';
import Tab1Cont2 from './main/Tab1Cont2.vue';
import Tab2Cont1 from './main/Tab2Cont1.vue';
import Tab2Cont2 from './main/Tab2Cont2.vue';
import Tab2Cont3 from './main/Tab2Cont3.vue';

export default {
  components: {
    ListCont1, ListCont2, Tab1Cont1, Tab1Cont2, Tab2Cont1, Tab2Cont2, Tab2Cont3
  },
  data() {
    return {
      tabs1: [
        { id: 1, label: '학사 일정' },
        { id: 2, label: '캘린더' },
      ],
      tabContents1: [
        { id: 1, component: 'Tab1Cont1' },
        { id: 2, component: 'Tab1Cont2' },
      ],
      activeTab1: 1,

      tabs2: [
        { id: 3, label: '수강중인 강의 공지' },
        { id: 4, label: '나의 문의' },
        { id: 5, label: '이의신청 내역' },
      ],
      tabContents2: [
        { id: 3, component: 'Tab2Cont1' },
        { id: 4, component: 'Tab2Cont2' },
        { id: 5, component: 'Tab2Cont3' },
      ],
      activeTab2: 3,
    };
  },
  methods: {
    changeTab(tabId, set) {
      if (set === 1) {
        this.activeTab1 = tabId;
      } else if (set === 2) {
        this.activeTab2 = tabId;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main {  
  .contsnts {
    $lg1: 3.2rem;
    $trs: translateX(.4rem);
    margin:- nth($size, 4);
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    .box {
      padding:nth($size, 4);
      .tit {
        font-size: 2.4rem;
        color: #161616;
        line-height: $lg1;
        p {
          font-weight: 600;
          @include transition();
        }    
        .more { 
          height: $lg1;
          padding-right: nth($size, 4);          
          font-size: nth($size, 2);
          font-weight: 500;
          background: url($url+'more_arrow.png') right center no-repeat;
          @include transition();
          &:hover{
            transform:$trs;
          }
        }
        .tab {
          p {
            margin-right: nth($size , 2);
            cursor: pointer;
            opacity: .5;
            
            &::after {
              content: '';
              display: block;
              position: absolute;
              width: 0;
              height: .2rem;
              left: 50%;
              background: #161616;
              @include transition();
            }
          }
          .more {
            display:none;
            right:0;
            top:0;
            &:hover {
              transform:$trs;
            }
          }          
        }
        .tab.active {
          p {
            opacity: 1; 
            &::after {
              width: 100%;
              left: 0;
            }
          }
          .more {
            display:block;
          }
        }
      }      
    }
  }  
}
</style>