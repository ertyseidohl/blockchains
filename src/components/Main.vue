<template>
  <div class="hello">
    <OptionsDisplay />
    <CoinDisplay />
  </div>
</template>

<script>
import OptionsDisplay from './OptionsDisplay'
import CoinDisplay from './CoinDisplay'

export default {
  name: 'hello',
  components: { OptionsDisplay, CoinDisplay }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
  }
</style>
