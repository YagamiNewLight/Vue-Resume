<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor class="editor"></Editor>
      <Preview class="preview"></Preview>
    </main>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Topbar from './components/Topbar.vue'
import Preview from './components/Preview.vue'
export default {
  name: 'app',
  components: {
    Topbar,Editor,Preview
  }
}
</script>

<style lang="scss">
  #app,body,html{height:100%}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.topbar{
}
main{
  margin:20px auto;
  width:1400px;
  display: flex;
   > .editor{
    width:20em;
  }
   > .preview {
     flex: 1;
   }
  }
</style>
