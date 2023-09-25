import state from "./state";

const mutations = {
  setSelectedCardResearch(value: object) {
    state.selectedCardResearch = value;
  },
} 

const { setSelectedCardResearch } = mutations;

export { setSelectedCardResearch };
