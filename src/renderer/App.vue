<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <tagnav></tagnav>
    <mainarea></mainarea>
    <!-- <detail></detail> -->
  </div>
</template>

<script>
  import tagnav from "./components/Nav/tagnav";
  import mainarea from "./components/MainArea/mainarea";
  //import detail from "./components/Detail/detail";
  export default {
    name: 'mytodo',
    components:{
      tagnav,
      mainarea
    },
    data(){
      return {
        
      };
    },
    created(){

    },
    methods:{
      // About DataBase Operation
      getDBSrc(params) {
        
      },
      saveDBFile(){

      }
    }
  }
</script>

<style scoped>
/* CSS */
  #app{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#5664ff 20%, rgb(117, 195, 226) 50%);
    display: flex;
    flex-direction: row;
  }
</style>