<template>
  <el-input type="number" v-model.number="inputValue" @input="handleInput"></el-input>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  name: 'newCheck',
  methods: {
    handleInput(value) {
      console.log(value)
      const reg = /^\d*(\.\d{0,2})?$/;
      if (!reg.test(value)) {
        this.inputValue = value.slice(0, -1);
      }
    }
  }
};
</script>
