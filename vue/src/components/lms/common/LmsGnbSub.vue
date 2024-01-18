<!-- AccordionGroup.vue -->
<template>
  <ul>
    <AccordionItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :link="item.link"
      :subItems="item.subItems"
      :index="index"
      :current-index="currentIndex"
      @toggle="toggleAccordion"
    />
  </ul>
</template>

<script>
import AccordionItem from './LmsGnbItem.vue';

export default {
  components: {
    AccordionItem,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      currentIndex: null,
    };
  },
  methods: {
    toggleAccordion(index) {
      this.currentIndex = this.currentIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Your styles for AccordionGroup */
</style>
