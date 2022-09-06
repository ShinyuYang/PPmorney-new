<template>
  <div>
    <ul class="types">
      <li :class="{[classPrefix+'-item']: classPrefix,selected: value==='-'}"
          @click="selectType('-')">支出</li>
      <li :class="{[classPrefix+'-item']: classPrefix,selected: value==='+'}"
      @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from'vue';
  import {Component, Prop} from 'vue-property-decorator' ;

  @Component
  export default class Types extends Vue{
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;

    selectType(type='string'){
      if(type!=='-'&&type!=='+'){
        throw new Error('type is unknown')
      }
      this.$emit('update:value',type);
    }
    // created(){}
    // mounted(){} 钩子可以直接写
  }

</script>

<style  scoped lang="scss">
.types{
  display:flex;
  flex-direction: row;
  text-align: center;
  background:#c4c4c4;
  height:7vh;
  > li{
    width:50%;
    font-size: 21px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:2vh;
    &.selected::after{
      content:'';
      position: absolute;
      bottom: 0;
      left:0;
      width: 100%;
      height: 2px;
      background: #333;
    }
  }
}
</style>