import state from "./state";

const mutations = {
  setSelectedCardSearch(value: object) {
    state.selectedCardResearch = value;
  },
} 

const { setSelectedCardSearch } = mutations;

export { setSelectedCardSearch };
