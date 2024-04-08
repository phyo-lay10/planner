<template>
  <div class="w-50 mx-md-auto">
    <div class="card card-body mb-4 shadow" :class="{ done: plan.isDone }">
      <div class="d-flex justify-content-between align-items-center">
        <h6 @click="showDetail = !showDetail">{{ plan.title }}</h6>
        <div class="d-flex gap-2">
          <i
            class="bi bi-trash3-fill text-danger"
            title="delete"
            @click="deletePlan(plan.id)"
          ></i>
          <router-link :to="{ name: 'editPlan', params: { id: plan.id } }"
            ><i class="bi bi-pencil-fill text-primary" title="edit"></i
          ></router-link>

          <i
            class="bi bi-check-square-fill text-success"
            title="done"
            @click="donePlan(plan.id)"
          ></i>
        </div>
      </div>
      <p v-if="showDetail" class="mt-3 mb-2">{{ plan.detail }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePlanStore } from "@/stores/plan";
import { storeToRefs } from "pinia";

const planStore = usePlanStore();
const { plans } = storeToRefs(planStore);

defineProps(["plan"]);
const showDetail = ref(false);

// delete
const deletePlan = (id) => {
  const filteredPlans = plans.value.filter((plan) => {
    return plan.id !== id;
  });
  planStore.plans = filteredPlans;
};

const donePlan = (id) => {
  const planToUpdate = plans.value.find((plan) => {
    return plan.id === id;
  });
  planToUpdate.isDone = !planToUpdate.isDone;
};
</script>

<style scoped>
.card {
  background-color: #f2f2f2;
  border: none;
  border-left: 10px solid crimson;
}
.card h6 {
  color: indigo;
  cursor: pointer;
  /* align-items: center; */
  margin: 0;
}
.done {
  border-left-color: green;
}
</style>
