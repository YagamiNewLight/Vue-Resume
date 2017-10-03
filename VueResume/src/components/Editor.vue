<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]"
            v-bind:class="{active:currentTab === i }"
            @click = "currentTab = i"
        >
          <svg>
            <use v-bind:xlink:href="`${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0 }">tab 1</li>
      <li v-bind:class="{active:currentTab === 1 }">tab 2</li>
      <li v-bind:class="{active:currentTab === 2 }">tab 3</li>
      <li v-bind:class="{active:currentTab === 3 }">tab 4</li>
      <li v-bind:class="{active:currentTab === 4 }">tab 5</li>
      <li v-bind:class="{active:currentTab === 5 }">tab 6</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        currentTab: 0,
        icons:['#icon-credentials_icon','#icon-gongzuo1',"#icon-jiangbei","#icon-heart","#icon-shujiyuedu","#icon-phone"]
      }
    }
  }
</script>
<style lang="scss">
  #editor{
    min-height:100px;
    display: flex;
    > nav{
      background-color: #000;
      width:80px;
    }
    > nav > ol > li > svg{width:33px;height:33px;fill:white}
    > nav > ol > li{
      padding:20px 0;
    }
    > nav > ol > li.active{
      > svg{
        fill:black}
      background-color: #fff;
    }
    .panes > li{
      display: none;
      &.active{
        display: block;
      }
    }
    }
</style>

