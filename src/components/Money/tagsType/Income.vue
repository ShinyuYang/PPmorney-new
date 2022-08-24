<template>
<div>
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
           :class=" sort ==='clothes'&&'selected'"
           @click="toggle('clothes')">
        <Icon name="clothes"/>
      </div>
      <span>衣服</span>
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
export default class Income extends Vue {

}
</script>

<style lang="scss" scoped>

</style>