<template>
  <div id="preview">
    <h1>{{resume.profile.name || "请填写姓名"}}</h1>
    <p>{{resume.profile.city || "请添加城市"}} | {{resume.profile.birth ||"请填写出生年月"}}</p>
    <hr>

    <section>
      <h1>工作经历</h1>
      <ul>
        <li v-for="work in resume.workHistory">
          <h3>{{work.company}}</h3>
          <p>{{work.content}}</p>
        </li>
      </ul>
      <h2></h2>
      <hr>
    </section>
    <section>
      <h1>项目经历</h1>
      <ul>
        <li v-for="project in resume.projectExperience">
          <h3>{{project.projectName}}</h3>
          <p>{{project.projectDescription}}</p>
          <p>{{project.skillStack}}</p>
        </li>
      </ul>
      <h2></h2>
      <hr>
    </section>
    <section>
      <h1>学习经历</h1>
      <ul>
        <li v-for="study in resume.studyHistory">
          <h3>{{study.school}}</h3>
          <p>{{study.duration}}</p>
          <p>{{study.degree}}</p>
        </li>
      </ul>
      <hr>
    </section>

    <section>
      <h1>获奖经历</h1>
      <ul>
        <li v-for="award in resume.awards">
          <p>{{award.name}}</p>
        </li>
      </ul>
      <h2></h2>
      <hr>
    </section>
    <h1 style="text-align:left;">联系方式</h1>
    <section v-if="filter(resume.contact).length>0">
    <h3>QQ:{{resume.contact.QQ}}</h3>
    <h3>微信：{{resume.contact.Wechat}}</h3>
    <h3>电话：{{resume.contact.Tel}}</h3>
    <h3>邮箱  {{resume.contact.Email}}</h3>
    </section>
    <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<style>
  #preview {
    overflow: auto;
    min-height: 100px;
  }
  #preview > h1{
    text-align: center;
  }
  #preview > p{
    text-align: center;
  }
  #exitPreview{
    display: none;
  }
  section h3{
    margin-top:20px;
    padding-left:20px;
  }
  section p{
    margin-top:20px;
    padding-left:20px;
  }
  ul p {
    margin-top:20px;
  }
</style>

<script>
  export default {
    props: ['resume'],
    methods: {
      exitPreview() {
        this.$emit('exitPreview')
      },
      filter(array) {
        let newArray = [];
        newArray.push(array);
        return newArray.filter(this.isEmpty);
      },
      isEmpty(obj) {
        let num = 0;
        let sum = 0;
        for (let key in obj) {
          if (obj[key]) {
            num = 1;
            sum = num + sum;
          }else{
            num = 0;
            sum = sum + num;
          }
        }
        return !!sum;
      }
    }
  }
</script>
