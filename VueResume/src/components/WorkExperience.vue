<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div v-for="work in workHistory">
        <el-form-item label="公司名称">
          <el-button type="danger" @click="removeWorkHistory(work)">删除</el-button>
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <hr>
      </div>
      <el-button type="primary" @click="addWorkHistory">添加工作经历</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:['workHistory'],
    methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: '', content: ''
      })
    },
    removeWorkHistory(work) {
      let index = this.workHistory.indexOf(work);
      this.workHistory.splice(index, 1)
      }
    }
  }
</script>
