<template>
<Layout class-prefix="layout">
  {{record}}
  <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
  <Types :value.sync="record.type"/>
  <Notes field-name="备注"
         placeholder="点击填写备注~"
         @update:value="onUpdateNotes"/>
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
import {recordListModels} from '@/models/recordListModels';
import {tagListModel} from '@/models/tagListModel';

const recordList = recordListModels.fetch();
const tagList = tagListModel.fetch();




@Component({
  components: {Tags2,Notes,Types,NumberPad},
})
export default class Money extends Vue  {
     tags=tagList;
     recordList: RecordItem[]=recordList;
      record: RecordItem={
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
    const record2: RecordItem =recordListModels.clone(this.record);//深拷贝方法
    record2.createdAt=new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
       recordListModels.save(this.recordList);
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