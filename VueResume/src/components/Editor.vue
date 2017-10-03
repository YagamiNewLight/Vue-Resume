<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]"
            v-bind:class="{active:currentTab === i }"
            @click="currentTab = i"
        >
          <svg>
            <use v-bind:xlink:href="`${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0 }">
        <IdentityInfo v-bind:profile="profile"></IdentityInfo>
      </li>
      <li v-bind:class="{active:currentTab === 1 }">
        <WorkExperience v-bind:workHistory="workHistory"></WorkExperience>
      </li>
      <li v-bind:class="{active:currentTab === 2 }">
        <h2>获奖情况</h2>
      </li>
      <li v-bind:class="{active:currentTab === 3 }">
        <h2>项目经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 4 }">
        <h2>学习经历</h2>
      </li>
      <li v-bind:class="{active:currentTab === 5 }">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>

<script>
  import IdentityInfo from './IdentityInfo.vue'
  import WorkExperience from './WorkExperience.vue'
  export default {
    components: {IdentityInfo,WorkExperience},
    data() {
      return {
        currentTab: 0,
        icons: ['#icon-credentials_icon', '#icon-gongzuo1', "#icon-jiangbei", "#icon-heart", "#icon-shujiyuedu", "#icon-phone"],
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory: [
          {company: '', content: ''}
        ]
      }
    },
    created() {
    }
  }
</script>


<style lang="scss">
  #editor {
    min-height: 100px;
    display: flex;
    > nav {
      background-color: #000;
      width: 80px;
      overflow: hidden;
    }
    > nav > ol > li > svg {
      width: 33px;
      height: 33px;
      fill: white
    }
    > nav > ol > li {
      padding: 20px 0;
    }
    > nav > ol > li.active {
      > svg {
        fill: black
      }
      background-color: #fff;
    }
    > .panes {
      flex: 1
    }
    > .panes h2 {
    }
    > .panes > li {
      display: none;
      padding: 32px;
      overflow: auto;
      height: 100%;
      &.active {
        display: block;
      }
    }
  }

  .el-form .el-button--primary {
    margin-top: 10px;
  }

  .el-form-item {
    text-align: right;
  }

  .el-form-item .el-button {
    padding: 5px 10px;
    display: inline-block;
    vertical-align: middle;
  }
</style>

