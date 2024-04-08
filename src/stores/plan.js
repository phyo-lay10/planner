import { ref } from "vue";

import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", () => {
  const plans = ref([
    {
      id: 1,
      title: "IT Chapter2",
      detail: "Action",
      isDone: false,
      showAlert: false,
    },
    {
      id: 2,
      title: "IP Man",
      detail: "Action",
      isDone: false,
      showAlert: false,
    },
    {
      id: 3,
      title: "Iron Man",
      detail: "Action",
      isDone: false,
      showAlert: false,
    },
    // {
    //   id: 4,
    //   title: "Turbo",
    //   detail: "Cartoon",
    //   isDone: false,
    // },
    // {
    //   id: 5,
    //   title: "Kunfu Panda",
    //   detail: "Cartoon",
    //   isDone: false,
    // },
  ]);

  return { plans };
});
