<template>
  <div id="app" v-bind:class="{previewMode}">
    <Topbar class="topbar" v-on:preview="preview"></Topbar>
    <main>
      <Editor v-bind:resume="resume" class="editor"></Editor>
      <Preview class="preview" v-bind:resume="resume" v-on:exitPreview="exitPreview"></Preview>
    </main>
  </div>
</template>

<script>
  import Editor from './components/Editor.vue'
  import Topbar from './components/Topbar.vue'
  import Preview from './components/Preview.vue'

  export default {
    name: 'app',
    data() {
      return {
        previewMode: false,
        resume: {
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
          contact: {QQ: '', Wechat: '', Tel: '', Email: ''},
          awards: [
            {name: ''}
          ]
        }
      }
    },
    components: {
      Topbar, Editor, Preview
    },
    methods: {
      preview() {
        this.previewMode = true;
      },
      exitPreview() {
        this.previewMode = false;
      }
    }
  }
</script>

<style lang="scss">
  #app, body, html {
    height: 100%
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }

  .topbar {
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  #app main {
    display: flex;
    flex: 1;
    background-color: #ddd;
    overflow: hidden;
    > .editor {
      width: 40em;
      margin: 16px 8px 16px 16px;
      background-color: #fff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }
    > .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background-color: #fff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 2px;
    }

    .previewMode > #topbar {
      display: none;
    }
    .previewMode #editor {
      display: none;
    }
    .previewMode main #preview {
      max-width: 1200px;
      margin: 32px auto;
    }
    .previewMode main #preview #exitPreview {
      display: inline-block;
      position: absolute;
      right: 16px;
      bottom: 16px;
      z-index: 1;
    }
  }
</style>
