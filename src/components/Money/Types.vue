<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'"
          @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'"
      @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from'vue';
  import{Component}from 'vue-property-decorator' ;

  @Component
  export default class Types extends Vue{
    type ='-';//vue自动识别选项是name or method 等选项;一开始是支出
    selectType(type='string'){
      if(type!=='-'&&type!=='+'){
        throw new Error('type is unknown')
      }
      this.type=type
    }
    // created(){}
    // mounted(){} 钩子可以直接写
  }
//JS的写法
// export default {
//   name: 'Types',
//   data(){
//     return{
//       type:'-'//'-'表示支出,'+'表示收入
//     }
//   },
//   methods:{
//     selectType(type){
//       if(type!=='-'&&type!=='+'){
//         throw new Error('type is unknown')
//       }
//       this.type=type
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.types{
  display:flex;
  flex-direction: row;
  justify-content:center;
  background:#FFA07A;
  text-align: center;
  height:7vh;
  > li{
    width:18vw;
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