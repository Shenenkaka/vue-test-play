<template>
  <div>
    {{ msg }}
    <span v-bind:title="message"> 点我悬停看效果 </span>
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
  data: () => {
    return {
      message: "hello, i am kaka",
      count: 0,
    };
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },

  mounted() {
    console.log("mounted >>>", this.count);
  },

  increasement() {
    console.log("this >>> ", this);
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
