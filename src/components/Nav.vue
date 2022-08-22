<template>
  <nav>
    <router-link to="/details" class="item" active-class="selected">
      <Icon name="details"/>
      明细</router-link>
    <router-link to="/money" class="item" active-class="selected">
<!--active-class点击高亮-->
     <Icon name="add"/>
      记账
    </router-link>
    <router-link to="/statistic" class="item" active-class="selected">
      <Icon name="statistic"/>
      趋势</router-link>
  </nav>
</template>

<script lang="ts">



export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    box-shadow: 0 0 10px rgba(0,0,0,0.25) ;
    flex-direction:row;
    font-size: 12px;
    > .item{
      padding: 2px 0;
      width:33.3%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
        .icon{
          width: 32px;
          height:32px;
        }
    }
    > .item.selected{
      font-weight:bolder;
      .icon{
        transform: scale(1.2,1.2);
      }
    }
  }
</style>