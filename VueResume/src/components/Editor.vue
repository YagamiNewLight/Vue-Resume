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
        <IdentityInfo v-bind:profile="resume.profile"></IdentityInfo>
      </li>
      <li v-bind:class="{active:currentTab === 1 }">
        <ItemsEditor v-bind:items="resume.workHistory" v-bind:labels='{company:"公司名称",content:"工作内容"}'
                     v-bind:type="'工作经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active:currentTab === 2 }">
        <ItemsEditor v-bind:items="resume.awards" v-bind:labels='{name:"获奖情况"}' v-bind:type="'获奖情况'"></ItemsEditor>
      </li>
      <li v-bind:class="{active:currentTab === 3 }">
        <ItemsEditor v-bind:items="resume.projectExperience"
                     v-bind:labels='{projectName:"项目名称",projectDescription:"项目描述",skillStack:"技术栈"}'
                     v-bind:type="'项目经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active:currentTab === 4 }">
        <ItemsEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'学习时间',degree:'学位'}"
                     v-bind:type="'学习经历'"></ItemsEditor>
      </li>
      <li v-bind:class="{active:currentTab === 5 }">
        <h2>联系方式</h2>
        <el-form :model="resume.contact" v-bind:resume.contact="resume.contact">
          <el-form-item label="QQ">
            <el-input v-model="resume.contact.QQ"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contact.Wechat"></el-input>
          </el-form-item>
          <el-form-item label="电话号码">
            <el-input v-model="resume.contact.Tel"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="resume.contact.Email"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
  import IdentityInfo from './IdentityInfo.vue'
  import ItemsEditor from './ItemsEditor.vue'

  export default {
    props: ['resume'],
    components: {IdentityInfo, ItemsEditor},
    data() {
      return {
        currentTab: 0,
        icons: ['#icon-credentials_icon', '#icon-gongzuo1', "#icon-heart", "#icon-shujiyuedu", "#icon-jiangbei", "#icon-phone"],
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory: [
          {company: '', content: ''}
        ],
        studyHistory: [
          {school: '', duration: '', degree: ''}
        ],
        projectExperience: [
          {projectName: '', projectDescription: '', skillStack: ''}
        ],
        contact:{QQ: '', Wechat: '', Tel: '', email: ''},
        awards: [
          {name: ''}
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
    text-align: center;
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
    display: none;
  }

  .el-form-item .el-button.active {
    padding: 5px 10px;
    display: inline-block;
    vertical-align: middle;
  }
</style>

