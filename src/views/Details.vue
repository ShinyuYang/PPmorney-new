<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="array2" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="array" :value.sync="interval"/>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id"
                class="record">
              <span>{{tagString(item.tags)}}</span>
              <span class="detailNotes" :style="{marginRight:'auto'}">{{item.notes}}</span>
              <span>¥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>

<style scoped lang="scss">
::v-deep .type-tabs-item{
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.1);
  padding-top:1.5vh;
  padding-bottom: 1vh;
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
  }
}
 ::v-deep .interval-tabs-item{
   height:6vh;
   padding-top:2vh;
   padding-bottom:1.5vh;
   line-height:2vh;
   font-size: 18px;
 }
 %item{
   padding:1.5vh 1.5vh;
   line-height:5vh;
   background: rgba(245,245,246);
   display: flex;
   justify-content: space-between;
   align-content: center;
 }

.title{
  padding: 0 16px;
  @extend %item;
}
 .record{
   background:white;
   padding: 5px 16px;
   display: flex;
   justify-content: space-between;
   box-shadow: 0 0 2px rgba(0,0,0,0.1);
 }
 .detailNotes{
   margin-right: auto;
   margin-left: 16px;
   color:#999;
 }
</style>


<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';



@Component({
  components:{Tabs},
})
export default class Details extends Vue{
  tagString(tags: string[]){
    return tags.length===0?'无' : tags.join(',');
  }



  get recordList(){
    return (this.$store.state as RootState).recordList;
  }
  get result(){
    const {recordList}=this;
    type HashTableValue={title: string;items: RecordItem[] }

    const hashTable: {[key: string]: HashTableValue} ={};
    for(let i=0;i<recordList.length;i++){
      const[date,time]=recordList[i].createdAt!.split('T');
      hashTable[date]=hashTable[date] ||{title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  beforeCreate(){
    this.$store.commit('fetchRecords');
  }
  type = '-'
  interval='day'
  array=intervalList;
  array2=recordTypeList
}
</script>
