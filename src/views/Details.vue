<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="array2" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="array" :value.sync="interval"/>
    <div>
      type: {{type}}
      interval: {{interval}}
    </div>>
  </Layout>
</template>

<style scoped lang="scss">
::v-deep .type-tabs-item{
  background: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.1);
  &.selected{
    background: #c4c4c4;
    &::after{
      display: none;
    }
  }
}
</style>


<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';



@Component({
  components:{Types,Tabs},
})
export default class Details extends Vue{
type = '-'
  interval='day'
array=[
  {text: '按天',value: 'day'},
  {text: '按周',value: 'week'},
  {text: '按月',value: 'month'},
];
array2=[
  {text:'支出',value:'-'},
  {text:'支出',value:'+'}
]
}
</script>
