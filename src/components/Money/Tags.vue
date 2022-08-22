<template>
  <div class="tags">
    <ul class="current">
      <li>
        <div class="svg-wrapper">
          <Icon name="dailyuse"/>
        </div>
        <span>日用</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="food"/>
        </div>
        <span>餐饮</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="shopping"/>
        </div>
        <span>购物</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="entertain"/>
        </div>
        <span>娱乐</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="traffic"/>
        </div>
        <span>交通</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="makeup"/>
        </div>
        <span>美容</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
      <li>
        <div class="svg-wrapper">
          <Icon name="plus"/>
        </div>
        <span>新增</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
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

    > li{
      width:23vw;
      display:flex;
      align-items: center;
      flex-direction: column;
      padding:6px 0;
      > span{
        display:block;
        margin:2px auto;
        //文字居中
        font-size: 10px;
      }
      > .svg-wrapper{
        background:rgb(241,243,244);
        height:54px;
        width:54px;
        border-radius:50% 50%;
        position: relative;
        > .icon{
          position: absolute;
          top:12px;
          left:12px;
          width: 30px;
          height:30px;
          //border: 1px solid red;
        }
      }
    }
  }
}
.tags::-webkit-scrollbar {
  display: none;
}
</style>