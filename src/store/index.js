import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  exchange: {
    dollars: 1,
    blitcoin: 0.023
  },
  coins: {
    dollars: 100,
    blitcoin: 0
  }
}

const mutations = {
  coins (state, diff) {
    state.coins[diff.currency] += diff.amount
  },
  buy (state, diff) {
    state.coins[diff.from] -= state.exchange[diff.to]
    state.coins[diff.to] += 1
  }
}

export default new Vuex.Store({
  state,
  mutations
})
