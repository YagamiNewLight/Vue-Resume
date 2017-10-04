<template>
  <div>
    <h2>{{type}}经历</h2>
    <el-form>
      <div v-for="(item,index) in items">
        <el-form-item  v-for="(key,num) in keys"  v-bind:label="labels[key] || key">
          <el-button type="danger" @click="removeWorkHistory(item)" v-bind:class="{active:num===0}">删除</el-button>
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <hr>
      </div>
      <el-button type="primary" @click="addWorkHistory">添加{{type}}经历</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:['items','labels','type'],
    computed:{
      keys(){
        return Object.keys(this.labels);
      }
    },
    methods: {
      addWorkHistory() {
        const empty = {};
        this.keys.map((key) => {
          empty[key] = '';
        });
        this.items.push(empty);
      },
      removeWorkHistory(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1)
      }
    }
  }
</script>
