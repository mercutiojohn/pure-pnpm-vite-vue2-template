<template>
  <div id="home">
    <button type="button" @click="counter++">counter is {{counter}}</button>
   </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
</style>