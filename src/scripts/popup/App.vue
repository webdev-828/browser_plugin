<template>
  <div class="layout">
    <a href="#" @click="openOption()">Options</a>
  </div>
</template>

<script>

export default {
  methods:{
    openOption(){
      window.open("options.html");
    }
  }
}
</script>

<style scoped>
  .layout {
    height: 100%;
    font-size: 14px;
    display: flex;
    flex-direction: column;
  }
</style>