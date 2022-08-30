<template>
  <button class="button"
         @click="$emit('click',$event)">
<!--    button被点击触发Button事件-->
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from'vue';
import {Component} from'vue-property-decorator';
@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button{
  background:#FFA07A ;
  color:ghostwhite;
  border-radius: 4px;
  border:none;
  height:40px;
  padding:0 16px;

}
</style>