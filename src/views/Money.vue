<template>
<Layout class-prefix="layout">
  <NumberPad/>
  <Notes/>
  <Tags/>
  <Types/>
</Layout>
</template>


<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
export default {
  name: 'Money',
  components: {Types, Tags, Notes, NumberPad},
};
</script>

<style lang="scss">
  .layout-content{
    display:flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types{
  display:flex;
  flex-direction: row;
  justify-content:center;
  background:#FFA07A;
  text-align: center;
  height:7vh;
  > li{
    width:18vw;
    font-size: 21px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:2vh;
    &.selected::after{
      content:'';
      position: absolute;
      bottom: 0;
      left:0;
      width: 100%;
      height: 2px;
      background: #333;
    }
  }
}
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
.notes{
  font-size: 14px;
  padding:5px 4vw;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px rgba(0,0,0,0.1) ;
  height:6vh;
  .name{
    padding-right: 4vw;
  }
  input{
    height:9vw;
    padding:0 1vw;
    flex-grow: 1;
    background: transparent;
    border:none;
  }
}

.numberPad{
  .output{
    font-size:24px;
    font-family: Consolas,monospace;
    padding-left: 86%;
    text-align: right;
    background: #f2f2f2;
    box-shadow: 0 0 1px rgba(0,0,0,0.1) ;
    height:7vh;
    display: -webkit-flex;
    -webkit-align-items: center
  }
  .buttons{
    @extend %clearFix;
    > button{
      width:25vw;
      height:8vh;
      float:left;
      background:transparent;
      border:none;
      &.ok{
        height:16vh;
        float:right;
      }
      $bg:#f2f2f2;
      &.zero{
        width:50vw;
      }
      &:nth-child(1){
        background: $bg;

      }
      &:nth-child(2),&:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($bg,8%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: darken($bg,12%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: darken($bg,16%);
      }
      &:nth-child(14){
        background: darken($bg,20%);
      }
      &:nth-child(12){
        background: darken($bg,24%);
      }
    }

  }
}
</style>