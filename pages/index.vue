<template>
  <section class="container">
    <div>
      <h1>Input</h1>
      <div class="input">
        <el-input placeholder="Please Input" v-model="input1"></el-input>
        <el-input placeholder="Please Input" v-model="input2"></el-input>
      </div>
    </div>
  </section>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
  },
  data() {
    return {
      input1: null,
      input2: null,
      value1: null,
      fileList: [{name: 'test.csv'}, {name: 'test2.csv'}],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input >>>
  .el-input{
    margin: 5px auto;
  }
</style>
