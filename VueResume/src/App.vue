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
  display: flex;
  flex-direction: column;
}
.topbar{
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  position: relative; z-index:1;
}
main{
  display: flex;
  flex:1;
  background-color: #ddd;
   > .editor{
     width:40em;
     margin:16px 8px 16px 16px;
     background-color: #fff;
     box-shadow: 0 0 3px hsla(0,0,0,0.5);
     border-radius: 4px;
     overflow: hidden;
   }
   > .preview {
     flex: 1;
     margin:16px 16px 16px 8px;
     background-color: #fff;
     box-shadow: 0 0 3px hsla(0,0,0,0.5);
     border-radius: 2px;
   }
  }
</style>
