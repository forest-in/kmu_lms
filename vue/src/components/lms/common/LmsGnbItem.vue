<template>
  <li class="accordion-item" :class="{ 'active': isOpen }" @click="toggleAccordion">
    <router-link :to="link" class="accordion-header">
      {{ title }}
    </router-link>
    <transition name="accordion-slide">
      <ul v-show="isOpen" class="accordion-content">
        <li v-for="(subItem, subIndex) in subItems" :key="subIndex">
          <router-link :to="subItem.link">{{ subItem.title }}</router-link>
        </li>
      </ul>
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
    });

    this.$router.afterEach(() => {
      this.isOpen = this.isSubItemActive();
    });
  },
};
</script>

<style scoped>
</style>
