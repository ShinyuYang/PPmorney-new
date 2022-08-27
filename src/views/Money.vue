<template>
<Layout class-prefix="layout">
  {{recordList}}
  <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
  <Types :value.sync="record.type"/>
  <Notes @update:value="onUpdateNotes"/>
  <Tags2 :data-source.sync="tags" @update:value="onUpdateTags"/>
<!--  前者传给子组件数据,后者是从子组件传进来-->
<!--  onUpdateTags是本组件的一个方法,update:value是子组件的事件(传入value)-->
</Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags2 from '@/components/Money/Tags2.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record={
  tags: string[];
  notes: string;
  type: string;
  amount: number;//数据类型
  createdAt?: Date;//类(构造函数) 数据类型object可以细分成不同的类
 }


@Component({
  components: {Tags2,Notes,Types,NumberPad},
})
export default class Money extends Vue  {
     tags=['衣服','食品','住宿','交通'];
     recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList') ||'[]');
      record: Record={
        tags: [],
        notes: '',
        type: '-',
        amount: 0,
      };
     onUpdateTags(value: string[]) {
        this.record.tags=value;
     }
     onUpdateNotes(value: string){
        this.record.notes=value;
     }
  onUpdateAmount(value: string){
    this.record.amount= parseFloat(value);
  }
  saveRecord(){
    const record2: Record =JSON.parse(JSON.stringify(this.record));//深拷贝方法
    record2.createdAt=new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
       window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
  .layout-content{
    display:flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

</style>