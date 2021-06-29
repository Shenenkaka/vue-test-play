<template>
  <router-link to="/foobar">Go to foobar</router-link>
  <router-link to="/helloworld">Go to helloworld</router-link>
  <button @click="handleClick">按我试试</button>
  {{ storeCount }}
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Foobar from './components/Foobar.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Foobar
  },
  computed: {
    storeCount() {
      return this.$store.state.count
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('increment')
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
