<template>
  <div>
    <h2>学习经历</h2>
    <el-form>
      <div v-for="(item,index) in items">
        <el-form-item  v-for="(key,num) in keys"  v-bind:label="labels[key]">
          <el-button type="danger" @click="removeStudyHistory(index)" v-bind:class="{active:num===0}">删除</el-button>
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <hr>
      </div>
      <el-button type="primary" @click="addStudyHistory">添加学习经历</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['items','labels'],
    computed:{
      keys(){
        return Object.keys(this.items[0]);
      }
    },
    methods: {
      addStudyHistory() {
        const empty = {};
        this.keys.map((key) => {
          empty[key] = '';
        });
        this.items.push(empty);
      },
      removeStudyHistory(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>
