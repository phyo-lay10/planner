<template>
  <div>
    <div class="d-flex justify-content-end mb-4">
      <!-- <h5 class="fw-bold">Add new plan</h5> -->
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
          type="text"
          v-model="inputTitle"
          class="form-control shadow-sm border-0"
        />
      </div>
      <div class="mb-3">
        <label for="detail" class="mb-2"><b>Detail</b></label>
        <input
          type="text"
          v-model="inputDetail"
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

      <button class="btn btn-sm btn-info mt-3" @click="addNewPlan">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { usePlanStore } from "@/stores/plan";
import { storeToRefs } from "pinia";
import router from "@/router";

const planStore = usePlanStore();
const { plans } = storeToRefs(planStore);

const inputInvalid = ref(false);

const inputTitle = ref("");
const inputDetail = ref("");

const addNewPlan = () => {
  inputInvalid.value = false;

  if (inputTitle.value === "" || inputDetail.value === "") {
    inputInvalid.value = true;
  } else {
    const newPlan = {
      id: Math.floor(Math.random() * 100),
      title: inputTitle.value,
      detail: inputDetail.value,
      isDone: false,
    };
    planStore.plans.push(newPlan);
    planStore.showAlert = true;
    router.push("/");
  }
};
</script>

<style scoped></style>
