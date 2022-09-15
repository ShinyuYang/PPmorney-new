<template>
<div class="tags">
  <ul class="current">
    <li v-for="tag in tagList" :key="tag.id"
        :class="{selected: selectedTags.indexOf(tag)>=0}"
        @click="select(tag)"><span>{{tag.name}}</span></li>
    <!-- 另一个写法  :class="selectedTags.indexOf(tag)>=0&&'selected'";
    selected是类名,后面是触发该类型的条件-->
  </ul>
  <div class="new">
    <button class="add"
            @click="create">
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
  selectedTags: string[] = [];

  get tagList(){
    return this.$store.state.tagList;
  }
  created(){
    this.$store.commit('fetchTags');
  }

  select(tag: string) {
    const index = this.selectedTags.indexOf(tag)//判断selectedTags是否存在数据的语句
    if (index >= 0) {
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags = []
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)//得到被选中的selectedTags然后传到父组件Money
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (!name) {
     return  window.alert('标签名不能为空');
    }
      this.$store.commit('createTag',name);
    }
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
      background:rgb(245,245,246);
      height:54px;
      width:54px;
      border-radius:50% 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.5vh 4vw;
      &.selected{
        background:#FFA07A ;
      }
    }
  }
  .new{
    position: absolute;
    left:84%;
    top:34%;
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
.tags::-webkit-scrollbar {
  display: none;
}

</style>