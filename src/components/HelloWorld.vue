<template>
  <div class="hello">
    <img src="@/assets/logo.png" @click="go">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到白雪效果展'
    }
  },
  methods: {
    go () {
      this.$router.push({
        name: "index"
      })
    }
  }
}
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: 60px;
}
h1 {
  font-weight: normal;
  color: #2c3e50;
}
</style>
