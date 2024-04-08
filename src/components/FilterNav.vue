<!-- <template>
  <div class="text-center mt-4 mb-3">
    <button
      type="button"
      class="btn btn-sm btn-outline-dark border-0 fw-bold shadow mx-2"
      @click="$emit('filterValue', 'all')"
    >
      All
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-dark border-0 fw-bold shadow mx-2"
      @click="$emit('filterValue', 'complete')"
    >
      Complete
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-dark border-0 fw-bold shadow mx-2"
      @click="$emit('filterValue', 'ongoing')"
    >
      Ongoing
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps["filterPlan"];
console.log(current);
</script>
<style scoped></style> -->
<template>
  <div class="text-center mt-4 mb-3">
    <button
      type="button"
      class="btn btn-sm btn-white border-0 fw-bold shadow mx-2"
      :class="{ active: currentFilter === 'all' }"
      @click="handleFilter('all')"
    >
      All
    </button>
    <button
      type="button"
      class="btn btn-sm btn-white border-0 fw-bold shadow mx-2"
      :class="{ active: currentFilter === 'complete' }"
      @click="handleFilter('complete')"
    >
      Complete
    </button>
    <button
      type="button"
      class="btn btn-sm btn-white border-0 fw-bold shadow mx-2"
      :class="{ active: currentFilter === 'ongoing' }"
      @click="handleFilter('ongoing')"
    >
      Ongoing
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  filterPlan: Function,
});

const currentFilter = ref("all");

const handleFilter = (filter) => {
  currentFilter.value = filter;
  props.filterPlan(filter); // Emit the filter value to the parent component
};
</script>

<style scoped>
.active {
  background-color: #121212;
  color: white;
}
</style>
