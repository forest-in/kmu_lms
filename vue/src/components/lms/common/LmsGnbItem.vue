<template>
  <li class="accordion-item" :class="{ 'active': isOpen, 'ico': subItems && subItems.length > 0 }" @click="toggleAccordion">
    <router-link :to="link" class="accordion-header">
      {{ title }}
    </router-link>
    <transition name="accordion-slide">
      <div v-show="isOpen" ref="contentRef" class="accordion-content" :style="{ maxHeight: contentHeight + 'px' }">
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
      contentHeight: 0,
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
    updateContentHeight() {
      this.contentHeight = this.$refs.contentRef.scrollHeight;
    },
  },
  watch: {
    currentIndex(newIndex) {
      this.isOpen = this.index === newIndex || this.isSubItemActive();
    },
    isOpen(newValue) {
      if (newValue) {
        this.$nextTick(this.updateContentHeight);
      } else {
        this.contentHeight = 0;
      }
    },
  },
  mounted() {
    this.isOpen = true;
    this.updateContentHeight();
    this.$router.afterEach(() => {
      this.isOpen = this.isSubItemActive();
    });
  },
};
</script>

<style scoped>
/* Your styles for AccordionItem */

/* .accordion-item의 높이 설정 */
.accordion-item {
  overflow: hidden;
  transition: max-height 1s ease;
}

/* .accordion-item.active의 높이 설정 */
.accordion-item.active {
  max-height: none; /* Set to a reasonable value, adjust as needed */
}

/* .accordion-item.on 스타일 설정 */
.accordion-item.on {
  /* 추가적인 스타일 정의 */
}

.accordion-content {
  overflow: hidden;
}

/* 나머지 스타일들 */
</style>
