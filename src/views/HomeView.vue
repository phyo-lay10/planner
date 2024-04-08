<template>
  <div>
    <FilterNav @filterValue="filterPlans" :filterPlan="filterPlans" />
    <div
      v-if="planStore.showAlert"
      class="alert alert-success alert-dismissible fade show w-25 text-center fw-bold mx-auto mt-5 mb-2"
      role="alert"
    >
      Success !
      <button
        type="button"
        class="btn-close"
        @click="planStore.showAlert = false"
        aria-label="Close"
      ></button>
    </div>
    <div class="d-flex justify-content-end mb-3">
      <router-link :to="{ name: 'addPlan' }" class="btn btn-sm btn-primary"
        >Add Plan</router-link
      >
    </div>
    <div v-for="plan in filteredPlans" :key="plan.id">
      <SinglePlan :plan="plan" />
    </div>
  </div>
</template>

<script setup>
import SinglePlan from "@/components/SinglePlan.vue";
import FilterNav from "@/components/FilterNav.vue";
import { usePlanStore } from "@/stores/plan";

import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

const planStore = usePlanStore();
const { plans } = storeToRefs(planStore);

const alertMsg = () => {
  showAlert.value = true;
};

// try {
//   const { plans } = storeToRefs(planStore);
// } catch (error) {
//   console.error("Error accessing store:", error);
// }

const currentFilter = ref("all");

const filteredPlans = computed(() => {
  if (currentFilter.value === "all") {
    return plans.value;
  } else {
    return plans.value.filter(
      (plan) => plan.isDone === (currentFilter.value === "complete")
    );
  }
});

const filterPlans = (value) => {
  currentFilter.value = value;
};
</script>

<style scoped></style>
