import { createStore } from "vuex";

export default createStore({
    state() {
      return {
        count: 0,
      };
    },
    mutations: {
      increment(state: any) {
        console.log("increment >>")
        state.count++;
      },
    },
  });
