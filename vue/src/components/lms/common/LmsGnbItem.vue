<template>
  <li class="accordion-item" :class="{ 'active': isOpen }" @click="toggleAccordion" :style="{ height: isOpen ? accordionHeaderHeight + accordionContentHeight + 'px' : accordionHeaderHeight + 'px' }">
    <router-link ref="headerRef" :to="link" class="accordion-header">
      {{ title }}
    </router-link>
    <transition name="accordion-slide">
      <div ref="contentRef" class="accordion-content">
        <ul>
          <li v-for="(subItem, subIndex) in subItems" :key="subIndex">
            <router-link :to="subItem.link">{{ subItem.title }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    subItems: Array,
    index: Number,
    currentIndex: Number,
  },
  data() {
    return {
      isOpen: this.index === this.currentIndex || this.isSubItemActive(),
      accordionHeaderHeight: 0,
      accordionContentHeight: 0,
    };
  },
  methods: {
    toggleAccordion() {
      this.$emit('toggle', this.index);
    },
    isSubItemActive() {
      const currentRoute = this.$route.path;
      return this.subItems.some((subItem) => currentRoute.includes(subItem.link));
    },
  },
  watch: {
    currentIndex(newIndex) {
      this.isOpen = this.index === newIndex || this.isSubItemActive();
    },
  },
  mounted() {
    this.isOpen = true;
    this.$nextTick(() => {
      this.isOpen = this.isSubItemActive();
      // 헤더와 컨텐츠의 높이를 참조로 가져옴
      this.accordionHeaderHeight = this.$refs.headerRef.offsetHeight;
      this.accordionContentHeight = this.$refs.contentRef.offsetHeight;
      console.log (this.$refs.headerRef.offsetHeight)
      console.log (this.$refs.contentRef.offsetHeight)
    });
    this.$router.afterEach(() => {
      this.isOpen = this.isSubItemActive();
    });
  },
};
</script>

<style scoped>
/* 다른 스타일들 */

/* .accordion-item의 높이 설정 */
.accordion-item {
  overflow: hidden;
  transition: height 0.3s ease;
}

/* .accordion-item.active의 높이 설정 */
.accordion-item.active {
  height: auto; /* 높이가 자동으로 조절되도록 설정하거나 필요한 높이 값으로 변경 */
}

/* 나머지 스타일들 */
</style>
