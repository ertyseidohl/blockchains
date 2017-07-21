<template>
  <div class="coins box">
    <div
      v-for="(amount, name) in $store.state.coins"
      :key="name"
    >
      {{coinValue(amount, name)}}
      <button
        @click="buy(name)"
      >Buy</button>
    </div>
  </div>
</template>

<script>
import * as currencies from '../enums'

export default {
  methods: {
    buy (name) {
      this.$store.commit('buy', {
        from: 'dollars',
        to: name
      })
    },
    coinValue (coin, name) {
      let amount = coin
      if (amount === 0) {
        amount = 0
      } else if (amount < 1) {
        amount = amount.toFixed(5)
      } else if (amount < 1000) {
        amount = amount.toFixed(2)
      } else if (amount < 1000000) {
        amount = Math.floor(amount / 1000) * 1000 + 'k'
      } else if (amount < 1000000000) {
        amount = Math.floor(amount / 1000000) * 100000 + 'm'
      } else {
        amount = 'lots (lol todo)'
      }
      return `${amount} ${currencies[name].symbol}`
    }
  }
}
</script>

<style scoped>
  .coins {
    flex-basis: 25%;
  }
</style>