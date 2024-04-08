<template>
  <div>
    <div class="d-flex justify-content-end mb-4">
      <div>
        <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary"
          >Back</router-link
        >
      </div>
    </div>
    <div class="w-50 mx-md-auto shadow-sm rounded p-5 bg-body-tertiary">
      <div class="mb-3">
        <label for="title" class="mb-2"><b>Title</b></label>
        <input
          id="title"
          v-model="title"
          type="text"
          class="form-control shadow-sm border-0"
        />
      </div>
      <div class="mb-3">
        <label for="detail" class="mb-2"><b>Detail</b></label>
        <input
          v-model="detail"
          type="text"
          id="detail"
          class="form-control shadow-sm border-0"
        />
      </div>
      <p
        v-if="inputInvalid"
        class="text-danger mt-4 mb-2 shadow-sm border border-danger p-2 rounded text-center fw-bold"
      >
        Fill both fields please!
      </p>

      <button class="btn btn-sm btn-info mt-3" @click="updatePlan">
        Update
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePlanStore } from "@/stores/plan";
import { storeToRefs } from "pinia";
import router from "@/router";

const props = defineProps(["id"]);

const inputInvalid = ref(false);

const planStore = usePlanStore();
const { plans } = storeToRefs(planStore);

const plan = computed(() => {
  return plans.value.find((plan) => plan.id == props.id);
});

const title = ref(plan.value.title);
const detail = ref(plan.value.detail);

const updatePlan = () => {
  inputInvalid.value = false;
  console.log("ID to update:", props.id);

  if (title.value === "" || detail.value === "") {
    inputInvalid.value = true;
  } else {
    console.log("Plans:", plans.value);

    // Convert props.id to number for consistent comparison
    const targetId = parseInt(props.id);

    // Find the index of the plan to update
    const index = plans.value.findIndex((plan) => plan.id === targetId);

    console.log("Index:", index);

    if (index === -1) {
      console.error("Plan not found with ID:", props.id);
      return; // Exit the function if plan not found
    }

    // Update plan properties using refs
    plans.value[index].title = title.value;
    plans.value[index].detail = detail.value;

    // Set showAlert to true in the store
    planStore.showAlert = true;

    // Redirect to the home page
    router.push("/");
  }
};
</script>

<style scoped></style>
