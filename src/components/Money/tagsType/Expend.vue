<template>
  <div class="tags">
  <ul class="current">
    <li >
      <div class="svg-wrapper"
           :class=" sort ==='dailyuse'&&'selected'"
           @click="toggle('dailyuse')">
        <Icon name="dailyuse"/>
      </div>
      <span>日用</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='food'&&'selected'"
           @click="toggle('food')">
        <Icon name="food"/>
      </div>
      <span>餐饮</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='shopping'&&'selected'"
           @click="toggle('shopping')">
        <Icon name="shopping"/>
      </div>
      <span>购物</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='entertain'&&'selected'"
           @click="toggle('entertain')">
        <Icon name="entertain"/>
      </div>
      <span>娱乐</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='traffic'&&'selected'"
           @click="toggle('traffic')">
        <Icon name="traffic"/>
      </div>
      <span>交通</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='makeup'&&'selected'"
           @click="toggle('makeup')">
        <Icon name="makeup"/>
      </div>
      <span>美容</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='income'&&'selected'"
           @click="toggle('income')">
        <Icon name="income"/>
      </div>
      <span>工资</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='clothes'&&'selected'"
           @click="toggle('clothes')">
        <Icon name="clothes"/>
      </div>
      <span>衣服</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='partime'&&'selected'"
           @click="toggle('partime')">
        <Icon name="partime"/>
      </div>
      <span>兼职</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='finance'&&'selected'"
           @click="toggle('finance')">
        <Icon name="finance"/>
      </div>
      <span>理财</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='communicate'&&'selected'"
           @click="toggle('communicate')">
        <Icon name="communicate"/>
      </div>
      <span>通讯</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='alimony'&&'selected'"
           @click="toggle('alimony')">
        <Icon name="alimony"/>
      </div>
      <span>生活费</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='fruit'&&'selected'"
           @click="toggle('fruit')">
        <Icon name="fruit"/>
      </div>
      <span>水果</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='game'&&'selected'"
           @click="toggle('game')">
        <Icon name="game"/>
      </div>
      <span>游戏</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='gift'&&'selected'"
           @click="toggle('gift')">
        <Icon name="gift"/>
      </div>
      <span>礼物</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='home'&&'selected'"
           @click="toggle('home')">
        <Icon name="home"/>
      </div>
      <span>家居</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='medical'&&'selected'"
           @click="toggle('medical')">
        <Icon name="medical"/>
      </div>
      <span>医疗</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='pet'&&'selected'"
           @click="toggle('pet')">
        <Icon name="pet"/>
      </div>
      <span>宠物</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='snacks'&&'selected'"
           @click="toggle('snacks')">
        <Icon name="snacks"/>
      </div>
      <span>零食</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='redbag'&&'selected'"
           @click="toggle('redbag')">
        <Icon name="redbag"/>
      </div>
      <span>红包</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='sport'&&'selected'"
           @click="toggle('sport')">
        <Icon name="sport"/>
      </div>
      <span>运动</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='study'&&'selected'"
           @click="toggle('study')">
        <Icon name="study"/>
      </div>
      <span>学习</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='more'&&'selected'"
           @click="toggle('more')">
        <Icon name="more"/>
      </div>
      <span>其他</span>
    </li>
    <li>
      <div class="svg-wrapper"
           :class=" sort ==='set'&&'selected'"
           @click="toggle('set')">
        <Icon name="set"/>
      </div>
      <span>设置</span>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from'vue';
import {Component} from'vue-property-decorator';

@Component
export default class Expend extends Vue {
  sort ='';
  toggle(sort='string'){
    if(this.sort===sort){
      this.sort=''
    }else{
      this.sort=sort
    }
  }
}
</script>

<style lang="scss" scoped>
.tags{
  margin-top:10px;
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
        &.selected{
          background:#FFA07A;
        }
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