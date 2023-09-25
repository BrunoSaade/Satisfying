import state from './state'

const getters = {
  getCardDatas() {
    return state?.cardsData
  },
  getSelectedCardResearch() {
    return state?.selectedCardResearch
  }
} 

const { getCardDatas, getSelectedCardResearch } = getters;

export { getCardDatas, getSelectedCardResearch };