<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="点击填写备注~">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notes'
};
</script>

<style lang="scss" scoped>
.notes{
  font-size: 14px;
  padding:5px 4vw;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px rgba(0,0,0,0.1) ;
  height:6vh;
  .name{
    padding-right: 4vw;
  }
  input{
    height:9vw;
    padding:0 1vw;
    flex-grow: 1;
    background: transparent;
    border:none;
  }
}
</style>