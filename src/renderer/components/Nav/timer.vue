<template>
    <header class="nav-header">
        <h1 class="nav-title">{{ now }}</h1>
    </header>
</template>

<script>
  import utils from '../../../../static/utils'
  export default {
    data () {
      return {
        now:""
      }
    },
    created() {
      setInterval(() => {
        let date = new Date();
        let nowDate = utils.fmtDate(date, 'yyyy-MM-dd HH:mm:ss');
        this.now = nowDate;
      }, 1000);
    }
  }
</script>

<style scoped>
  h1{
    font-size: 1.5rem;
  }
</style>