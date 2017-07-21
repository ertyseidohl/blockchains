<template>
  <div class="options box">
    <button
    @click="doWork"
    >Work at Minimum Wage</button>
  </div>
</template>

<script>
export default {
  methods: {
    doWork () {
      this.$store.commit(
        'coins',
        {
          currency: 'dollars',
          amount: 8.15
        }
      )
    }
  }
}
</script>

<style scoped>
  .options {
    flex-basis: 75%;
  }
</style>