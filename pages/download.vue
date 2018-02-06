<template>
  <section class="container">
    <div>
      <h1>Download</h1>
      <router-link to="/" tag="button" class="el-button el-button--primary">Back</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    props: [
      'hostName'
    ],
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
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
</style>
