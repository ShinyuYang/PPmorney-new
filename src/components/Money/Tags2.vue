<template>
<div class="tags">
  <ul class="current">
    <li><span>衣服</span></li>
    <li><span>食品</span></li>
    <li><span>住房</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
    <li><span>交通</span></li>
  </ul>
  <div class="new">
    <button class="add">
      <Icon name="add2"/>
    </button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from'vue';
import {Component} from'vue-property-decorator';
@Component
export default class Tags2 extends Vue {

}
</script>

<style lang="scss" scoped>
.tags{
  margin-top:12px;
  padding-left:4vw;
  padding-right:4vw;
  height: 45vh;
  flex-grow:1;
  overflow: auto;
  > .current{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap:wrap;
    > li {
      background:rgb(241,243,244);
      height:54px;
      width:54px;
      border-radius:50% 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.5vh 4vw;

    }
  }
  .new{
    position: absolute;
    left:84%;
    top:32%;
  > .add{
    height: 40px;
    width: 40px;
    border-radius:50% 50%;
    border:none;
    background:#FFA07A ;
    > .icon{
      height: 40px;
      width: 40px;
    }
  }
  }
    }

</style>