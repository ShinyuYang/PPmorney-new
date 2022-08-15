<template>
  <div>
    <div>
      <router-link to="/money">记账</router-link>
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/details">明细</router-link>
      |
      <router-link to="/statistic">统计趋势</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav2'
};
</script>

<style lang="scss" scoped>

</style>