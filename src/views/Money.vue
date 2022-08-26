<template>
<Layout class-prefix="layout">
  {{record}}
  <NumberPad @update:value="onUpdateAmount" />
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
import {Component} from 'vue-property-decorator';

type Record={
  tags: string[];
  notes: string;
  type: string;
  amount: number;
 }


@Component({
  components: {Tags2,Notes,Types,NumberPad},
})
export default class Money extends Vue  {
     tags=['衣服','食品','住宿','交通'];
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