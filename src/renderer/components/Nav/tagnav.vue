<template>
    <div id="tagNav">
        <timer></timer>
        <div class='nav-item-grp' >
            <div class="nav-item-grp-exp">-</div>
            <div class="nav-item">
                重要
            </div>
            <div class="nav-item">
                今日
            </div>
            <div class="nav-item">
                计划
            </div>
        </div>
        <div class='nav-item-grp' id="cus-tag">
            <div class="nav-item-grp-exp">-</div>
            <!-- <div class="nav-item">
                工作
            </div>
            <div class="nav-item nav-item-create">
                新建工作清单
            </div> -->
        </div>
    </div>
</template>
<script>
    import timer from './timer'
    export default {
        name: 'tagnav',
        components:{
            timer
        }
    }
    timer
</script>
<style scoped>
    #tagNav{
        flex: 0 0;
        min-width: 220px;
    }
</style>