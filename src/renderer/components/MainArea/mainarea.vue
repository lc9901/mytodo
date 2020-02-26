<template>
    <div id="main-area" class="main-block-container container-for-content">
        <!-- <button id='test'>test</button> -->
        <div style="flex: 0 0 auto;">
            <h2>工作</h2>
            <span>0 个任务，0 个未完成</span>
        </div>
        <div style="flex: 1 1 auto; display: flex; flex-direction: column;">
            <div style="flex: 1 1 auto;" >
                <div class="main-item-container">
                    <label class="main-item-sub-fixed"><input class="task-redio" type="checkbox" /></label>
                    <div class="main-item-sub-dynamic">支持图像自动管理</div>
                    <div class="main-item-sub-fixed">++</div>
                </div>
                <div class="main-item-container">
                    <label class="main-item-sub-fixed"><input class="task-redio" type="checkbox" checked /></label>
                    <div class="main-item-sub-dynamic">支持图像自动管理</div>
                    <div class="main-item-sub-fixed">++</div>
                </div>
            </div>
            <div style="flex: 0 0 auto;">
                <div class="main-item-container">
                    <div class="main-item-sub-dynamic">新建</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #main-area{
        flex: 1 1;
    }
</style>