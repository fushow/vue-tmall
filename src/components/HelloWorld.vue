<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .wrap{
    display: flex;
  }
  .wrap-item:not(:last-child){
    border-right: 2px solid red;
  }

</style>
