<template>
  <div>
    {{ storeCount }}
    <span v-bind:title="message"> 点我悬停看效果 </span>
    <button @click="increasement">点击我试试</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      message: "hello, i am kaka",
      count: 0,
      storeCount: this.$store.state.count,
    };
  },
  setup() {
    const count = ref(0);
    return { count };
  },

  mounted() {
    console.log("mounted >>>", this.count);
  },

  methods: {
    increasement() {
      this.$store.commit("increment");
    },
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
