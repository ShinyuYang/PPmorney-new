<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue{
   @Prop({default:''}) readonly value!: string;

    @Prop({required: true}) fieldName!: string;
    @Prop()placeholder?: string;

    onValueChanged(value: string){
      this.$emit('update:value',value);
    }
  }
</script>

<style lang="scss" scoped>
.notes{
  font-size: 14px;
  padding:5px 4vw;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px rgba(0,0,0,0.1) ;
  height:6vh;
  position: relative;
  .name{
    padding-right: 4vw;
  }
  input{
    height:44px;
    padding:0 1vw;
    flex-grow: 1;
    background: transparent;
    border:none;
  }
}
</style>