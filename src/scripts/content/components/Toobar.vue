<template>
    <div class="toolbar-component">
        <div class="toolbar-component-title">Climber.com Career Manager</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .toolbar-component {
        width: 100%;
        height: 56px;
        background-color: #1497ff;
        display: flex;
        align-items: center;
    }
    .toolbar-component-title {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: .02em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
        margin-left: 20px;
    }
</style>
